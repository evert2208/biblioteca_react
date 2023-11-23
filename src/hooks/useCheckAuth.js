import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { startLoadingLibro, startLoadingPrestado } from "../store/biblioteca/thunks"


export const useCheckAuth = () => {
    const { status, displayName } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async(user) => {
            if (!user) return dispatch(logout());
            const { uid, email, displayName } = user;
            dispatch(login({ uid, email, displayName }));
            dispatch(startLoadingLibro());
            dispatch(startLoadingPrestado());
        })
    }, []);

    return {
        status,
        displayName
    }
}