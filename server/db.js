import * as mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",
    user: "checkup",
    password: "Azerty123!",
    database: "checkup"
})