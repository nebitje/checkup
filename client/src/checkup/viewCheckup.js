const createDiagnoseBox = function (diagnose) {
    const li = document.createElement("li")
    li.classList.add("diagnoseCard");
    const koorts = () => {
        if (diagnose.koorts === 1) return "Koorts"
        else return "Geen koorts";
    }
    const braken = () => {
        if (diagnose.braken === 1) return "Braken"
        else return "Geen last van braken";
    }
    const diarree = () => {

        if (diagnose.diarree === 1) return "Diarree"
        else return "Geen diarree"
    }
    li.innerHTML = `
        <h2>${diagnose.naam}</h2>
        <p>Last van: ${diagnose.plaats}</p>
        <h3>Symptomen:</h3>
        <ul class="dokterContent">
            <li>${koorts()}</li>
            <li>${braken()}</li>
            <li>${diarree()}</li>
        </ul>
        <p>Resultaten zijn enkel een voorspelde diagnose. Raadpleeg altijd een dokter bij dringende hulp!</p>
    `
    return li
}
export const addDiagnoseBox = (diagnose, container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    container.appendChild(createDiagnoseBox(diagnose))
}
export const addNotFoundBox = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    const li = document.createElement("li")
    li.classList.add("diagnoseCard");
    li.innerHTML = `
    <h2>Diagnose niet gevonden!</h2>
    <p>We kunnen geen correcte diagnose tonen. Maak een afspraak bij je huisarts voor verdere ondersteuning!</p>
    `
    container.appendChild(li)
}
