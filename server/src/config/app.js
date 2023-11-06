import express from 'express';
import petOwnerRoutes from '../routes/petOwner.routes.js'
import petRoutes from '../routes/pet.routes.js'

const app = express();

//middlewares
app.use(express.json());

app.use(petOwnerRoutes);
app.use(petRoutes)

export default app;