import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const register = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser) {
    const error = new Error('El email ya está registrado');
    error.statusCode = 400;
    error.errors = { email: 'El email ya está registrado' };
    throw error;
  }

  const user = await User.create(userData);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token: generateToken(user.id),
  };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    const error = new Error('Email o contraseña incorrectos');
    error.statusCode = 400;
    error.errors = { credentials: 'Email o contraseña incorrectos' };
    throw error;
  }

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token: generateToken(user._id),
  };
};
