import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { apiRoutes } from './routes/apiRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
