import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcKJCt9PAoPtKmCe1ErYpELvXRTFSzdHo",
    authDomain: "crwn-clothing-db-12550.firebaseapp.com",
    projectId: "crwn-clothing-db-12550",
    storageBucket: "crwn-clothing-db-12550.appspot.com",
    messagingSenderId: "322930540268",
    appId: "1:322930540268:web:7cdb4a1a99e32c28122fc9"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}