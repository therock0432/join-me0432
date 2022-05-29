import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYQTyM7o6hVQGXAWrWWMhZcM-Kx78JZsc",
  authDomain: "joinme-0432.firebaseapp.com",
  projectId: "joinme-0432",
  storageBucket: "joinme-0432.appspot.com",
  messagingSenderId: "346980735921",
  appId: "1:346980735921:web:1c79b0b83375a404f9fb90",
  measurementId: "G-CR3PXRK7RJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 
  