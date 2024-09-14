type FavoriteItem = number;
type CartItem = { productId: number; quantity: number };

// Generic function to get items (favorites or cart) from local storage
const getItems = (key: string): FavoriteItem[] | CartItem[] => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : [];
};

// Generic function to add an item (favorites or cart) to local storage
const addItem = (key: string, productId: number, quantity?: number): void => {
    const items = getItems(key);
    if (key === 'favorites') {
        const favoriteItems = items as FavoriteItem[];
        if (!favoriteItems.includes(productId)) {
            favoriteItems.push(productId);
        }
    } else if (key === 'cart') {
        const cartItems = items as CartItem[];
        const index = cartItems.findIndex(item => item.productId === productId);
        if (index === -1) {
            cartItems.push({ productId, quantity: quantity || 1 });
        } else {
            cartItems[index].quantity = quantity || cartItems[index].quantity + 1;
        }
    }
    localStorage.setItem(key, JSON.stringify(items));
};
  
// Generic function to remove an item (favorites or cart) from local storage
const removeItem = (key: string, productId: number): void => {
    let items = getItems(key);
    if (key === 'favorites') {
        items = (items as FavoriteItem[]).filter(id => id !== productId);
    } else if (key === 'cart') {
        items = (items as CartItem[]).filter(item => item.productId !== productId);
    }
    localStorage.setItem(key, JSON.stringify(items));
};
  
// Generic function to check if an item (favorites or cart) exists in local storage
const isItemInStorage = (key: string, productId: number): boolean => {
    const items = getItems(key);
    if (key === 'favorites') {
        return (items as FavoriteItem[]).includes(productId);
    } else if (key === 'cart') {
        return (items as CartItem[]).some(item => item.productId === productId);
    }
    return false;
};

// Exported functions for favorites
export const getFavorites = (): FavoriteItem[] => getItems('favorites') as FavoriteItem[];
export const addFavorite = (productId: number): void => addItem('favorites', productId);
export const removeFavorite = (productId: number): void => removeItem('favorites', productId);
export const isFavorite = (productId: number): boolean => isItemInStorage('favorites', productId);
// Toggle favorite status for a product
export const toggleFavorite = (productId: number): void => {
    const isCurrentlyFavorite = isFavorite(productId); // Check if product is already a favorite
    if (isCurrentlyFavorite) {
        // Remove from favorites
        removeFavorite(productId);
    } else {
        // Add to favorites
        addFavorite(productId);
    }
};;

// Exported functions for shopping cart
export const getCart = (): CartItem[] => getItems('cart') as CartItem[];
export const addToCart = (productId: number): void => addItem('cart', productId);
export const removeFromCart = (productId: number): void => removeItem('cart', productId);
export const isInCart = (productId: number): boolean => isItemInStorage('cart', productId);
// Function to update the quantity of a product in the cart (without removing it)
export const updateCartQuantity = (productId: number, quantity: number): void => {
    const cart = getCart();
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};