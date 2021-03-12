import firebase from 'firebase'
//My personal db (firestore)
//It's help me to store posts, comment into db and have a test post

//yes Once we logout or when I close the webpage, it remove automatically
//so I use my personal db to store somme fictive data and store all data which we post
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDTdh8zgoUn9eEQNNer9b-nG2zYJz6aziE',
  authDomain: 'instasarujanproj.firebaseapp.com',
  databaseURL: 'https://instasarujanproj-default-rtdb.firebaseio.com',
  projectId: 'instasarujanproj',
  storageBucket: 'instasarujanproj.appspot.com',
  messagingSenderId: '661772747708',
  appId: '1:661772747708:web:513e1ea8196ac44d15a1b9',
  measurementId: 'G-8EZFK4LMTD'
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
