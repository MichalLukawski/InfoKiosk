const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SOURCE_URL = 'https://bg.wat.edu.pl/faq-2/';
const CACHE_FILE = path.join(__dirname, '../cache/faq.html');
const CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 godziny

async function fetchFaq() {
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
    console.log('[FAQ] Cache jest aktualny – pominięto pobieranie.');
    return;
  }

  try {
    console.log('[FAQ] Pobieranie nowej treści...');

    const response = await axios.get(SOURCE_URL);
    const dom = new JSDOM(response.data);

    // Usuwanie nagłówka i stopki
    const header = dom.window.document.querySelector('header');
    const footer = dom.window.document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const cleanedHTML = dom.serialize();
    fs.writeFileSync(CACHE_FILE, cleanedHTML, 'utf-8');
    console.log(' [FAQ] Zapisano nową wersję do cache.');
  } catch (error) {
    console.error(' [FAQ] Błąd pobierania treści:', error);
  }
}

router.get('/fetch-faqpage', async (req, res) => {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const html = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(html);
    } else {
      return res.status(503).send('FAQ niedostępne (brak cache)');
    }
  } catch (err) {
    return res.status(500).send('Błąd serwera');
  }
});

module.exports = router;
module.exports.fetchFaq = fetchFaq;
