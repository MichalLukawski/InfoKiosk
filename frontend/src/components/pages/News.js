// W pliku News.js
import React from 'react';
import './News.css'; // Importuj plik CSS

function News() {
  return (
    <div className="news-container">
      {/* Osadź stronę zewnętrzną wewnątrz iframe */}
      <iframe
        src="https://bg.wat.edu.pl/aktualnosci/"
        title="News Content"
        className="news-iframe"
        
      />
    </div>
  );
};

export default News;
