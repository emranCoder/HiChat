const mongoose = require('mongoose');
const User = require('./User');

const messagesSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});


const Messages = new mongoose.model('Messages', messagesSchema);

module.exports = Messages;