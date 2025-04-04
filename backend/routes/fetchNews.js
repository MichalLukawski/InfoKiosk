const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SOURCE_URL = 'https://bg.wat.edu.pl/aktualnosci/';
const CACHE_FILE = path.join(__dirname, '../cache/news.html');
const CACHE_FOLDER = path.join(__dirname, '../cache/news-assets');
const CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 godziny

//  Pobieranie obrazów
const downloadImage = async (url, outputPath) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(outputPath, response.data);
    console.log(` Obraz zapisany: ${outputPath}`);
  } catch (error) {
    console.error(` Błąd pobierania obrazu: ${url}`);
  }
};

async function fetchNews() {
  const now = Date.now();
  let useCache = false;

  if (fs.existsSync(CACHE_FILE)) {
    const stats = fs.statSync(CACHE_FILE);
    const age = now - stats.mtimeMs;
    if (age < CACHE_TTL_MS) {
      useCache = true;
    }
  }

  if (useCache) {
    console.log(' [NEWS] Cache jest aktualny – pominięto pobieranie.');
    return;
  }

  try {
    console.log('[NEWS] Pobieranie nowej treści...');

    const response = await axios.get(SOURCE_URL);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    // Usuwanie starych obrazów
    if (fs.existsSync(CACHE_FOLDER)) {
      fs.rmSync(CACHE_FOLDER, { recursive: true, force: true });
    }
    fs.mkdirSync(CACHE_FOLDER, { recursive: true });

    // Pobieranie i zamiana obrazów
    const images = document.querySelectorAll('img');
    images.forEach((img, i) => {
      const src = img.src;
      const filename = `img${i}.jpg`;
      const localPath = path.join(CACHE_FOLDER, filename);
      img.src = `/cache/news-assets/${filename}`;
      downloadImage(src, localPath);
    });

    // Usuwanie headera i footera
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const cleanedHTML = dom.serialize();
    fs.writeFileSync(CACHE_FILE, cleanedHTML, 'utf-8');
    console.log('[NEWS] Zapisano nową wersję do cache.');
  } catch (error) {
    console.error('[NEWS] Błąd pobierania treści:', error);
  }
}


router.get('/fetch-newspage', async (req, res) => {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const html = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(html);
    } else {
      return res.status(503).send('Aktualności niedostępne (brak cache)');
    }
  } catch (err) {
    return res.status(500).send('Błąd serwera');
  }
});

module.exports = router;
module.exports.fetchNews = fetchNews;
