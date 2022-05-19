import ItemCount from "./ItemCount";
const ItemListContainer = ({greeting}) =>{

    return(
       <>
        <div>{greeting}</div>
        <ItemCount  stock={5} initial ={1} onadd={onadd}/>
       </> 
    );
}

export default ItemListContainer;