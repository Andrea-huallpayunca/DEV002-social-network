/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { async } from "regenerator-runtime"
import { auth } from "./firebase.js";

export const logout = () => {
  signOut(auth);
  console.log('signOut');
};
