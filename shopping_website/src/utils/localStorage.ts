type FavoriteItem = number;
type CartItem = { productId: number; quantity: number };

// Helper function to store items in local storage
const setItems = <T>(key: string, items: T[]): void => {
    localStorage.setItem(key, JSON.stringify(items));
};

// Favorites-specific functions
export const getFavorites = (): FavoriteItem[] => {
    const storedItems = localStorage.getItem('favorites');
    return storedItems ? JSON.parse(storedItems) : [];
};

export const toggleFavorite = (productId: number): void => {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(productId);

    const updatedFavorites = isFavorite
        ? favorites.filter(id => id !== productId)
        : [...favorites, productId];

    setItems('favorites', updatedFavorites);
};

// Cart-specific functions
export const getCart = (): CartItem[] => {
    const storedItems = localStorage.getItem('cart');
    return storedItems ? JSON.parse(storedItems) : [];
};

export const addToCart = (productId: number, quantity: number = 1): void => {
    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity; // Increment quantity
    } else {
        cart.push({ productId, quantity });
    }

    setItems('cart', cart);
};

export const updateCartQuantity = (productId: number, quantity: number): void => {
    const cart = getCart();
    const index = cart.findIndex(item => item.productId === productId);

    if (index !== -1) {
        // Product exists in the cart
        if (quantity > 0) {
            cart[index].quantity = quantity; // Update quantity
        } else {
            cart.splice(index, 1); // Remove if quantity is 0
        }
    } else if (quantity > 0) {
        // Product doesn't exist in the cart, add it
        cart.push({ productId, quantity });
    }

    setItems('cart', cart); // Save updated cart to localStorage
};

