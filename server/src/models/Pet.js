import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Pet = sequelize.define('pet', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    picture: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.ENUM('Macho', 'Hembra', ""),
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disease: {
        type: DataTypes.ENUM("SI", "NO", ""),
    },
    diseaseType: {
        type: DataTypes.STRING,
    },
    treatment: {
        type: DataTypes.ENUM("SI", "NO", ""),
    },
    treatmentType: {
        type: DataTypes.STRING,
    },
    vaccines: {
        type: DataTypes.ENUM("SI", "NO", ""),
    },
    castrated: {
        type: DataTypes.ENUM("SI", "NO", ""),
    },
    petshop: {
        type: DataTypes.STRING,
    },
    veterinary: {
        type: DataTypes.STRING
    },
    info: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
})
