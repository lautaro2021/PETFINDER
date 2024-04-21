import { Admin } from "../models/Admin.js";
import bcrypt from 'bcrypt';

export const getAdminPassword = async (_, res) => {
    try {
        const admin = await Admin.findOne();
        admin ? res.status(200).json(admin) : res.status(204).send('No admin found')
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}

export const createAdminUser = async (req, res) => {
    const data = req.body;

    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newAdmin = await Admin.create({
            user: data.user,
            password: hashedPassword
        });

        res.status(200).json(newAdmin);
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
}

export const updateAdminUser = async (req, res) => {
    const { id, oldPassword, newPassword } = req.body;

    try {
        const admin = await Admin.findByPk(id);

        if (!admin) {
            return res.status(404).send('Admin not found')
        }

        const passwordMatch = await bcrypt.compare(oldPassword, admin.password);
        if (!passwordMatch) {
            return res.status(400).send('Constraseña antigua incorrecta');
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await admin.update({ password: hashedNewPassword })

        res.status(200).send('Contraseña actualizada con exito')
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error')
    }
}