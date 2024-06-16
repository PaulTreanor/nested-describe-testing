import React from 'react';

const ToggleContext = React.createContext({
  isToggleCanBeEnabled: false,
  setIsToggleCanBeEnabled: () => {}
});

export default ToggleContext;