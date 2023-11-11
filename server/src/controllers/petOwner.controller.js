import { PetOwner } from "../models/PetOwner.js"
import { Pet } from "../models/Pet.js";

export const getAllPetOwner = async (req, res) => {
    try{
        const allPetOwners = await PetOwner.findAll();
        allPetOwners.length ? res.status(200).json(allPetOwners) : res.status(204).send('No PetOwners found')
    }
    catch (error) {
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}

export const getPetOwner = async (req, res) => {
    const id = req.params.id
    try{
        const findPetOwner = await PetOwner.findByPk(id, {include: Pet})
        findPetOwner ? res.status(200).json(findPetOwner) : res.status(404).send('PetOwner not found')
    }
    catch (error){
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}

export const getPetOwnerByEmail = async (req, res) => {
    const {email} = req.query
    try{
        if(email){
            const findPetOwnerByEmail = await PetOwner.findOne({where: {email}, include: Pet})
            findPetOwnerByEmail ? res.status(200).json(findPetOwnerByEmail) : res.status(404).send('PetOwner not found')
        }
    }
    catch (error){
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}


export const createPetOwner = async (req, res) => {
    const {name, surname, phone, location, province,  email} = req.body;
    try {
        const findPetOwnerByEmail = await PetOwner.findOne({where: {email}})
        if(!findPetOwnerByEmail){
            const newPetOwner = await PetOwner.create({
                name,
                surname,
                phone,
                location,
                province,
                email,
            })
            newPetOwner ? res.status(200).json(newPetOwner) : res.status(404).send('Creation error');
        }
        else{
            res.status(404).send('A user already exists with that email')
        }

    }
    catch (error) {
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}

export const updatePetOwner = async (req, res) => {
    const newData = req.body;
    const id = req.params.id;

    try {
        const [modificatedRows] = await PetOwner.update(newData, {where: {id}})
        if(modificatedRows > 0){
            const updatedPetOwner = await PetOwner.findByPk(id);
            res.status(200).json(updatedPetOwner)
        }
        else{
            res.status(404).send('Update error');
        }
    }
    catch (error){
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}

export const deletePetOwner = async (req, res) => {
    const id = req.params.id
    try{
        const petOwnerToDelete = await PetOwner.findByPk(id);
        if(petOwnerToDelete){
            await PetOwner.destroy({where: {id}})
            res.status(200).json(petOwnerToDelete)
        }
        else {
            res.status(404).send('Delete error: PetOwner not found');
        }
    }
    catch(error){
        res.status(500).send('Internal server error')
        throw new Error(error)
    }
}