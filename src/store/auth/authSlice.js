import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        // role: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticado';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            // state.role = payload.role;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'no-authenticado';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            // state.role = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredencials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredencials } = authSlice.actions;