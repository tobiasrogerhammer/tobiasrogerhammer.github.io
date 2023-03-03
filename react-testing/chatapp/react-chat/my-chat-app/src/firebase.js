import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD4VXi5Zl7YrEBD7A5ljZvWWTpGQbXWnWk",
    authDomain: "dromtorpchats.firebaseapp.com",
    projectId: "dromtorpchats",
    storageBucket: "dromtorpchats.appspot.com",
    messagingSenderId: "125348494765",
    appId: "1:125348494765:web:3d56385bcde41fce8fb524",
    measurementId: "G-61724ZHLXH"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();

export default firebase;
