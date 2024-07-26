const express = require('express');
const router = express.Router();
const { Profile } = require('../models');
const authenticateJWT = require('../middleware/authenticateToken');

// Create a profile
router.post('/', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.create({ ...req.body, userId: req.user.id });
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all profiles
router.get('/', authenticateJWT, async (req, res) => {
  try {
    const profiles = await Profile.findAll({ where: { userId: req.user.id } });
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a profile by ID
router.get('/:id', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a profile
router.put('/:id', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    await profile.update(req.body);
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a profile
router.delete('/:id', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    await profile.destroy();
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
