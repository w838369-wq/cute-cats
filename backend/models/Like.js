const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat',
        required: true
    },

    fingerprint: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

likeSchema.index({ catId: 1, fingerprint: 1}, {unique: true});

module.exports = mongoose.model('like', likeSchema);