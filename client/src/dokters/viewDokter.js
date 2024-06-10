import {encode} from "html-entities";


const createDokterBox = function (dokter){
    const li = document.createElement("li")
    li.classList.add("dokterCard");

    li. innerHTML = `
        <h2>${encode(dokter.naam)}</h2>
        <h3>${encode(dokter.type)}</h3>
        <div class="dokterContent">
            <p>${encode(dokter.adres)}</p>
            <p>${encode(dokter.nummer)}</p>
            <p>${encode(dokter.email)}</p>
            <iframe
        class="hidden"
        width="400"
        height="200"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5DHFlRK2p7rEVst0ogWvcuQTDpu6H_Z4&q=${encodeURIComponent(dokter.adres)}">
    </iframe>
        </div>
    `
    return li
}
export const addDokterBox = (dokter, container) =>
    container.appendChild(createDokterBox(dokter))