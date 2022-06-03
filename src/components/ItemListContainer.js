import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
const productos = require('./productos').default;

const ItemListContainer = ({greeting}) =>{

const [listaProductos, setListaProductos]= useState([]);
const [loading, setLoading] = useState(false);
const {id} = useParams();


const getData = new Promise ((resolve, reject)=>{
        let condition = true;
        setTimeout(()=>{
           if(condition){
               if(id){
                   const resultado = productos.filter(item => item.categoria == id)
                   resolve(resultado)
               }else{
                   resolve(productos) 
               }
        }else{
            reject()
        }  
        },2000)
    })
    useEffect(()=>{
        setLoading(true)
        getData
        .then((Res)=>setListaProductos(Res))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }, [id])



    return(
       <>
        <h2>lista de productos</h2>
        {loading ? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="cargando..."/> :<ItemList listaProductos={listaProductos}/> }
        
        
       </> 
    );
}

export default ItemListContainer;