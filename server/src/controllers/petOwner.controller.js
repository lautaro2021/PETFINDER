import { PetOwner } from "../models/petOwner.js"

export const getPetOwner = async (req, res) => {
    const id = req.params.id
    try{
        if(id){
            const findPetOwner = PetOwner.findByPk(id)
            findPetOwner ? res.status(200).json(findPetOwner) : res.status(404).send('PetOwner not found')
        }
    }
    catch (error){
        res.status(500).send('error')
    }
}

export const createPetOwner = async (req, res) => {
    const {name, phone, location, state, email} = req.body;
    try {
        if(name && phone){
            const newPetOwner = PetOwner.create({
                name,
                phone,
                location,
                state,
                email
            })
            res.status(200).send('Created success');
        }
    }
    catch (error) {
        res.status(500).send('error')
    }
}