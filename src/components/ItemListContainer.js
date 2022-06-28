import ItemList from './ItemList';
import { useEffect, useState } from 'react';
//import { useParams } from 'react-router';
//import { firestoreFetch } from './firestoreFetch';
import { collection, getDocs } from "firebase/firestore";
import db from './firebaseConfig';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    //const { idCategory } = useParams();


    useEffect(() => {
        const firebaseFetch = async () =>{
            const querySnapshot = await getDocs(collection(db, "products"));
                querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        };
        firebaseFetch();
    }, [datos]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;