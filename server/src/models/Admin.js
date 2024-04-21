import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { v4 as uuidv4 } from 'uuid'

export const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => uuidv4()
    },
    user: {
        type: DataTypes.STRING,
        defaultValue: "Polytusk"
    },
    password: {
        type: DataTypes.STRING,
    }
})