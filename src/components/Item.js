import '../App.css'

const Item =({producto})=>{
    const {tittle, price, url} = producto;
    return(
        <>  
            
            <div className='container-p'>
            <h4>{tittle}</h4>
            <div>
                <img src={url} alt={tittle} width='100px' height='100px'/>
            </div>
            <h5>Precio: ${price}</h5>                
            </div>

        </>

    );
};


export default Item;
