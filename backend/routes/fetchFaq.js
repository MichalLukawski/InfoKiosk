const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const CACHE_FILE = path.join(__dirname, '../cache/faq.html');
const SOURCE_URL = 'https://bg.wat.edu.pl/faq-2/';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 godziny

router.get('/fetch-faqpage', async (req, res) => {
  const now = Date.now();

  try {
    let useCache = false;

    if (fs.existsSync(CACHE_FILE)) {
      const stats = fs.statSync(CACHE_FILE);
      const age = now - stats.mtimeMs;
      useCache = age < CACHE_TTL_MS;
    }

    if (useCache) {
      const cachedHTML = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(cachedHTML);
    }

    // Pobierz z zewnętrznego serwisu
    const response = await axios.get(SOURCE_URL);
    const dom = new JSDOM(response.data);

    // Usuń zbędne elementy (np. header, footer)
    const header = dom.window.document.querySelector('header');
    const footer = dom.window.document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const cleanedHTML = dom.serialize();

    // Zapisz do cache
    fs.writeFileSync(CACHE_FILE, cleanedHTML, 'utf-8');
    res.send(cleanedHTML);
  } catch (error) {
    console.error('Błąd pobierania treści FAQ:', error);
    if (fs.existsSync(CACHE_FILE)) {
      const fallback = fs.readFileSync(CACHE_FILE, 'utf-8');
      return res.send(fallback);
    }
    res.status(500).send('Nie udało się pobrać i załadować treści FAQ.');
  }
});

module.exports = router;
