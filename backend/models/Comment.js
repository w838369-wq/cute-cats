const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat',
        required: true
    },

    userName: {
    type: String,
    default: 'Anonymous',
    trim: true
    },

    content: {
        type: String,
        required: true,
        trim: true
    },

    fingerprint: {
        type: String,
        required: true
    },

    creatAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);