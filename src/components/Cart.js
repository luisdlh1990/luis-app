import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
const test = useContext(CartContext);
    return (
        <>
           {
               test.cartList.length === 0 
               ? <p>Tu Carrito esta vacio!</p>
               : test.cartList.map ( (item) => <p>{item.tittle}</p>)
           }
        </>
    );
}

export default Cart;