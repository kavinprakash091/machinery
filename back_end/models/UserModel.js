import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  postal: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
