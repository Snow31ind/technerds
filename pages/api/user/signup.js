import nc from 'next-connect';
import db from '../../../utils/db/db';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/middleware/auth';

const handler = nc();

handler.post(async (req, res) => {
  // Testing
  // res.send({ message: 'Successfully registered' });

  const user = req.body;

  // res.send({ data: user });

  await db.connect();

  const existingUser = await User.findOne({ email: user.email });

  if (existingUser) {
    await db.disconnect();

    res.send({ message: 'User already exists.' });
  } else {
    // const newUser = new User({
    //   ...user,
    //   password: bcrypt.hashSync(user.password),
    //   isAdmin: false,
    // });

    const newUser = await User.create({
      ...user,
      password: bcrypt.hashSync(user.password),
      isAdmin: false,
    });

    console.log('API - signup:', newUser);

    // const createdUser = await newUser.save();

    // const createdUser = ;
    const userToken = signToken(createdUser);

    // const userToken = signToken(newUser);

    await db.disconnect();

    // res.send(newUser);

    res.send({
      userToken,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
});

export default handler;
