import React, { useContext } from 'react';
import Header from './Header';
import Characters from './Characters';
import AppContext from '../context/AppContex';
import '../styles/AppUI.css'

const AppUI = () => {

  const { darkMode } = useContext(AppContext); 

  return (
    <div className={`Container ${ darkMode && `Dark`}`}>
        <Header />
        <Characters />
    </div>
  );
};

export default AppUI;