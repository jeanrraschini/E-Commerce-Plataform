import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAbd1lXTr_bkRL84ctqdCvxCbxCt6Tn8GY",
  authDomain: "crown-clothing-db-d7964.firebaseapp.com",
  projectId: "crown-clothing-db-d7964",
  storageBucket: "crown-clothing-db-d7964.appspot.com",
  messagingSenderId: "202128708487",
  appId: "1:202128708487:web:05ec570aeb5e185b023922"
};

firebase.initializeApp(config);

// exporta os métodos importados
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Acessa o provedor de autenticação do Google (google auth provider) no Firebase
const provider = new firebase.auth.GoogleAuthProvider()

// Parâmetro que determina o uso do 'pop-up' de contas Google nos processos de autenticação e sign in
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase