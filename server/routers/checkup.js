import express from "express";
import {
    getAllDiagnoses,
    getAllDokters,
    getDiagnose,
    getDokter,
    postDiagnose,
    postDokter
} from "../controllers/checkup.js";


const checkupRouter = express.Router();

checkupRouter.route("/diagnoses")
    .get(getAllDiagnoses)
    .post(postDiagnose)
checkupRouter.route("/dokters")
    .get(getAllDokters)
    .post(postDokter)
checkupRouter.route("/dokters/:id")
    .get(getDokter)
checkupRouter.route("/diagnoses/:plaats&:koorts&:braken&:diarree")
    .get(getDiagnose)
export default checkupRouter;