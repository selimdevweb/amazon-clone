import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyA8mnTRPxy0ZLE4HIVtTjWl-Nj_qeBPYtE",
  authDomain: "clone-c4045.firebaseapp.com",
  projectId: "clone-c4045",
  storageBucket: "clone-c4045.appspot.com",
  messagingSenderId: "275247254064",
  appId: "1:275247254064:web:0ac935c6522c2fdd2efbf5",
  measurementId: "G-3J1WRT73HC"
  });

  const auth = firebase.auth()

export  { auth}