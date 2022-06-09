import '../App.css'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';



const ItemDetail =({item})=>{
    const [itemCount, setItemCount] = useState(0);
    const {tittle, price, url} = item;
    const test = useContext(CartContext);
   
   
    const onAdd = (add) => {
        alert("agregaste " + add + " items");
        setItemCount(add);
        test.addToCart(item);
    }
    return(
        <>  
            
            <div>
            <h4>{tittle}</h4>
            <div>
                <img src={url} alt={tittle} width='200px' height='200px'/>
            </div>
            <h5>Precio: ${price}</h5>      
            {
                itemCount === 0
                ? <ItemCount initial={itemCount} onAdd={onAdd} />
                : <Link to='/cart'><button>Finalizar Compra</button></Link>
            }        
            </div>

        </>

    );
};


export default ItemDetail;