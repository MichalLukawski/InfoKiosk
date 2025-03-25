const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SOURCE_URL = 'https://bg.wat.edu.pl/aktualnosci/';
const CACHE_FILE = path.join(__dirname, '../cache/news.html');
const CACHE_FOLDER = path.join(__dirname, '../cache/news-assets');
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 godziny

// Funkcja pobierająca obrazy
const downloadImage = async (url, outputPath) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(outputPath, response.data);
  } catch (error) {
    console.error(`Nie udało się pobrać obrazu: ${url}`);
  }
};

router.get('/fetch-newspage', async (req, res) => {
  const now = Date.now();
  let useCache = false;

  try {
    if (fs.existsSync(CACHE_FILE)) {
      const stats = fs.statSync(CACHE_FILE);
      const age = now - stats.mtimeMs;
      useCache = age < CACHE_TTL_MS;
    }

    if (useCache) {
      const cachedHTML = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(cachedHTML);
    }

    // Pobierz dane z zewnętrznego źródła
    const response = await axios.get(SOURCE_URL);
    const dom = new JSDOM(response.data);

    const document = dom.window.document;

    // Stwórz folder cache dla grafik, jeśli nie istnieje
    if (!fs.existsSync(CACHE_FOLDER)) {
      fs.mkdirSync(CACHE_FOLDER, { recursive: true });
    }

    // Pobierz i zamień wszystkie obrazy
    const images = document.querySelectorAll('img');
    images.forEach((img, i) => {
      const src = img.src;
      const filename = `img${i}.jpg`;
      const localPath = path.join(CACHE_FOLDER, filename);
      img.src = `/cache/news-assets/${filename}`;
      downloadImage(src, localPath);
    });

    // Usuń nagłówek i stopkę
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const cleanedHTML = dom.serialize();
    fs.writeFileSync(CACHE_FILE, cleanedHTML, 'utf-8');

    res.send(cleanedHTML);
  } catch (error) {
    console.error('Błąd pobierania aktualności:', error);
    if (fs.existsSync(CACHE_FILE)) {
      const fallback = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(fallback);
    }
    res.status(500).send('Nie udało się pobrać i załadować treści aktualności.');
  }
});

module.exports = router;
