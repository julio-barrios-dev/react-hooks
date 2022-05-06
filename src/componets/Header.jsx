import {useContext}  from 'react';
import AppContext from '../context/AppContex';
import '../styles/Header.css'

function Header() {

  const { darkMode, handleClick } = useContext(AppContext);
 
  return (
    <div className='Header'>
      <h1 className={`'Title' && ${darkMode && 'TitleDark'}`} > 
        Rick and Morty
      </h1>
      <button
        className={`Button ${darkMode && 'ButtonDark'}`}
        type="button"
        onClick={handleClick}
      >
        {darkMode? 'Lihgt' : 'Dark'}
      </button>
    </div>
  );
}

export default Header;