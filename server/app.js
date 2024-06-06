import express from "express";
import cors from "cors";
import checkupRouter from "./routers/checkup.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/checkup", checkupRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/api/v1/checkup")
});