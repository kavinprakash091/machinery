import express from 'express';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.put(
  '/sign-up',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.send({ message: 'Email already exists!' });
      return;
    }
    const userSignup = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      phone: req.body.phone,
    });
    await userSignup.save();
    res.send({ message: 'Success' });
  })
);

export default userRouter;
