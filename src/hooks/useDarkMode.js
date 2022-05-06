import { useState }  from "react";

const useDarkMode = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return {
    darkMode,
    handleClick
  };
}

export default useDarkMode;

