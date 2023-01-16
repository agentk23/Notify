import {auth, provider} from './firebase/auth'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const loginWithGoogle = async () => {
        const user = await signInWithPopup(auth, provider)
            .then((result) => result)
            .then((data) => data.user)
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
            });
        return user;
    }
const loginWithEmail = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .then((user) => user);
    return user;
     
}
const postUser = async (user) => {
    const newUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName? user.displayName : null,
        photoURL: user.photoURL? user.photoURL : null
    }
    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uid: newUser.uid,
            email: newUser.email,
            displayName: newUser.displayName,
            photoURL: newUser.photoURL
        })
    }).then((response) => console.log(response));


}
export {loginWithEmail}
export {loginWithGoogle}
export {postUser}