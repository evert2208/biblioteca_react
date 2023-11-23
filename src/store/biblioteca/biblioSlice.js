import { createSlice } from '@reduxjs/toolkit';

export const biblioSlice = createSlice({
    name: 'biblio',
    initialState: {
        isSaving: false,
        saveMessage: '',
        Libros: [],
        Prestados: [],
        activo: null,

    },
    reducers: {

        savingNewLibro: (state) => {
            state.isSaving = true;
        },
        addNewEmptyLibro: (state, action) => {
            state.Libros.push(action.payload);
            state.isSaving = false;
            state.saveMessage = `${action.payload.titulo}, Agregado correctamente`;
        },

        savingNewPrestamo: (state) => {
            state.isSaving = true;
        },
        addNewEmptyPrestamo: (state, action) => {

            state.Libros = state.Libros.filter(libro => libro.Lb_id !== action.payload.Lb_id);
            state.Prestados.push(action.payload);
            state.isSaving = false;
            state.saveMessage = `${action.payload.titulo}, Prestado correctamente`;
        },

        setActivoLibro: (state, action) => {
            state.activo = action.payload;
            state.saveMessage = '';
        },
        setLibro: (state, action) => {
            state.Libros = action.payload;
        },
        setPrestado: (state, action) => {
            state.Prestados = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.saveMessage = '';
        },
        updateLibro: (state, action) => {
            state.isSaving = false;
            state.Libros = state.Libros.map(libro => {

                if (libro.id === action.payload.id) {
                    return action.payload;
                }

                return libro;
            });

            state.saveMessage = `${action.payload.titulo}, Actualizado correctamente`
        },

        clearLibroLogout: (state) => {
            state.isSaving = false;
            state.saveMessage = '';
            state.Libros = [];
            state.Prestados = [];
            state.activo = null;
        },
        deleteByIdLibro: (state, action) => {
            state.activo = null;
            state.Libros = state.Libros.filter(libro => libro.id !== action.payload);

        },
        deleteByIdPrestamo: (state, action) => {
            state.activo = null;
            state.Prestados = state.Prestados.filter(prestado => prestado.id !== action.payload);
            state.saveMessage = `${action.payload.titulo}, Devuelto correctamente`
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyLibro,
    setActivoLibro,
    setLibro,
    setPrestado,
    setSaving,
    updateLibro,
    deleteByIdLibro,
    savingNewLibro,
    clearLibroLogout,
    deleteByIdPrestamo,
    addNewEmptyPrestamo,
    savingNewPrestamo
} = biblioSlice.actions;