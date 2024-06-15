const ToggleSwitch = ({ isEnabled, isDisabled, onToggle }) => {
  return (
    <label style={{ opacity: isDisabled ? 0.5 : 1 }}>
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={isDisabled ? null : onToggle}
        disabled={isDisabled}
      />
      {isEnabled ? 'On' : 'Off'}
    </label>
  );
};

export default ToggleSwitch;
