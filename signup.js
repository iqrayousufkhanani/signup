
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXYsFfj8k3_ZUdghSRMrRwLLVrgDAizsw",
    authDomain: "todo-4e9b5.firebaseapp.com",
    projectId: "todo-4e9b5",
    storageBucket: "todo-4e9b5.appspot.com",
    messagingSenderId: "1088433576723",
    appId: "1:1088433576723:web:1de37a6e9e5410c53058e6",
    measurementId: "G-PQR0YJMZ38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
    e.preventDefault();
    var obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    };

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            console.log(success.user.uid)
        })
        .catch(function (err) {
            console.log(err)
        });

    console.log(obj);
};