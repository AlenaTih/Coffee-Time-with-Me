import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyChR30UHiZ4u-_t1mbqPfBTY0g57Smr_HA",
    authDomain: "realtime-database-67683.firebaseapp.com",
    databaseURL: "https://realtime-database-67683-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "realtime-database-67683",
    storageBucket: "realtime-database-67683.appspot.com",
    messagingSenderId: "372372469204",
    appId: "1:372372469204:web:f348e41f2bb53d7aaa9241"
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const contactDatainDB = ref(database, "CoffeeTimeWitMeData")

const submitButton = document.getElementById("submit-button")
const inputNameEl = document.getElementById("input-name")
const inputEmailEl = document.getElementById("input-email")
const inputDateTimeEl = document.getElementById("input-date-time")
const inputCommentEl = document.getElementById("input-comment")

let inputValue = {
    name: "",
    email: "",
    dateTime: "",
    comment: ""
}

submitButton.addEventListener("click", function() {
    
    const form = document.querySelector("form")

    if (!form.checkValidity()) {
        // If the form is not valid, prevent submition
        // The form is valid when the name and email input fields are not empty
        alert("Please type in your name and email ❤️")
    } else {
        alert(`Thank you, ${inputNameEl.value} ❤️ I will contact you!`)

    
        // Update inputValue with input values
        inputValue.name = inputNameEl.value
        inputValue.email = inputEmailEl.value
        inputValue.dateTime = inputDateTimeEl.value
        inputValue.comment = inputCommentEl.value

        // Push the contact data item to the database
        push(contactDatainDB, inputValue)

    }
})