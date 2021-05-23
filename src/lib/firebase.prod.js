import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBV3rhBgPqOR1LgBr5OQ1MmdkagELPqtqg",
    authDomain: "netflix-5cf02.firebaseapp.com",
    databaseURL: "https://netflix-5cf02-default-rtdb.firebaseio.com",
    projectId: "netflix-5cf02",
    storageBucket: "netflix-5cf02.appspot.com",
    messagingSenderId: "142288696424",
    appId: "1:142288696424:web:afb40f76f02ef8d803b7dd"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

// export default firebase.database().ref();
export {firebase};
