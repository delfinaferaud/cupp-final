import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, resizeBy, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return resizeBy.status(401).json({
        message: 'No autorizado',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (error) {
    res.status(401).json({
      message: 'Token inválido',
    });
  }
};
