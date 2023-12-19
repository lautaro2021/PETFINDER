import dotenv from 'dotenv'
import { Sequelize } from "sequelize";

dotenv.config()
if(process.env.NODE_ENV === 'production'){
    console.log('##### running production database #####')
    dotenv.config({path: '.env.prod'})
}else{
    console.log('##### running local database #####')
    dotenv.config({path: '.env.dev'})
}

export const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    String(process.env.DB_PASSWORD), 
    {host: process.env.DB_HOST || 'localhost',port: process.env.DB_PORT, dialect: 'postgres'}
)