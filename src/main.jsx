import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToggleContext from './context/ToggleContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [isToggleCanBeEnabled, setIsToggleCanBeEnabled] = useState(true);

  return (
    <ToggleContext.Provider value={{ isToggleCanBeEnabled, setIsToggleCanBeEnabled }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToggleContext.Provider>
  );
};

root.render(<Main />);
