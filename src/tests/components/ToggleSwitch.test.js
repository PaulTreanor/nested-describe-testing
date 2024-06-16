import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleSwitch from "../../components/ToggleSwitch";
import ToggleContext from "../../context/ToggleContext";

describe('ToggleSwitch - Interactive', () => {
  let handleToggle = jest.fn();

  beforeEach(() => {
    handleToggle.mockClear();
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: true }}>
        <ToggleSwitch isEnabled={false} onToggle={handleToggle} />
      </ToggleContext.Provider>
    );
  });

  test('should toggle from off to on', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  test('should toggle from on to off', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});

describe('ToggleSwitch - Non-Interactive', () => {
  let handleToggle = jest.fn();

  beforeEach(() => {
    handleToggle.mockClear();
    render(
      <ToggleContext.Provider value={{ isToggleCanBeEnabled: false }}>
        <ToggleSwitch isEnabled={false} onToggle={handleToggle} />
      </ToggleContext.Provider>
    );
  });

  test('should not toggle when disabled', () => {
    const handleToggle = jest.fn();
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleToggle).not.toHaveBeenCalled();
  });

  test('should display as disabled', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
});