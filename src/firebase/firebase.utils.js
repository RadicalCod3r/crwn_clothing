import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            if(result) {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }
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

const db = getFirestore();

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);
    const userSnap = await getDoc(userRef);

    console.log(additionalData);

    console.log(userSnap);

    if(!userSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log(error.message);
        }
    }
    return userRef;
}

export default auth;