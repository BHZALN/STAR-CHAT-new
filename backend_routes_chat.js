const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// Get all messages
router.get('/', auth, async (req, res) => {
  const messages = await Message.find().populate('sender', 'username');
  res.json(messages);
});

// Post a message
router.post('/', auth, async (req, res) => {
  const message = new Message({
    sender: req.user.userId,
    content: req.body.content
  });
  await message.save();
  res.status(201).json(message);
});

module.exports = router;