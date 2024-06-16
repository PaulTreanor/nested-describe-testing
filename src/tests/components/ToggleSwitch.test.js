import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleSwitch from "../../components/ToggleSwitch";
import ToggleContext from "../../context/ToggleContext";

describe('ToggleSwitch - Interactive', () => {
  test('should toggle from off to on', () => {
    const handleToggle = jest.fn();
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: true }}>
        <ToggleSwitch isEnabled={false} onToggle={handleToggle} />
      </ToggleContext.Provider>
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  test('should toggle from on to off', () => { 
    const handleToggle = jest.fn();
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: true }}>
        <ToggleSwitch isEnabled={true} onToggle={handleToggle} />
      </ToggleContext.Provider>
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});

describe('ToggleSwitch - Non-Interactive', () => {
  test('should not toggle when disabled', () => {
    const handleToggle = jest.fn();
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: false }}>
        <ToggleSwitch isEnabled={false} onToggle={handleToggle} />
      </ToggleContext.Provider>
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleToggle).not.toHaveBeenCalled();
  });

  test('should display as disabled', () => {
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: false }}>
        <ToggleSwitch isEnabled={false} onToggle={() => {}} />
      </ToggleContext.Provider>
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
});