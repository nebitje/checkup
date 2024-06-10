import {pool} from "../db.js";

export const getAllDiagnoses = async (req, res) => {
    const query = "SELECT * FROM diagnoses"
    try {
        const [rows] = await pool.execute(query);
        res.status(200).json({
            status: "succes",
            data: rows
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed to load Diagnoses",
            message: err
        })
    }
}
export const getAllDokters = async (req, res) => {
    const query = "SELECT * FROM dokters"
    try {
        const [rows] = await pool.execute(query);
        res.status(200).json({
            status: "succes",
            data: rows
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed to load dokters",
            message: err
        })
    }
}
export const getDokter = async (req, res) => {
    const id = req.params.id
    if (isNaN(Number(id))) {
        return res.status(400).json({
            status: "fail",
            message: "geef een correct ID"
        })
    }
    const query = "SELECT * FROM dokters WHERE ID = ?"
    const values = [id]

    try{
    const [rows] = await pool.execute(query, values)
        console.log(rows)
        if(!rows || rows.length === 0){
            return res.status(404).json({
                status: "fail",
                message: "Dokter niet gevonden"
            })
        }
    res.status(200).json({
        status: "succes",
        data: rows[0]
    })
    }
    catch (err){
        res.status(500).json({
            status: "error",
            message: err
        })
    }
}
export const getDiagnose = async (req, res) =>{
    const plaats = req.params.plaats
    const koorts = req.params.koorts
    const braken =req.params.braken
    const diarree = req.params.diarree

    const query = 'SELECT * FROM diagnoses WHERE plaats = ? AND koorts = ? AND braken = ? AND diarree = ?';
    const values = [plaats, koorts, braken, diarree]
    try{
        const [rows] = await pool.execute(query, values)
        if(!rows || rows.length === 0){
            return res.status(404).json({
                status: "fail",
                message: "Dokter niet gevonden"
            })
        }
        res.status(200).json({
            status: "succes",
            data: rows[0]
        })
    }
    catch (err){
        res.status(500).json({
            status: "error",
            message: err
        })
    }

}

export const postDiagnose = async(req, res) =>{
    const {naam, plaats, koorts, braken, diarree} =  req.body
    console.log({naam, plaats, koorts, braken, diarree})
    try {
        const [result] = await pool.execute(
            'INSERT INTO diagnoses (naam, plaats, koorts, braken, diarree) VALUE (?, ?, ?, ?, ?)',
            [naam, plaats, koorts, braken, diarree]
        )
        res.status(201).json({message: "Diagnose added successfully", id: result.insertId})
    }
    catch (error){
        console.error("Error adding Diagnose: ", error)
        res.status(500).json({message: "Internal Server error"})
    }
}
export const postDokter = async(req, res) =>{
    const {naam, type, adres, nummer, email} =  req.body
    console.log({naam, type, adres, nummer, email})
    try {
        const [result] = await pool.execute(
            'INSERT INTO dokters (naam, type, adres, nummer, email) VALUE (?, ?, ?, ?, ?)',
            [naam, type, adres, nummer, email]
        )
        res.status(201).json({message: "Dokter added successfully", id: result.insertId})
    }
    catch (error){
        console.error("Error adding dokter: ", error)
        res.status(500).json({message: "Internal Server error"})
    }
}