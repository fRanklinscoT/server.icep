import express from 'express';
import bcrypt from 'bcrypt';
import { Citizen } from '../models/user.js';

const router = express.Router();

// Password validation function
function validatePassword(password) {
  const lengthCheck = password.length >= 8;
  const uppercaseCheck = /[A-Z]/.test(password);
  const digitCheck = /\d/.test(password);
  const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return lengthCheck && uppercaseCheck && digitCheck && symbolCheck;
}

router.post('/register', async (req, res) => {
  const { email, password, firstname, lastname, locationAddress } = req.body;

  // Check required fields
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Validate password
  if (!validatePassword(password)) {
    return res.status(400).json({ 
      error: 'Password must be exactly 8 characters, contain 1 uppercase letter, 1 digit, and 1 special symbol' 
    });
  }

  try {
    // Check if email exists
    const exists = await Citizen.findOne({ where: { email } });
    if (exists) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await Citizen.create({
      email,
      password: hashPassword,
      firstname,
      lastname,
      locationAddress,
    });

    res.status(201).json({
      message: 'Citizen registered successfully',
      user: {
        id: newUser.citizen_id,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

export default router;
