import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from './firestoreFetch';


const ItemDetailContainer = () =>{
const [dato, setDato] = useState({});
const {id} = useParams();
const [loading, setLoading] = useState(false);

useEffect(()=>{
    setLoading(true)
    firestoreFetchOne(id)
    .then((res)=>setDato(res))
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
},[id])


    return (
        <>
                
                
                
                {
                loading 
                ? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif"     alt="cargando..."/>
                
                : <ItemDetail item={dato}/>
                }
        
        
        
        </>
    )
}

export default ItemDetailContainer;