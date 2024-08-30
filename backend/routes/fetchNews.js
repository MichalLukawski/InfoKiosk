//fetchNews.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const dns = require('dns');

const checkInternet = () => {
  return new Promise((resolve, reject) => {
    dns.resolve('www.google.com', (err) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

const fetchAndSavePage = async () => {
  try {
    const response = await axios.get('https://bg.wat.edu.pl/aktualnosci/');
    const dom = new JSDOM(response.data);
    const header = dom.window.document.querySelector('header');
    const footer = dom.window.document.querySelector('footer'); 
    
    if (header) header.remove();
    if (footer) footer.remove();

    fs.writeFileSync(path.join(__dirname, 'newspage.html'), dom.serialize());
  } catch (error) {
    console.error('Error fetching page content:', error);
  }
};

router.get('/fetch-newspage', async (req, res) => {
  try {
    if (fs.existsSync(path.join(__dirname, 'newspage.html'))) {
      const pageContent = fs.readFileSync(path.join(__dirname, 'newspage.html'), 'utf-8');
      res.send(pageContent);
    } else {
      res.status(500).send('No offline content available');
    }
  } catch (error) {
    console.error('Error reading page content:', error);
    res.status(500).send('Error reading page content');
  }
});

// Wywołaj funkcję fetchAndSavePage co 1 godziny
setInterval(async () => {
  if (await checkInternet().catch(() => {})) {
    fetchAndSavePage();
  }
}, 1 * 60 * 60 * 1000);

checkInternet().then(isConnected => {
  if (isConnected) {
    fetchAndSavePage();
  }
}).catch(() => {});

module.exports = router;
