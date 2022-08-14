import React, { 
  useState, 
  useEffect, 
  useContext, 
  useReducer, 
  useMemo,
  useRef,
  useCallback } from 'react';
import AppContext from '../context/AppContex';
import Search from './Search';
import useCharacters from '../hooks/useCharacters';
import '../styles/Characters.css';

const initialState = {
  favorites: []
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

  const { darkMode } = useContext(AppContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const API = 'https://rickandmortyapi.com/api/character/';

  const characters  = useCharacters(API);

  const handleClick = favorite => {
    const val = !favorites.favorites.includes(favorite)
    if (val) {
      dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite } )
    }
  };

/*   const handleSearch = () => {
    setSearch(searchInput.current.value);
  }; */

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

/* 
  const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  }); */

  const filteredUsers = useMemo(() => 
  characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]  
  );

  return (
    <div className="Characters">
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>       
      ))}


      {filteredUsers.map(character => (
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
          <button className='ButtonFavorite' type='button' onClick={() => handleClick(character)} >
            Add to favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;