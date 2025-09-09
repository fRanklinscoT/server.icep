import express from 'express';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import { authorizeRole } from '../middlewares/authorizeRole.js';

const router = express.Router();

// Citizen dashboard
router.get('/citizen', authenticateToken, authorizeRole(['citizen']), (req, res) => {
  res.json({ message: `Welcome Citizen ${req.user.email}` });
});

// Admin dashboard
router.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.email}` });
});

// Municipal dashboard
router.get('/municipal', authenticateToken, authorizeRole(['municipal']), (req, res) => {
  res.json({ message: `Welcome Municipal Personnel ${req.user.email}` });
});

export default router;
