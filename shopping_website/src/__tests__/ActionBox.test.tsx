import {render, screen, fireEvent} from "@testing-library/react";
import {describe, it, expect, beforeEach, vi} from "vitest";
import ActionBox from "../components/Clothe/ActionBox";
import {useProducts} from "../hooks/useProducts";
import {getFavorites} from "../utils/localStorage";
import {getCart, addToCart} from "../utils/sessionStorage";
import {MemoryRouter} from "react-router-dom";

const setScreenSize = (width: number, height: number) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event("resize"));
};

// Mock the hooks and utility functions
vi.mock("../hooks/useProducts", () => ({
    useProducts: vi.fn(),
}));

vi.mock("../utils/localStorage", () => ({
    getFavorites: vi.fn(),
    toggleFavorite: vi.fn(),
}));

vi.mock("../utils/sessionStorage", () => ({
    getCart: vi.fn(),
    addToCart: vi.fn(),
}));

beforeEach(() => {
    vi.resetAllMocks();

    (getFavorites as jest.Mock).mockReturnValue([]);
    (getCart as jest.Mock).mockReturnValue([]);
});

describe("ActionBox component", () => {
    it("renders loading state initially", () => {
        // Mock useProducts to simulate loading state
        (useProducts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            isError: false,
        });

        render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it("renders error state when product fetching fails", () => {
        (useProducts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false,
            isError: true,
        });

        render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(screen.getByText(/Error fetching products./i)).toBeInTheDocument();
    });

    it("renders product details and allows adding to cart", () => {
        const fakeProducts = [
            {
                id: 1,
                title: "Test Product",
                price: 99.99,
                description: "Test description",
                image: "test-image.jpg",
            },
        ];

        (useProducts as jest.Mock).mockReturnValue({
            data: fakeProducts,
            isLoading: false,
            isError: false,
        });

        (getFavorites as jest.Mock).mockReturnValue([]);
        (getCart as jest.Mock).mockReturnValue([]);

        render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        const productElements = screen.getAllByText(/Test Product/i);
        expect(productElements.length).toBeGreaterThan(0);
        productElements.forEach((element) => {
            expect(element).toBeInTheDocument();
        });

        expect(screen.getByText(/99.99 \$/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Test Product/i)).toHaveAttribute("src", "test-image.jpg");

        const addToCartButton = screen.getByText(/ADD TO CART/i);
        fireEvent.click(addToCartButton);

        expect(addToCart).toHaveBeenCalledWith(1, 1);
    });

    it("matches snapshot for loading state", () => {
        (useProducts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            isError: false,
        });

        const {container} = render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for error state", () => {
        (useProducts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false,
            isError: true,
        });

        const {container} = render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for product details", () => {
        const fakeProducts = [
            {
                id: 1,
                title: "Test Product",
                price: 99.99,
                description: "Test description",
                image: "test-image.jpg",
            },
        ];

        (useProducts as jest.Mock).mockReturnValue({
            data: fakeProducts,
            isLoading: false,
            isError: false,
        });

        const {container} = render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for mobile view", () => {
        setScreenSize(375, 667);

        const fakeProducts = [
            {
                id: 1,
                title: "Sample Product",
                price: "$10.00",
                description: "Sample Description",
                image: "https://via.placeholder.com/150",
            },
        ];

        (useProducts as jest.Mock).mockReturnValue({
            data: fakeProducts,
            isLoading: false,
            isError: false,
        });

        const {container} = render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for desktop view", () => {
        setScreenSize(1920, 1080);

        const fakeProducts = [
            {
                id: 1,
                title: "Sample Product",
                price: "$10.00",
                description: "Sample Description",
                image: "https://via.placeholder.com/150",
            },
        ];

        (useProducts as jest.Mock).mockReturnValue({
            data: fakeProducts,
            isLoading: false,
            isError: false,
        });

        const {container} = render(
            <MemoryRouter>
                <ActionBox productId={1} />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });
});
