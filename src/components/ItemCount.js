import { useEffect, useState } from 'react';
import '../App.css'




const ItemCount = ({ stock = 100, initial = 0,  onAdd }) => {
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
            <div className='count'>{add}</div>
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