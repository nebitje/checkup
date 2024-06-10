import {FormValidator} from "./FormValidator.js";
import {postDiagnose} from "./diagnoseService.js";

const form = document.querySelector("#diagnoseForm")
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
    name: 'koorts',
    method: (field) => {
        const radios = document.querySelectorAll('input[name="koorts"]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return true;
            }
        }
        return false;
    },
    message: "gelieve een keuze te maken"
})
formValidator.addValidator({
    name: 'braken',
    method: (field) => {
        const radios = document.querySelectorAll('input[name="braken"]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return true;
            }
        }
        return false;
    },
    message: "gelieve een keuze te maken"
})
formValidator.addValidator({
    name: 'diarree',
    method: (field) => {
        const radios = document.querySelectorAll('input[name="diarree"]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return true;
            }
        }
        return false;
    },
    message: "gelieve een keuze te maken"
})

form.addEventListener('submit', function (e){
    e.preventDefault()
    if(formValidator.validate()){
        const formData = new FormData(form)
        const diagnoseData = {
            naam: formData.get('naam'),
            plaats: formData.get('plaats'),
            koorts: formData.get('koorts'),
            braken: formData.get('braken'),
            diarree: formData.get('diarree'),
        }
        try{
            postDiagnose(diagnoseData)
            alert("Diagnose succesvol toegevoegd!")
        }
        catch (err){
            console.error("HTTP error:" + err)
        }
    }
})
