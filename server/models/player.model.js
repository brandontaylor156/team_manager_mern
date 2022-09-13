const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String, 
        minlength: [2, "Name must be at least 2 characters"]
    },
    position: {
        type: String
    },
    
    gameStatus: 
    [
        {type: String, required: true},
        {type: String, required: true},
        {type: String, required: true}
    ], 
    
    
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

