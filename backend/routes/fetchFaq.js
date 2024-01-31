//fetch.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { JSDOM } = require('jsdom');

router.get('/fetch-faqpage', async (req, res) => {
  try {
    const response = await axios.get('https://bg.wat.edu.pl/faq-2/'); // Wykonaj żądanie do zewnętrznego źródła
    const dom = new JSDOM(response.data);
    const header = dom.window.document.querySelector('header'); // Znajdź element nagłówka
    const footer = dom.window.document.querySelector('footer'); 
    
    if (header) header.remove(); // Usuń element nagłówka
    if (footer) footer.remove(); 

    

    res.send(dom.serialize()); // Prześlij zawartość strony jako odpowiedź
  } catch (error) {
    console.error('Error fetching page content:', error);
    res.status(500).send('Error fetching page content');
  }
});

module.exports = router;
