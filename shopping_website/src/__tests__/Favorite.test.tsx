import {render} from "@testing-library/react";
import {describe, it, expect, vi, beforeEach} from "vitest";
import Favorites from "../pages/Favorites";
import {useProducts} from "../hooks/useProducts";
import {getFavorites} from "../utils/localStorage";
import {MemoryRouter} from "react-router-dom";

// Mock useProducts and localStorage functions
vi.mock("../hooks/useProducts", () => ({
    useProducts: vi.fn(),
}));

vi.mock("../utils/localStorage", () => ({
    getFavorites: vi.fn(),
    setFavorites: vi.fn(),
    toggleFavorite: vi.fn(),
}));

// Reset mocks before each test
beforeEach(() => {
    vi.resetAllMocks();
    (getFavorites as unknown as jest.Mock).mockReturnValue([]);
});

describe("Favorites component snapshot tests", () => {
    it("matches snapshot for loading state", () => {
        // Mock useProducts to simulate the loading state
        (useProducts as unknown as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            isError: false,
        });

        const {container} = render(
            <MemoryRouter>
                <Favorites />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for error state", () => {
        // Mock useProducts to simulate an error
        (useProducts as unknown as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false,
            isError: true,
        });

        const {container} = render(
            <MemoryRouter>
                <Favorites />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for rendered favorite products", () => {
        // Mock product data
        const fakeProducts = [
            {
                id: 1,
                title: "Product 1",
                price: 10,
                description: "Description 1",
                category: "category1",
                image: "image1.jpg",
                rating: {
                    rate: 4.5,
                    count: 10,
                },
            },
            {
                id: 2,
                title: "Product 2",
                price: 20,
                description: "Description 2",
                category: "category2",
                image: "image2.jpg",
                rating: {
                    rate: 4.0,
                    count: 20,
                },
            },
        ];

        // Mock useProducts to return the product data
        (useProducts as unknown as jest.Mock).mockReturnValue({
            data: fakeProducts,
            isLoading: false,
            isError: false,
        });

        // Mock getFavorites to return product IDs that exist in fakeProducts
        (getFavorites as unknown as jest.Mock).mockReturnValue([1, 2]);

        const {container} = render(
            <MemoryRouter>
                <Favorites />
            </MemoryRouter>,
        );

        expect(container).toMatchSnapshot();
    });
});
