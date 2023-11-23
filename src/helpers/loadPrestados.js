import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";


export const loadPrestados = async(uid = '') => {
    if (!uid) throw new Error('el uid no existe');
    const collectionRef = collection(firebaseDB, `${uid}/libros/prestados`);
    const docs = await getDocs(collectionRef);
    const prestados = [];
    docs.forEach(doc => {
        prestados.push({ id: doc.id, ...doc.data() })
    });

    return prestados;
}