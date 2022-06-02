import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const productos = require('./productos').default;


const ItemDetailContainer = () =>{
const [dato, setDato] = useState({});
const {id} = useParams();


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
data(2000, productos.find(item => item.id === parseInt(id)))
    .then((res) => setDato(res))
    .catch(err => console.log(err))
},[]);


    return (
        <>
        <ItemDetail item={dato}/>
        
        </>

    )
}

export default ItemDetailContainer;