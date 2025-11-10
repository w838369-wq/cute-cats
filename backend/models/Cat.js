const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    breed:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    imageUrl:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Cat', catSchema);