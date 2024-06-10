import {FormValidator} from "./FormValidator.js";

const form = document.querySelector('#beheerForm')
if(!form){
    console.warn("form is undefined")
}
const formValidator = new FormValidator(form)

formValidator.addValidator({
    name: "name",
    method: (field) => field.value === "admin",
    message: "Gebruikersnaam is onjuist"
})
formValidator.addValidator({
    name: "password",
    method: (field) => field.value === "admin",
    message: "Wachtwoord is onjuist"
})