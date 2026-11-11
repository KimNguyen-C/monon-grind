// store the cart so the header, menu, and order summary can all access the same data.
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item){
        setCartItems((currentCart) => {
            const existingItem = currentCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return currentCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...currentCart, { ...item, quantity: 1 }];
            }
        });
    }

    function removeFromCart(itemId) {
        setCartItems((currentCart) => {
            return currentCart.filter((item) => item.id !== itemId)
        })

    }

    function changeQuantity(itemId, amount) {
        setCartItems((currentCart) => {
            return currentCart.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + amount } : item
            )
            .filter((item) => item.quantity > 0);
        });
    }
    function clearCart() {
        setCartItems([]);
    }

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            changeQuantity, 
            clearCart, 
            itemCount, 
            subtotal }}>
            {children}
        </CartContext.Provider>
    );
}