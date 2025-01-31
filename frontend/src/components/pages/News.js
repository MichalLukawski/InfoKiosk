// News.js
import React, { useState, useEffect } from 'react';
import '../styles/News.css';

function News() {
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    document.body.classList.add('news-page');

    const fetchPageContent = async () => {
      try {
        const response = await fetch('http://localhost:4000/fetch-newspage');
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

    return () => {
      document.body.classList.remove('news-page');
    };
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
          link.addEventListener('contextmenu', event => {
            event.preventDefault();
          });
        });
      });
    }
  }, [pageContent]);

  return (
    <div className="news-container ">
      {pageContent && (
        <iframe
          title="News Content"
          className="news-iframe mt-3"
          srcDoc={pageContent}
        />
      )}
    </div>
  );
}

export default News;
