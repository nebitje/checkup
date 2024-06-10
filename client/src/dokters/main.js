import{getDokters} from "./DokterService.js";
import {addDokterBox} from "./viewDokter.js"

const allDoktersContainer = document.querySelector("#allDokters")
try{
    getDokters()
        .then(dokters => dokters.forEach(dokter => addDokterBox(dokter, allDoktersContainer)))
}
catch (err){
    console.error("server error: " + err)
}

