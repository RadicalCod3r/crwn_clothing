import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
    apiKey: "AIzaSyDjQ1sUnugLaoRtaUN3QYEbfNQPnpSnVFE",
    authDomain: "crwn-db-ae8b5.firebaseapp.com",
    projectId: "crwn-db-ae8b5",
    storageBucket: "crwn-db-ae8b5.appspot.com",
    messagingSenderId: "260110380988",
    appId: "1:260110380988:web:308c78750814c6b6d5c5b9",
    measurementId: "G-WX40JN1YDE"
};

const app = initializeApp(config);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

const auth = getAuth();
export const  signInWithGoogle = (history) => {
    console.log(history);
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            history.push('/');
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export default auth;

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;