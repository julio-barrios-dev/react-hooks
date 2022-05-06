import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContex';
import '../styles/Characters.css';

function Characters() {

  const [characters, setCharacters ] = useState([]);
  const { darkMode } = useContext(AppContext)

  useEffect(() => {

      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json()) //Convierte la info a formato json
      .then(data => setCharacters(data.results))
      .then(console.log())
  
  }, []);

  return (
    <div className="Characters">
      {characters.map(character => (
        <div key={character.id} className="Item" >
          <div className='DataContainer' >
            <div className='Modal'>
              <p className='Data'><b>Status:</b> {character.status}</p>
              <p className='Data'><b>Species:</b> {character.species}</p>
              <p className='Data'><b>Gender:</b> {character.gender}</p>
              <p className='Data'><b>Origin name:</b> {character.origin.name}</p>
            </div>
            <div className='ImageContainer'>
              <img src={character.image} alt="" />
            </div>
          </div>
          <h2 className={`Name ${ darkMode && 'NameDark'}`}>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;