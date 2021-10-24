import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, writeBatch } from "firebase/firestore";
import { batch } from 'react-redux';

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

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export const auth = getAuth();
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

export const db = getFirestore();

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

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const newDoc = doc(collectionRef);
        console.log(newDoc);
        batch.set(newDoc, obj);
    })

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collectionSnapshot) => {
    const transformed = collectionSnapshot.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    })

    return transformed.reduce((previous, collection) => {
        previous[collection.title.toLowerCase()] = collection;
        return previous;  
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}

export default auth;