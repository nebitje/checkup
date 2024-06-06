import {encode} from "html-entities";

const createDokterBox = function (dokter){
    const li = document.createElement("li")
    li.classList.add("dokterCard");

    li. innerHTML = `
        <h3>${encode(dokter.name)}</h3>
        <div class="dokterContent">
            <p>Adres: ${encode(dokter.adres)}</p>
            <p>Telefoonnummer: ${encode(dokter.nummer)}</p>
            <p>E-mail: ${encode(dokter.email)}</p>
        </div>
    `
    return li
}
export const addDokterBox = (dokter, container, ratingMethod) =>
    container.appendChild(createDokterBox(dokter, ratingMethod))