import '../App.css'
import { Link } from 'react-router-dom';

const Item =({producto})=>{
    const {id, tittle, price, url} = producto;
    return(
        <>  
            
            <div className='container-p'>
            <h4>{tittle}</h4>
            <div>
                <img src={url} alt={tittle} width='150px' height='150px'/>
            </div>
            <h5>Precio: ${price}</h5>
            <Link to={`/item/${id}`}>Detalles</Link>                
            </div>

        </>

    );
};


export default Item;
