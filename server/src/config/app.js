import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import petOwnerRoutes from '../routes/petOwner.routes.js'
import petRoutes from '../routes/pet.routes.js'
import qrRoutes from '../routes/qr.router.js'
import adminRoutes from '../routes/admin.route.js'

const app = express();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }))

app.use(petOwnerRoutes);
app.use(petRoutes)
app.use(qrRoutes)
app.use(adminRoutes)

export default app;