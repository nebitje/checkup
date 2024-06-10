import {FormValidator} from "./FormValidator.js";
import {getDiagnoses} from "./CheckupService.js";
import {addDiagnoseBox} from "./viewCheckup.js";

const form = document.querySelector('#checkupForm');
if (!form) {
    console.warn("Form is undefined")
}
const formValidator = new FormValidator(form)

formValidator.addValidator({
    name: 'plaats',
    method: (field) => field.value.trim().length > 0,
    message: "Gelieve een plaats in te vullen"
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
document.addEventListener('submit', async (event) => {
    event.preventDefault()

    const form = event.target;
    const plaats = form.elements['plaats'].value;
    const koorts = form.elements['koorts'].value;
    const braken = form.elements['braken'].value;
    const diarree = form.elements['diarree'].value;

    const diagnoseContainer = document.querySelector("#diagnoseResultaat");

    try {
        getDiagnoses(plaats, koorts, braken, diarree)
            .then(diagnose => addDiagnoseBox(diagnose, diagnoseContainer))
    } catch (err) {
        console.error("Server error:", err);
    }
});

