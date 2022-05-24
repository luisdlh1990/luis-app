import { useEffect, useState } from 'react';
import '../App.css'




const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [add, setAdd] = useState(0);
    

    useEffect(() => {
        setAdd(1);
    },[]);

    const increment = () => {
        if (add < stock) {
            setAdd(add + 1);
        }
    }
    
    const decrement = () => {
        if (add > initial) {
            setAdd(add - 1);
        }
    }
    return(
        <>
        <div className='btns'>
            <button onClick={increment}>+</button>
            <p>{add}</p>
            <button onClick={decrement}>-</button>
            {
                stock
                ? <button onClick={() => onAdd(add)}>Add to Cart</button>
                : <button >Add to Cart</button>
            }
        </div>
        </>
    );
}

export default ItemCount;