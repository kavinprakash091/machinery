import express from 'express';
import data from '../data.js';
import Product from '../models/ProductModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  const products = await Product.insertMany(data.products);
  res.send(products);
});

export default seedRouter;
