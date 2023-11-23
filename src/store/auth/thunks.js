import { registerUser, loginWithUser, logoutFirebase } from "../../firebase/providers"
import { clearLibroLogout } from "../biblioteca/biblioSlice"
import { checkingCredencials, login, logout } from "./authSlice"


export const checkingAuth = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredencials())
    }
}



export const startCreateUser = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const { ok, uid, photoURL, errorMessage } = await registerUser({ email, password, displayName });

        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, photoURL, email }))

    }
}

export const startLogin = ({ email, password }) => {
    return async(dispatch) => {
        dispatch(checkingCredencials());
        const resp = await loginWithUser({ email, password });
        if (!resp.ok) return dispatch(logout(resp));
        dispatch(login(resp))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearLibroLogout());
        dispatch(checkingCredencials());
        dispatch(logout());
    }
}