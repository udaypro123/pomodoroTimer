
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDGJ9XhKUNbXOJeil-gZNrvX2Me2dhnMPY",
  authDomain: "podomoro-timer.firebaseapp.com",
  projectId: "podomoro-timer",
  storageBucket: "podomoro-timer.appspot.com",
  messagingSenderId: "959201191571",
  appId: "1:959201191571:web:ca2f90ff351c55077acf66"
};

export const app = initializeApp(firebaseConfig);




// export const signInWithgoole=()=>{
//     signInWithPopup(auth, provider)
//     .then((result)=>{
//         const name=result.user.displayName
//         localStorage.setItem("name",name)
//     }).catch((error)=>{
//         alert(error)
//     })
// }
