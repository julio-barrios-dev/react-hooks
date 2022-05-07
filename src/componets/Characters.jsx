import React, { useState, useEffect, useContext, useReducer } from 'react';
import AppContext from '../context/AppContex';
import '../styles/Characters.css';

const initialState = {
  favorites : []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload] 
      };
    break;
    default:
      return state;
    break;
  }
}

function Characters() {

  const [characters, setCharacters ] = useState([]);
  const { darkMode } = useContext(AppContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {

      fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json()) //Convierte la info a formato json
      .then(data => setCharacters(data.results))
      .then(console.log())
  
  }, []);

  const handleClick = favorite => {
    dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite } )
  };

  return (
    <div className="Characters">

      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

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
          <button type='button' onClick={() => handleClick(character)} >
            Add to favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;