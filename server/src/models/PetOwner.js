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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
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
    targetId: 'id'
})