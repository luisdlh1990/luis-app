import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment} from "firebase/firestore";
import db from "./firebaseConfig";


const Cart = () => {
const test = useContext(CartContext);

    const createOrder = ()=>{
        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            price: item.costItem,
            tittle: item.nameItem,
            qty: item.qtyItem
        }))

        let order = {
            buyer: {
                email : "luisdlh1990@gmail.com",
                name : "luis de la hoz",
                phone: "154465614"
            },
            date: serverTimestamp(),
            total: test.calcTotal(),
            items: itemsForDB
        }
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFirestore()
            .then(result => alert ('tu ID de orden es '+ result.id))
            .catch(err => console.log(err))

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            })
        });    
        test.removeList();
    }
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
                <button onClick={createOrder}>Finalizar Compra</button>
                </div>
            }
        </div>

        </>
    );
}

export default Cart;