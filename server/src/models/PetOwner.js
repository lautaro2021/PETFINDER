import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Pet } from "./Pet.js";

export const PetOwner = sequelize.define("pet_owners", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

//Relations --> one to many
PetOwner.hasMany(Pet, {
    foreignKey: 'petOwnerId',
    sourceKey: 'id'
})
Pet.belongsTo(PetOwner, {
    foreignKey: 'petOwnerId',
    targetKey: 'id'
})