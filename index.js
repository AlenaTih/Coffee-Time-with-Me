const submitButton = document.getElementById("submit-button")
const inputName = document.getElementById("input-name")

submitButton.addEventListener("click", function() {
    
    const form = document.querySelector("form")

    if (!form.checkValidity()) {
        // If the form is not valid, prevent submition
        // The form is valid when the name and email input fields are not empty
        alert("Please type in your name and email ❤️")
    } else {
        console.log("clicked")
        alert(`Thank you, ${inputName.value} ❤️ I will contact you!`)
    }
})