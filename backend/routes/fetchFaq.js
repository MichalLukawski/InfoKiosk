//fetch.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const fetchAndSavePage = async () => {
  try {
    const response = await axios.get('https://bg.wat.edu.pl/faq-2/');
    const dom = new JSDOM(response.data);
    const header = dom.window.document.querySelector('header');
    const footer = dom.window.document.querySelector('footer'); 
    
    if (header) header.remove();
    if (footer) footer.remove();

    fs.writeFileSync(path.join(__dirname, 'faqpage.html'), dom.serialize());
  } catch (error) {
    console.error('Error fetching page content:', error);
  }
};

router.get('/fetch-faqpage', async (req, res) => {
  try {
    const pageContent = fs.readFileSync(path.join(__dirname, 'faqpage.html'), 'utf-8');
    res.send(pageContent);
  } catch (error) {
    console.error('Error reading page content:', error);
    res.status(500).send('Error reading page content');
  }
});

// Wywołaj funkcję fetchAndSavePage co 4 godziny
setInterval(fetchAndSavePage, 4 * 60 * 60 * 1000);
fetchAndSavePage();

module.exports = router;
