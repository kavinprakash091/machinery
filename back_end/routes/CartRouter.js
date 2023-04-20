import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken, isAuth } from '../Utils.js';
import Cart from '../models/CartModel.js';

const cartRouter = express.Router();

cartRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.id });
    if (cart) {
      res.send(cart);
      return;
    }
    res.status(404).send({ message: 'No cart found!' });
    return;
  })
);

cartRouter.put(
  '/add/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const items = req.body.cart;
    const id = req.params.id;

    if (items.length === 1 && items[0].quantity === 1) {
      const cartItems = new Cart({
        userId: req.params.id,
        cart: items,
      });
      await cartItems.save();
      res.send(cartItems);
      return;
    } else {
      const cartItems = await Cart.findByIdAndUpdate(
        id,
        { cart: items },
        { new: true }
      );
      if (cartItems) {
        res.send(cartItems);
        return;
      }
    }

    res.status(404).send({ message: 'Unable to update cart' });
    return;
  })
);

export default cartRouter;
