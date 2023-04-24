import express from 'express';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken, isAuth } from '../Utils.js';

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
      _id: userSignup._id,
      username: userSignup.username,
      email: userSignup.email,
      phone: userSignup.phone,
      token: generateToken(userSignup),
    });
    return;
  })
);

userRouter.post(
  '/sign-in',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email }).select(
      '+password'
    );
    if (!user) {
      res.status(404).send({ message: 'Account not found!' });
      return;
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        country: user.country,
        postal: user.postal,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    } else {
      res.status(404).send({ message: 'Invalid password!' });
      return;
    }
  })
);

userRouter.put(
  '/address/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      address: req.body.address,
      city: req.body.city,
      postal: req.body.postal,
      country: req.body.country,
      phone: req.body.country,
    });

    if (user) {
      res.send(user);
      return;
    }

    res.status(404).send({ message: 'User not found!' });
    return;
  })
);

export default userRouter;
