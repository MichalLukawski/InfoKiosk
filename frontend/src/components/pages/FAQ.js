import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FAQ() {
  const [pageContent, setPageContent] = useState(null);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('faq-page');

    const fetchPageContent = async () => {
      try {
        const response = await fetch('http://localhost:4000/fetch-faqpage');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const html = await response.text();
        setPageContent(html);
      } catch (error) {
        console.error('Error fetching page content:', error);
        setHasError(true);
        setTimeout(() => navigate('/'), 3000); // Redirect to home after 3 seconds
      }
    };

    fetchPageContent();

    return () => {
      document.body.classList.remove('faq-page');
    };
  }, [navigate]);

  useEffect(() => {
    if (pageContent) {
      const iframe = document.querySelector('.faq-iframe');
      iframe.addEventListener('load', function () {
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

  if (hasError) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Błąd</h1>
        <p>Nie można załadować treści. Zostaniesz przekierowany na stronę główną.</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>
      {pageContent && (
        <iframe
          title="FAQ Content"
          className="faq-iframe"
          srcDoc={pageContent}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      )}
    </div>
  );
}

export default FAQ;
