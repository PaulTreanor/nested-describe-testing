import React from 'react';

const ToggleContext = React.createContext({
  isToggleDisabled: false,
  setToggleDisabled: () => {}
});

export default ToggleContext;