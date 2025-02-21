import express from 'express';
import { getData } from '../controllers/apiController';

const router = express.Router();

// Verificar a chave da API antes de permitir o acesso
router.use((req, res, next) => {
  const apiKey = req.header('Authorization')?.replace('Bearer ', '');
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).send('Unauthorized');
  }
  next();
});

router.get('/data', getData);

export { router as apiRoutes };
