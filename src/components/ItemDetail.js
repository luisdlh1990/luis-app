import '../App.css'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useState } from 'react';



const ItemDetail =({item})=>{
    const [itemCount, setItemCount] = useState(0);
    const {tittle, price, url} = item;
    const onAdd = (add) => {
        alert(`You have selected ${add} items`);
        setItemCount(add);
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