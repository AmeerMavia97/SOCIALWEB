import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


const fullname = document.querySelector("#register-fullname")
const email = document.querySelector("#register-email")
const phonenum = document.querySelector("#register-phonenum")
const password = document.querySelector("#register-password")
const registerbtn = document.querySelector("#register")
const emailused = document.querySelector("#email-used")

let arr = [];

registerbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = {
        fullname: fullname.value,
        email: email.value,
        phoneNum: phonenum.value,
        password: password,
    }
    arr.push(obj)
    console.log(arr);
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'REGISTER SUCCESSFULLY',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
                title: errorCode,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

        })
    email.value = "";
    fullname.value = "";
    password.value = "";
    phonenum.value = "";
})