const utility = {};
let uId = null;
let senderAvatar = null;

utility.set = (value) => {
  uId = value;
};
utility.get = () => {
  return uId;
};
utility.setSenderAvatar = (value) => {
  senderAvatar = value;
}
utility.getSenderAvatar = () => {
  return senderAvatar
}


export default utility;
