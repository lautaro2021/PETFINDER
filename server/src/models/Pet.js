import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Pet = sequelize.define('pet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    observations: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
