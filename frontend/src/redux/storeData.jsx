const utility = {};
let uId = null;

utility.set = (value) => {
  uId = value;
};
utility.get = () => {
  return uId;
};

export default utility;
