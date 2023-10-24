const utility = {};
let uId = null;

const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJvc2VAZXhhbXBsZS5jb21fNjUzMjc5NjkzNjFhOTU3YWUxNDkzOGRhIiwiaWF0IjoxNjk4MTIzNzcwLCJleHAiOjE2OTgyMTAxNzB9.NCuIJWReO9EA130fh3cmKdOUo3DtX0dnu9g6c8sYUlU";

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

utility.set = (value) => {
  uId = value;
};
utility.get = () => {
  return uId;
};

setCookie("auth", auth, 1);

export default utility;
