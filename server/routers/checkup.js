import express from "express";
import {getAllDokters} from "../controllers/checkup.js";


const checkupRouter = express.Router();

checkupRouter.route("/")
    .get(getAllDokters)

export default checkupRouter;