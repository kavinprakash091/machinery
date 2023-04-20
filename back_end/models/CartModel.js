import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  cart: [
    {
      category: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
