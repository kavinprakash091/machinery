import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import core from 'cors';
import seedRouter from './routes/SeedRouter.js';
import machineRouter from './routes/MachineRouter.js';
import userRouter from './routes/UserRouter.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(core());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use('/api/seed', seedRouter);
app.use('/api/machines/', machineRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '../front_end/build')));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../front_end/build/index.html'));
// });
