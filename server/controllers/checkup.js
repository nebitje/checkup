import {pool} from "../db.js";

export const getAllDiagnoses = async (req,res) =>{
    const query = "SELECT * FROM diagnoses"
    try{
        const [rows] = await pool.execute(query);
        res.status(200).json({
            status: "succes",
            data: rows
        })
    }
    catch (err){
        res.status(500).json({
            status: "Failed to load Diagnoses",
            message: err
        })
    }
}
export const getAllDokters = async (req,res) =>{
    const query = "SELECT * FROM dokters"
    try{
        const [rows] = await pool.execute(query);
        res.status(200).json({
            status: "succes",
            data: rows
        })
    }
    catch (err){
        res.status(500).json({
            status: "Failed to load dokters",
            message: err
        })
    }
}