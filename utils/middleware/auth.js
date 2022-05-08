import jwt from 'jsonwebtoken';

export const signToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
};
