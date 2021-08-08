import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyDfgQ6s2t4BHm_3c59PZ8DtRcSQ8yO7EbU",
  authDomain: "kiwi-sign.firebaseapp.com",
  projectId: "kiwi-sign",
  storageBucket: "kiwi-sign.appspot.com",
  messagingSenderId: "319645308616",
  appId: "1:319645308616:web:ded03916aec8481a70f7fd"
};


export const FirebaseData= firebase.initializeApp(firebaseConfig)