import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../App"


describe('App.js', () => {
  test('renders the title text', () => {
    render(<App />);
    const titleElement = screen.getByText(/my react app/i);
    expect(titleElement).toBeInTheDocument();
  });
});