import { useContext } from 'react';
import ToggleContext from '../context/ToggleContext';

const ToggleSwitch = ({ isEnabled, onToggle }) => {
  const { isToggleCanBeEnabled } = useContext(ToggleContext);
  return (
    <label style={{ opacity: !isToggleCanBeEnabled ? 0.5 : 1 }}>
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={!isToggleCanBeEnabled ? null : onToggle}
        disabled={!isToggleCanBeEnabled}
      />
      {isEnabled ? 'On' : 'Off'}
    </label>
  );
};

export default ToggleSwitch;
