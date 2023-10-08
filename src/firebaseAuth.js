import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from './firebase'

export async function authorize(email, password) {

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        const user = userCred.user.email
        return user
    } catch (error) {
        console.error(error)
    }
}

export async function register(name, email, password) {

    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCred.user
        await updateProfile(user, {
            displayName: name
        })
        return user.email
    } catch (error) {
        console.error(error)
    }
}

export async function signout() {
    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
    }
}