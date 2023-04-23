import express from 'express';
import Product from '../models/ProductModel.js';

const machineRouter = express.Router();

machineRouter.get('/', async (req, res) => {
  console.log('Machine router');
  const machines = await Product.find({});
  if (machines) {
    res.send(machines);
    return;
  }
  res.status(404).send({ message: 'Machines not found' });
});

export default machineRouter;
