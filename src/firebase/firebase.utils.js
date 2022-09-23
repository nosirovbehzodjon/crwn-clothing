import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDsAQ0vjaDeTeRsdq7NgO5bG5xqVnMZT0M",
    authDomain: "crwn-db-1374e.firebaseapp.com",
    projectId: "crwn-db-1374e",
    storageBucket: "crwn-db-1374e.appspot.com",
    messagingSenderId: "602776657765",
    appId: "1:602776657765:web:6b9e57ad33b0fb4874cb8c",
    measurementId: "G-8H6HEMBPKV"
}

export const createUserProfileDocument= async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;