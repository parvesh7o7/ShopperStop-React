import { createContext, useState, useContext } from "react";
import { getProductsByID } from "../data/product";

export const CartContext = createContext(null);

function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    function addToCart(productID) {
        const existingItem = cartItem.find((item) => item.id === productID);
        if (existingItem) {
            const currentQuantity = existingItem.quantity;
            const updatedCartItems = cartItem.map((item) =>
                item.id === productID ?
                    { id: productID, quantity: currentQuantity + 1 } :
                    item
            );
            setCartItem(updatedCartItems);
        } else {
            setCartItem([...cartItem, { id: productID, quantity: 1 }]);
        }
    }

    function getCartItem() {
        return cartItem.map((item) => ({
            ...item,
            product: getProductsByID(item.id)
        })).filter(item => item.product);
    }

    function removeFromCart(productId) {
        setCartItem(cartItem.filter((item) => item.id !== productId));
    }
    function updateCartItem(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItem(cartItem.map((p) => (
            p.id === productId ? { ...p, quantity } : p
        )))
    }

    function getCartTotal() {
        const total = cartItem.reduce((total, item) => {
            const product = getProductsByID(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0)

        return total;
    }

    function clearCart() {
        setCartItem([]);
    };

    return <CartContext.Provider value={{ cartItem, addToCart, getCartItem, updateCartItem, removeFromCart, getCartTotal, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}

export default CartProvider;