import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const productos = require('./productos').default;


const ItemDetailContainer = () =>{
const [dato, setDato] = useState({});
const {id} = useParams();
const [loading, setLoading] = useState(false);

useEffect(()=>{
let isok = true;

const data = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isok) {
                resolve(task);
            } else {
                reject("Error setDato");
            }
        }, time);
    });
}
setLoading(true)
data(2000, productos.find(item => item.id === parseInt(id)))
    
    .then((res) => setDato(res))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
},[id]);


    return (
        <>
                
                
                
                {loading ? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="cargando..."/> : <ItemDetail item={dato}/>}
        
        
        
        </>
    )
}

export default ItemDetailContainer;