const apiurl = import.meta.env.VITE_API_URL;

export const getDokters = async () => {
    const resp = await fetch(apiurl + "/checkup/dokters")
    console.log("data received")
    if (!resp.ok) {
        throw new Error("HTTP error! status" + resp.status)
    }
    const {data} = await resp.json();
    if(!Array.isArray(data)){
        throw new Error("Received data is not an array")
    }
    console.log("dokters fetched!")
    return data
}