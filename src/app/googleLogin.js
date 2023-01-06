//import { async } from 'regenerator-runtime';
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';

export const googleLog = async() => {
    const provider = new GoogleAuthProvider();

    try{
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    }catch (error) {
      console.log(error.code);
    }
  };

