import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';


const Cart = () => {
const test = useContext(CartContext);
    return (
        <>
        <div>
        <h1>Tu Carrito</h1>
        <Link to='/'><button>Seguir Comprando</button></Link>  
                {
                    (test.cartList.length > 0)
                    ? <button type="filled" onClick={test.removeList}>Borrar Todo</button>
                    : <h3>Tu Carrito esta vacio!</h3>
                }          
        </div>
        <div>
        {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                                <div>
                                    <p key={item.idItem}></p>
                                    <p>Producto: {item.nameItem}</p>
                                    <img src={item.imgItem} alt={item.nameItem} width='100px' height='100px'/>
                                    <p>Cantidad: {item.qtyItem}</p>
                                    <p>Precio$ {item.costItem}</p>
                                    <p>Precio total:$ {test.calcTotalPerItem(item.idItem)}</p>
                                    <button type="filled" onClick={() => test.deleteItem(item.idItem)}>Borrar Producto</button>  
                                </div>
                                
                            )
                    }
        </div>
        <div>
            {
                 test.cartList.length > 0 &&
                 <div>
                 <h3>Total De Compra</h3>
                 <p>Impuestos: ${test.calcTaxes()}</p>
                 <p>Impuestos: ${-test.calcTaxes()}</p>
                 <p>Total Precio Final: ${test.calcTotal()}</p>
                 <button >Finalizar Compra</button>
                 </div>
            }
        </div>

        </>
    );
}

export default Cart;