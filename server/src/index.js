import dotenv from 'dotenv';
import fs from 'fs'
import https from 'https'
import app from "./config/app.js";
import { sequelize } from './db/database.js';

dotenv.config();
const main = async() => {
    try {
        await sequelize.sync({force:false})

        const privateKey = fs.readFileSync('src/ssl/key.key', 'utf-8')
        const certificate = fs.readFileSync('src/ssl/certificate.crt', 'utf-8')

        const credentials = {
            key: privateKey,
            cert: certificate
        }

        const server = https.createServer(credentials, app);
        server.listen(process.env.PORT, () => {
            console.log(`listening at ${process.env.PORT}...`)
        })
    }
    catch (error){
        throw new Error (error)
    }

}

main();
