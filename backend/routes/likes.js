const express = require('express');
const router = express.Router();
const Like = require('../models/Like');
const { default: mongoose } = require('mongoose');

router.post('/likes', async (req, res) => {
    try {
        const { catId, fingerprint } = req.body;

        if (!catId || !fingerprint) {
            return res.status(400).json({
                success:false,
                message: 'catId and fingerprint are required'
            });
        }

        const existingLike = await Like.findOne({ catId, fingerprint});
        if (existingLike) {
            return res.status(400).json({
                success: false,
                message: 'You already liked this cat'
            });
        }

        const newLike = await Like.create({ 
            catId: new mongoose.Types.ObjectId(catId),
            fingerprint
        });

        res.status(201).json({
            success: true,
            message: 'Like added successfully',
            like: newLike
        });

    } catch (error){
        console.error('Error adding like:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to add like'
        });
    }
});

router.delete('/likes/:catId', async(req, res) => {
    try {
        const { catId } = req.params;
        const { fingerprint } = req.body;

        if (!fingerprint){
            return res.status(400).json({
                success: false,
                message: 'fingerprint is required'
            });
        }

        const deletedLike = await Like.findOneAndDelete({ catId, fingerprint });

        if(!deletedLike) {
            return res.status(404).json({
                success: false,
                message: 'Like not found'
            });
        }

        res.json({
            success: true,
            message: 'Like removed successfully'
        });

    } catch (error) {
        console.error('Error removing like:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove like'
        });

    }

});

module.exports = router;