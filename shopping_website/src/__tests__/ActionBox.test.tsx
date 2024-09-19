import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for extended matchers
import ActionBox from '../components/Clothe/ActionBox'; // Adjust the import path
import { MemoryRouter } from 'react-router-dom';
import * as sessionStorage from '../utils/sessionStorage'; // Import all as sessionStorage
import { vi } from 'vitest';

interface ActionBoxProps {
  productId: number;
  image: string;
  title: string;
  price: string;
  description: string;
}

const renderActionBox = (props: ActionBoxProps) => {
  return render(
    <MemoryRouter>
      <ActionBox {...props} />
    </MemoryRouter>
  );
};

const defaultProps = {
  productId: 1,
  image: "https://via.placeholder.com/150",
  title: "Sample Product",
  price: "$10.00",
  description: "Sample Description",
};

// Mock sessionStorage functions
vi.mock('../utils/sessionStorage', () => ({
  addToCart: vi.fn(), // Mock addToCart
}));

beforeEach(() => {
  renderActionBox(defaultProps);
});

test('ActionBox snapshot', () => {
  const { asFragment } = renderActionBox(defaultProps);
  expect(asFragment()).toMatchSnapshot();
});  

test('adds product to cart when "Add to Cart" button is clicked', () => {
  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

  fireEvent.click(addToCartButton); // Simulate clicking the button

  // Use sessionStorage.addToCart in the assertion
  expect(sessionStorage.addToCart).toHaveBeenCalledWith(1, 1); // Expect the mocked addToCart to have been called with correct args
});

test('renders with different props', () => {
  expect(screen.getByText("Sample Product", { selector: 'p' })).toBeInTheDocument();
  expect(screen.getByText(/\$10.00/)).toBeInTheDocument();
});