import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";


export const loadLibros = async() => {

    const collectionRef = collection(firebaseDB, `Libros`);
    const docs = await getDocs(collectionRef);
    const libros = [];
    docs.forEach(doc => {
        libros.push({ id: doc.id, ...doc.data() })
    });

    return libros;
}