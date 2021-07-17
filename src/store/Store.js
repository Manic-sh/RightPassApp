import React, { useReducer } from "react";
import { CartReducer, ADD, REMOVE } from "./CartReducer";
import CartContext from "./CartContext";

const products = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Tea',
        price: 20.00,
        category: "Drinks",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Coffee',
        price: 20.00,
        category: "Drinks",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Pizza',
        price: 20.00,
        category: "Fastfood",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29ads',
        title: 'Burger',
        price: 20.00,
        category: "Fastfood",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2222d',
        title: 'Noodles',
        price: 20.00,
        category: "Fastfood",
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bs',
        title: 'Tea',
        price: 20.00,
        category: "Drinks",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        title: 'Coffee Black',
        price: 20.00,
        category: "Drinks",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Pizza',
        price: 20.00,
        category: "Fastfood",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29ad4',
        title: 'Burger',
        price: 20.00,
        category: "Fastfood",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2222f',
        title: 'Noodles',
        price: 20.00,
        category: "Fastfood",
    },
];

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, { cart: [] });

    const addToCart = (product) => {
        dispatch({ type: ADD, product: product });
    };

    const removeFromCart = productId => {
        dispatch({ type: REMOVE, productId: productId });
    };

    return (
        <CartContext.Provider value={{
            products: products,
            cart: state.cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            { children}
        </CartContext.Provider >
    )
};
export default CartContextProvider;