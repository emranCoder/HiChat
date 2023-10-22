const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    createdBy: {
        type: new mongoose.Types.ObjectId,
        ref: "User"
    },
    sender: {
        type: new mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: new mongoose.Types.Object,
        ref: "User",
        required: true
    },
    message: {
        type: new mongoose.Types.ObjectId,
        ref: "Message",
        required: true
    }
}, {
    timestamps: true,
});


const Chat = new mongoose.model('Chat', chatSchema);

module.exports = Chat;