const chatHandle = {};
chatHandle.data = {
    sender: null,
    receiver: null,
};
chatHandle.handleGetChats = (sen, rec) => {
    chatHandle.data.sender = sen;
    chatHandle.data.receiver = rec;
}

export default chatHandle;