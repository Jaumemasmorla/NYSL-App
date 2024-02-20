
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyD9sBdK_9Tm4_AgYCkpvaF6LBc331nUmro",
  authDomain: "nysl-a2f93.firebaseapp.com",
  databaseURL: "https://nysl-a2f93-default-rtdb.firebaseio.com",
  projectId: "nysl-a2f93",
  storageBucket: "nysl-a2f93.appspot.com",
  messagingSenderId: "779438971758",
  appId: "1:779438971758:web:18c7f2fcca279dec413f7f",
  measurementId: "G-7NFYQSEWN0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

export const setData = (path, value) => (
  set(ref(database, path), value)
);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (devMode) {
      console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          console.log(val, "val");
          //return val;
        }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      },
    );
  }, [path, transform]);
 

  return [data, loading, error];
};