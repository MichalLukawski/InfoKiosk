// News.js

import React, { useState, useEffect } from 'react';
import './News.css';


function News() {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await fetch('http://localhost:4000/fetch-page'); // Nowa ścieżka na serwerze backendowym
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const html = await response.text();
        setPageContent(html);
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    };

    fetchPageContent();
  }, []);

  useEffect(() => {
    if (pageContent) {
      const iframe = document.querySelector('.news-iframe');
      iframe.addEventListener('load', function() {
        const links = iframe.contentDocument.querySelectorAll('a');
        links.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
          });
        });
      });
    }
  }, [pageContent]);

  return (
    <div className="news-container">
      {pageContent && (
        <iframe
          title="News Content"
          className="news-iframe"
          srcDoc={pageContent}
        />
      )}
    </div>
  );
}

export default News;
