import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, default: null },
  address: { type: String, default: null },
  city: { type: String, default: null },
  country: { type: String, default: null },
  postal: { type: String, default: null },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

export default User;
