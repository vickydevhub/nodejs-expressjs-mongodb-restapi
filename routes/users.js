import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { getAllUser, addUser } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// ALL Users
router.get('/', auth, getAllUser);

// Add User
router.post('/add', addUser);

// Get User by ID
router.get('/:postid', async (req, res) => {
  try {
    const user = await User.findById(req.params.postid);
    res.json(user);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Delete User by ID
router.delete('/:postid', async (req, res) => {
  try {
    // ⚠️ Better to use deleteOne instead of remove (deprecated)
    const result = await User.deleteOne({ _id: req.params.postid });
    res.json(result);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Update User by ID
router.patch('/:postid', async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.postid },
      { $set: { username: req.body.username } }
    );
    res.json(result);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Sign-in route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: 'Please add email or password' });
  }

  try {
    const savedUser = await User.findOne({ email });
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, savedUser.password);
    if (!match) {
      return res.status(422).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
    const { _id, username, role } = savedUser;
    res.json({ token, user: { _id, email, username, role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
