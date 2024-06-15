import { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch'
import './App.css'

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <h1>My React App</h1>
      <ToggleSwitch isEnabled={isEnabled} onToggle={() => setIsEnabled(!isEnabled)} />
    </>
  )
}

export default App
