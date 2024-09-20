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

const setScreenSize = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
};

// Mock sessionStorage functions
vi.mock('../utils/sessionStorage', () => ({
  addToCart: vi.fn(), // Mock addToCart
}));

beforeEach(() => {
  renderActionBox(defaultProps);
});

test("render correctly on mobile version", () => {
  setScreenSize(375, 667); // iPhone 6/7/8 screen
  renderActionBox(defaultProps);
  const elements = screen.getAllByAltText("Sample Product"); //An array of all elements with the test "Sample Product"
  expect(elements[0]).toBeVisible(); //Checks if the first element in the array is visible for the user
});

test("render correctly on desktop version", () => {
  setScreenSize(2880, 1800); //MacBook Pro 15
  renderActionBox(defaultProps);
  const elements = screen.getAllByAltText("Sample Product"); //An array of all elements with the test "Sample Product"
  expect(elements[0]).toBeVisible(); //Checks if the first element in the array is visible for the user
});

test('ActionBox snapshot', () => {
  const { asFragment } = renderActionBox(defaultProps);
  expect(asFragment()).toMatchSnapshot();
});

test('adds product to cart when "Add to Cart" button is clicked, for desktop version', () => {
  setScreenSize(1920, 1080);
  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

  fireEvent.click(addToCartButton); // Simulate clicking the button
  // Use sessionStorage.addToCart in the assertion
  expect(sessionStorage.addToCart).toHaveBeenCalledWith(1, 1); // Expect the mocked addToCart to have been called with correct args
});

test('adds product to cart when "Add to Cart" button is clicked, for mobile version', () => {
  setScreenSize(375, 667);
  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

  fireEvent.touchStart(addToCartButton); // Simulating touch interaction
  fireEvent.click(addToCartButton); // Just in case

  expect(sessionStorage.addToCart).toHaveBeenCalled();
});

test('renders with different props', () => {
  expect(screen.getByText("Sample Product", { selector: 'p' })).toBeInTheDocument();
  expect(screen.getByText(/\$10.00/)).toBeInTheDocument();
});

test('navigates to the shop page when the "Shop" link is clicked', () => {

  // Find the "Shop" link by its text
  const shopLink = screen.getByRole('link', { name: '/ Shop' });


  // Check if the "Shop" link is in the document
  expect(shopLink).toBeInTheDocument();

  // Simulate a click event on the "Shop" link
  fireEvent.click(shopLink);

  // Check if the URL changes to "/shopping"
  expect(window.location.pathname).toBe('/Shopping');
});