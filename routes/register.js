import express from 'express';
import { Citizen } from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, firstname, lastname, locationAddress } = req.body;

  try {

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const exists = await Citizen.findOne({ where: { email } });
    if (exists) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const newUser = await Citizen.create({
      email,
      password, 
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
