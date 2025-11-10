const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.post('/comments', async (req, res) => {
  try {
    const { catId, userName, content, fingerprint } = req.body;

    if (!catId || !content || !fingerprint) {
      return res.status(400).json({
        success: false,
        message: 'catId, content, and fingerprint are required'
      });
    }

    if (content.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Comment content cannot be empty'
      });
    }

    const newComment = await Comment.create({
      catId: new mongoose.Types.ObjectId(catId),
      userName: userName || 'Anonymous', 
      content: content.trim(),
      fingerprint
    });

    res.status(201).json({
      success: true,
      message: 'Comment added successfully',
      comment: newComment
    });

  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add comment'
    });
  }
});

router.get('/comments/:catId', async (req, res) => {
  try {
    const { catId } = req.params;

    const comments = await Comment.find({ catId: new mongoose.Types.ObjectId(catId) })
      .sort({ createdAt: -1 })
      .exec();

    res.json({
      success: true,
      comments
    });

  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch comments'
    });
  }
});

router.delete('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { fingerprint } = req.body;

    if (!fingerprint) {
      return res.status(400).json({
        success: false,
        message: 'fingerprint is required'
      });
    }

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }

    if (comment.fingerprint !== fingerprint) {
      return res.status(403).json({
        success: false,
        message: 'You can only delete your own comments'
      });
    }

    await Comment.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Comment deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete comment'
    });
  }
});

module.exports = router;