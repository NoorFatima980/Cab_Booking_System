// server/middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

function auth(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ message: 'Authorization header missing' });

  const parts = header.split(' ');
  if (parts.length !== 2) return res.status(401).json({ message: 'Invalid auth header' });

  const token = parts[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // { id, email, role, iat, exp }
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = auth;
