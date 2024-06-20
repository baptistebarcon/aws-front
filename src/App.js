// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [nom, setNom] = useState('');
  const [points, setPoints] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        nom,
        points: parseInt(points), // Assurez-vous que points est un entier
      });
      console.log(response.data); // Affiche la réponse du backend
      // Réinitialiser les champs après l'ajout
      setNom('');
      setPoints('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    }
  };

  return (
    <div className="App">
      <h1>Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <br />
        <label>
          Points :
          <input type="number" value={points} onChange={(e) => setPoints(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Ajouter Utilisateur</button>
      </form>
    </div>
  );
}

export default App;
