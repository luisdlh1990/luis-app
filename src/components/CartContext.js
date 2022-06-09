import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
const [cartList, setCartlist] = useState([]);

const addToCart = (item)=>{
    setCartlist([
        ...cartList,
        item
    ]);
}
    return(
        <CartContext.Provider value= {{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;