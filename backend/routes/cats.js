const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');
const Like = require('../models/Like');
const Comment = require('../models/Comment');

router.get('/cats', async (req, res) => {
    try {
        const cats = await Cat.find();

        const catsWithStats = await Promise.all(
            cats.map(async(cat) => {
                const likeCount = await Like.countDocuments({ catId: cat._id });

                const commentCount = await Comment.countDocuments({ catId: cat._id });

                return {
                    _id: cat._id,
                    name: cat.name,
                    breed: cat.breed,
                    description: cat.description,
                    imageUrl: cat.imageUrl,
                    createdAt: cat.createdAt,
                    likeCount,
                    commentCount
                };
            })
            
        );

        res.json({
            success: true,
            cats: catsWithStats,
        });

        } catch (error) {
           console.error('Error fetching cats:', error);
           res.status(500).json({
               success: false,
               message: 'Failed to fetch cats'
           });
        }
});

module.exports = router;
       

    