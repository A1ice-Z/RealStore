import {render} from "@testing-library/react";
import {describe, it, expect, vi, beforeEach} from "vitest";
import ActionBox from "../components/Clothe/ActionBox";
import {useProducts} from "../hooks/useProducts";
import {MemoryRouter} from "react-router-dom";

vi.mock("../hooks/useProducts", () => ({
    useProducts: vi.fn(),
}));

describe("ActionBox component snapshot", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("matches snapshot when loading", () => {
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

    it("matches snapshot when an error occurs", () => {
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

    it("matches snapshot when rendering product details", () => {
        const fakeProducts = [
            {
                id: 1,
                title: "Sample Product",
                price: 10.0,
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

    it("matches snapshot on mobile view", () => {
        window.innerWidth = 375; // Set screen size to mobile
        window.innerHeight = 667;

        const fakeProducts = [
            {
                id: 1,
                title: "Mobile Product",
                price: 20.0,
                description: "Mobile View Description",
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

    it("matches snapshot on desktop view", () => {
        window.innerWidth = 1920; // Set screen size to desktop
        window.innerHeight = 1080;

        const fakeProducts = [
            {
                id: 1,
                title: "Desktop Product",
                price: 30.0,
                description: "Desktop View Description",
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
