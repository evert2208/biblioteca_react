import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { firebaseAuth } from './config';

export const registerUser = async({ email, password, displayName }) => {
    try {

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(firebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        // console.log(error)
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithUser = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);

        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const logoutFirebase = async() => {
    return await firebaseAuth.signOut();
}