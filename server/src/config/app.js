import express from 'express';
import petOwnerRoutes from '../routes/petOwner.routes.js'

const app = express();

app.use(express.json());
app.use(petOwnerRoutes);

export default app;