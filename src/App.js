import './styles/App.css';
import useDarkMode from './hooks/useDarkMode'
import AppContext from './context/AppContex';
import AppUI from './componets/AppUI';


function App() {

  return (
    <AppContext.Provider value={useDarkMode()}>
      <div className='App'> 
        <AppUI />
      </div>
    </AppContext.Provider>
  );
}

export default App; 


