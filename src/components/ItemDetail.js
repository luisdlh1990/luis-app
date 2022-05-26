import '../App.css'

const ItemDetail =({item})=>{
    const {tittle, price, url} = item;
    return(
        <>  
            
            <div>
            <h4>{tittle}</h4>
            <div>
                <img src={url} alt={tittle} width='200px' height='200px'/>
            </div>
            <h5>Precio: ${price}</h5>                
            </div>

        </>

    );
};


export default ItemDetail;