import {FormValidator} from "./FormValidator.js";
import {postDokters} from "./dokterService.js";

const form = document.querySelector("#dokterForm")

if(!form){
    console.warn("Form is undefined")
}
const formValidator = new FormValidator(form)

formValidator.addValidator({
    name: 'naam',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een naam in te geven"
})
formValidator.addValidator({
    name: 'adres',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een adres in te geven"
})
formValidator.addValidator({
    name: 'nummer',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een telefoonnummer in te geven"
})
formValidator.addValidator({
    name: 'email',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een email in te geven"
})
formValidator.addValidator({
    name: 'email',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een email in te geven"
})
formValidator.addValidator({
    name: 'email',
    method: field => field.value.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    message: 'Gelieve een geldig email in te geven'
})

form.addEventListener('submit', function (e){
    e.preventDefault()
    if(formValidator.validate()){
        const formData = new FormData(form)
        const dokterData = {
            naam: formData.get('naam'),
            type: formData.get('type'),
            adres: formData.get('adres'),
            nummer: formData.get('nummer'),
            email: formData.get('email'),
        }
        try{
            postDokters(dokterData)
            alert("Dokter succesvol toegevoegd!")
        }
        catch (err){
            console.error("HTTP error:" + err)
        }
    }
})
