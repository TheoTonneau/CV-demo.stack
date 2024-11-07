// src/pages/HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est une page classique en React. Elle peut contenir tout type de contenu.</p>
      <button onClick={() => alert('Bienvenue!')}>Cliquez-moi</button>
    </div>
  );
}

export default HomePage;
