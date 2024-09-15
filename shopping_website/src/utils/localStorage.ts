type FavoriteItem = number;

// Helper function to store items in local storage
const setLocalStorageItems = <T>(key: string, items: T[]): void => {
    localStorage.setItem(key, JSON.stringify(items));
};

// Helper function to get items from local storage
const getLocalStorageItems = <T>(key: string): T[] => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : [];
};

// Favorites-specific functions
export const getFavorites = (): FavoriteItem[] => {
    return getLocalStorageItems<FavoriteItem>('favorites');
};

export const toggleFavorite = (productId: number): void => {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(productId);

    const updatedFavorites = isFavorite
        ? favorites.filter(id => id !== productId)
        : [...favorites, productId];

    setLocalStorageItems('favorites', updatedFavorites);
};





