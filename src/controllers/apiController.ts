import { Request, Response } from 'express';
import { fetchDataFromExternalAPI } from '../services/apiService';

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await fetchDataFromExternalAPI();
    res.json(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
