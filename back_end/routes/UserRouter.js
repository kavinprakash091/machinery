import express from 'express';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.put(
  '/sign-up',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(404).send({ message: 'Email already exists!' });
      return;
    }
    const userSignup = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      phone: req.body.phone,
    });
    await userSignup.save();
    res.send({
      username: userSignup.username,
      email: userSignup.email,
      phone: userSignup.phone,
    });
    return;
  })
);

export default userRouter;
