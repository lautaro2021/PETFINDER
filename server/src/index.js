import dotenv from 'dotenv';
import app from "./config/app.js";
import { sequelize } from './db/database.js';

dotenv.config();
const main = async() => {
    try {
        await sequelize.sync({force:false})
        app.listen(process.env.PORT, () => {
            console.log(`listening at ${process.env.PORT}...`)
        })
    }
    catch (error){
        throw new Error (error)
    }

}

main();
