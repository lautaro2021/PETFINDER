import {Pet} from '../models/Pet.js';
import { PetOwner } from '../models/PetOwner.js';

export const getAllPet = async (req, res) => {
    try {   
        const allPets = await Pet.findAll();
        allPets.length ? res.status(200).json(allPets) : res.status(204).send('No pets found')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}

export const getPet = async (req, res) => {
    const id = req.params.id;
    try {
        const pet = await Pet.findByPk(id, {include: PetOwner});
        pet ? res.status(200).json(pet) : res.status(404).send('Pet not found')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}
export const createPet = async (req, res) => {
    const data = req.body;

    const pet = await Pet.findByPk(data.id);

    console.log(pet)

    if(!pet){
        try {
            const newPet = await Pet.create(data)
            newPet ? res.status(200).json(newPet) : res.status(404).send('Error al crear la mascota');
        } catch (error) {
            res.status(500).send('Internal server error')
        }
    }
    else{
        res.status(409).send('Ya existe una mascota vinculada a ese ID')
    }
}
export const updatePet = async (req, res) => {
    const newData = req.body;
    const id = req.params.id;
    try {
        const [modificatedRows] = await Pet.update(newData, {where: {id}})
        if(modificatedRows > 0){
            const updatedPet = await Pet.findByPk(id);
            res.status(200).json(updatedPet)
        }
        else {
            res.status(404).send('Update error')
        }
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}
export const deletePet = async (req, res) => {
    const id = req.params.id;
    try {
        const petToDelete = await Pet.findByPk(id)
        if(petToDelete){
            await Pet.destroy({where: {id}})
            res.status(200).json(petToDelete)
        }
        else {
            res.status(404).send('Delete error: Pet not found')
        }
        
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}