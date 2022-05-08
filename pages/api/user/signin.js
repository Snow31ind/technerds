import nc from 'next-connect';
import db from '../../../utils/db/db';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/middleware/auth';
const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;

  await db.connect();

  const user = await User.findOne({ email });

  await db.disconnect();

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });

    res.status(200).send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    console.log('Hello');
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

export default handler;
