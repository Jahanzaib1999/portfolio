import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: 'portfolio-website-f32bd.firebaseapp.com',
  projectId: 'portfolio-website-f32bd',
  storageBucket: 'portfolio-website-f32bd.appspot.com',
  messagingSenderId: '462510366049',
  appId: '1:462510366049:web:5bf8a7b26093debcd8b920',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp, projectStorage }
