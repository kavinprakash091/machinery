import express from 'express';
import Product from '../models/ProductModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

export default seedRouter;
