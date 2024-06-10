import {addNotFoundBox} from "./viewCheckup.js";
export const getDiagnoses = async (plaats,koorts,braken,diarree) =>{
    const resp = await fetch(`https://iben/checkup/diagnoses/${plaats}&${koorts}&${braken}&${diarree}`)
    console.log("Diagnose received")
    console.log(resp)
    if(!resp.ok){
        if(resp.status === 404){
            const diagnoseContainer = document.querySelector("#diagnoseResultaat");
            addNotFoundBox(diagnoseContainer)
        }
        throw new Error("HTTP error! status " + resp.status)
    }
    const {data} = await resp.json()
    console.log("Diagnose fetched!")
    return data
}
