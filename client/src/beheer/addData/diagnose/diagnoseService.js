const apiUrl = import.meta.env.VITE_API_URL;
export const postDiagnose = async (payload) => {

    const resp = await fetch(apiUrl + "/checkup/diagnoses", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    if (!resp.ok) {
        throw new Error("Failed to post Diagnose")
    }
    return await resp.json()
}