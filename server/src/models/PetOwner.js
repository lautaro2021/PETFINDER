import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Pet } from "./Pet.js";

export const PetOwner = sequelize.define("pet_owners", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    picture: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    surname: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    province: {
        type: DataTypes.STRING,
    },
    email: {
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