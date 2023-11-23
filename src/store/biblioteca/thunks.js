import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyLibro, addNewEmptyPrestamo, deleteByIdLibro, deleteByIdPrestamo, savingNewLibro, setActivoLibro, setLibro, setPrestado, setSaving, updateLibro } from "./biblioSlice";
import { loadLibros } from "../../helpers";
import { loadPrestados } from "../../helpers/loadPrestados";

export const startNewLibro = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewLibro());
        const { uid } = getState().auth;
        const { activo: Libro } = getState().biblio;
        // const newLibro = {
        //     //  id: '',
        //     titulo: '',
        //     autor: '',
        //     descripcion: '',
        //     disponibilidad: true,
        //     año: new Date().getFullYear(),

        // }
        const newLibro = {...Libro, año: new Date().getFullYear() }
        const newDoc = doc(collection(firebaseDB, `Libros`));
        await setDoc(newDoc, newLibro);

        newLibro.id = newDoc.id;

        dispatch(addNewEmptyLibro(newLibro));
        dispatch(setActivoLibro(newLibro));
    }
}

export const startNewPrestado = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewLibro());
        const { uid } = getState().auth;
        const { Prestados, activo } = getState().biblio;

        const newActivo = {
            Lb_id: activo.id,
            titulo: activo.titulo,
            autor: activo.autor,
            descripcion: activo.descripcion,
            disponibilidad: false,
            año: activo.año
        };

        const newDoc = doc(collection(firebaseDB, `${uid}/libros/prestados`));
        await setDoc(newDoc, newActivo);

        newActivo.id = newDoc.id;
        const LibroToFireStore = {
            titulo: activo.titulo,
            autor: activo.autor,
            descripcion: activo.descripcion,
            disponibilidad: false,
            año: activo.año
        };
        // delete LibroToFireStore.Lb_id;
        delete LibroToFireStore.id;
        const docRef = doc(firebaseDB, `Libros/${activo.id}`);
        await setDoc(docRef, LibroToFireStore, { merge: true });

        dispatch(updateLibro(activo));
        dispatch(addNewEmptyPrestamo(newActivo));
        dispatch(setActivoLibro(newActivo));
        startLoadingLibro();
    }
}

export const startLoadingLibro = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('el uid no existe');
        const Libros = await loadLibros(uid);
        dispatch(setLibro(Libros));
    }
}

export const startLoadingPrestado = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('el uid no existe');
        const prestados = await loadPrestados(uid);
        dispatch(setPrestado(prestados));
    }
}

export const startSaveLibro = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { activo: Libro } = getState().biblio;
        const LibroToFireStore = {...Libro };
        delete LibroToFireStore.id;

        const docRef = doc(firebaseDB, `Libros/${Libro.id}`);
        await setDoc(docRef, LibroToFireStore, { merge: true });

        dispatch(updateLibro(Libro));
    }

}



export const startDeletingLibro = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { activo: Libro } = getState().biblio;
        // console.log(Libro)
        const docRef = doc(firebaseDB, `Libros/${Libro.id}`);
        await deleteDoc(docRef);

        dispatch(deleteByIdLibro(Libro.id))
    }
}

export const startDeletingPrestamo = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { Prestados, activo } = getState().biblio;

        const docRef = doc(firebaseDB, `${uid}/libros/prestados/${activo.id}`);
        await deleteDoc(docRef);

        const LibroToFireStore = {
            // id: activo.id,
            titulo: activo.titulo,
            autor: activo.autor,
            descripcion: activo.descripcion,
            disponibilidad: true,
            año: activo.año
        };
        delete LibroToFireStore.Lb_id;
        delete LibroToFireStore.id;
        const docLibro = doc(firebaseDB, `Libros/${activo.Lb_id}`);
        await setDoc(docLibro, LibroToFireStore, { merge: true });

        dispatch(deleteByIdPrestamo(activo.id));
        dispatch(updateLibro(activo));
        startLoadingLibro();
    }
}