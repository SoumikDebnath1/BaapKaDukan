// ShopContextProvider.jsx
import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import Item from "../Components/item/item";
export const ShopContext = createContext({ all_product: [], cartItems: {} });

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (productId) => {
        setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
