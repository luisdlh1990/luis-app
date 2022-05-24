import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const ItemListContainer = ({greeting}) =>{

const [listaProductos, setListaProductos]= useState([]);
const [loading, setLoading] = useState(false);

const productos=[
        {
            id: 0,
            tittle:"Reel Pesca Embarcado Rotativo Chicharra Okuma Clx300",
            price: 21450,
            url:" https://cf.shopee.com.ar/file/c5f2fabcdb10ec909a6ead302b4ee1ad",
        },
        {
            id: 1,
            tittle:"Reel Para Pesca Con Mosca Okuma Vashon 5-6 ",
            price: 24999,
            url:"https://http2.mlstatic.com/D_NQ_NP_706280-MLA31008741323_062019-O.jpg ",
        },
        {
            id: 2,
            tittle:"Reel Rotativo Baitcasting Daiwa Tatula 100 Hs 7.3:1 - 7 Rul",
            price: 32300,
            url:"https://http2.mlstatic.com/D_NQ_NP_789167-MLA31577730584_072019-O.webp ",
        },
        {
            id: 3,
            tittle:"Reel Rotativo DAIWA SEALINE pesca de mar",
            price: 1590 ,
            url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmZHouvI0LvuIOW0Xfb6SCCYhiK0dABo6Qdm6X6LbS6twac32lx644TkDFelgJX0YKkI&usqp=CAU",
        },
    
    ];
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
        .then((Response)=>setListaProductos(Response))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    const onAdd = (add) => {
        alert(`You have selected ${add} items`);
    }
    


    return(
       <>
        <div>{greeting}</div>
        {loading ? <img src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif" alt="cargando..."/> :<ItemList listaProductos={listaProductos}/>}
        <ItemCount  stock={5} initial ={1} onAdd={onAdd}/>
       </> 
    );
}

export default ItemListContainer;