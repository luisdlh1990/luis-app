import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { firestoreFetch } from './firestoreFetch';


const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();



useEffect(()=>{
    setLoading(true)
    firestoreFetch(id)
    .then((res)=>setListaProductos(res))
    .catch((err)=> console.log(err))
    .finally(()=>setLoading(false))
},[id]);

useEffect(() => {
    return (() => {
        setListaProductos([]);
    })
}, []);


    return (
        <>
        <h2>Lista de Productos</h2>
        {
        loading? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="cargando..."/>  
        :<ItemList listaProductos={listaProductos} />
        }
        </>
        
    );
}

export default ItemListContainer;