const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
        default: null
    }]
}, {
    timestamps: true,
});


const Chat = new mongoose.model('Chat', chatSchema);

module.exports = Chat;


