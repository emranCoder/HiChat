const mongoose = require('mongoose');


const messagesSchema = new mongoose.Schema({
    sender: {
        type: new mongoose.Types.Object,
        ref: "User"
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