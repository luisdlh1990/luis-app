import { useEffect, useState } from 'react';
import '../App.css'




const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return(
        <>
        <div className='btns'>
            <button onClick={increment}>+</button>
            <div className='count'>{count}</div>
            <button onClick={decrement}>-</button>
            {
                stock && count
                ? <button onClick={() => onAdd(count)}>Add to Cart</button>
                : <button >Add to Cart</button>
            }
        </div>
        </>
    );
}

export default ItemCount;