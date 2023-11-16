import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const loginform = document.querySelector("#login-btn2");
const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");
const wrongpass = document.querySelector("#wrongpass");

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = "./home.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            wrongpass.innerHTML = `<p id="wrongpass">${errorCode}</p>`
        });
    password.value = "";
    wrongpass.innerHTML = "";
})