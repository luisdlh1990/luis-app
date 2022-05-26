import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
//import ItemList from "./ItemList";
import ItemDetail from './ItemDetailContainer';
const productos = require('./productos').default;

const ItemListContainer = ({greeting}) =>{

//const [listaProductos, setListaProductos]= useState([]);
const [datos, setDatos]= useState([])
const [loading, setLoading] = useState(false);


const getData = new Promise ((resolve, reject)=>{
        let condition = true;
        setTimeout(()=>{
           if(condition){
           resolve(productos) 
        }else{
            reject()
        }  
        },2000)
    })
    useEffect(()=>{
        setLoading(true)
        getData
        //.then((Response)=>setListaProductos(Response))
        .then ((res)=>setDatos(res))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    const onAdd = (add) => {
        alert(`You have selected ${add} items`);
    }
    


    return(
       <>
        <h2>lista de productos</h2>
        {loading ? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="cargando..."/> ://<ItemList listaProductos={listaProductos}/>
        <ItemDetail/> }
        <ItemCount  stock={5} initial ={1} onAdd={onAdd}/>
       </> 
    );
}

export default ItemListContainer;