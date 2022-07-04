import { query, where, collection, getDocs, orderBy } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (id) => {
    let q;
    if (id) {
        q = query(collection(db, "products"), where('categoria','==',id));
    } else {
        q = query(collection(db, "products"), orderBy('tittle'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
  } else {
    
      console.log("No such document!");
  }
}