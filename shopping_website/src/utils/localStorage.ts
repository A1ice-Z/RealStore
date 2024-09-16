// Function to store favorite items in local storage
const setFavorites = (items: number[]): void => {
    localStorage.setItem('favorites', JSON.stringify(items));
};

// Function to get favorite items from local storage
export const getFavorites = (): number[] => {
    try {
        const storedItems = localStorage.getItem('favorites');
        return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
        console.error("Error parsing favorite items from localStorage", error);
        return [];
    }
};

export const toggleFavorite = (productId: number): void => {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(productId);

    const updatedFavorites = isFavorite
        ? favorites.filter(id => id !== productId)
        : [...favorites, productId];

    setFavorites(updatedFavorites);
};