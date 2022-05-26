import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
const productos = require('./productos').default;


const ItemDetailContainer = () =>{
const [dato, setDato] = useState({});


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
data(2000, productos[2])
    .then((res) => setDato(res))
    .catch(err => console.log(err))
},[]);
    return (
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;