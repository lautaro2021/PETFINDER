import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const QR = sequelize.define('qr', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    IDpet: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    QRurl: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true
})
