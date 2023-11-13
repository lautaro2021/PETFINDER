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
        type: DataTypes.ENUM('Macho', 'Hembra'),
    },
    age: {
        type: DataTypes.STRING,
    },
    race: {
        type: DataTypes.STRING,
    },
    disease: {
        type: DataTypes.ENUM("SI", "NO"),
    },
    diseaseType: {
        type: DataTypes.STRING,
    },
    treatment: {
        type: DataTypes.ENUM("SI", "NO"),
    },
    treatmentType: {
        type: DataTypes.STRING,
    },
    vaccines: {
        type: DataTypes.ENUM("SI", "NO"),
    },
    castrated: {
        type: DataTypes.ENUM("SI", "NO"),
    },
    petshop: {
        type: DataTypes.STRING,
    },
    veterinary: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})
