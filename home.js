import { onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

// IF USER IS NOT LOGIN SO RUN THIS FUNCTION
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location = "./login.html"
  }
});

// LOGOUT USER
const  logout = document.querySelector("#logout-btn")
logout.addEventListener("click" , ()=>{
  signOut(auth).then(() => {
    window.location = "./login.html"
  }).catch((error) => {
    console.log(error);

  });
})
