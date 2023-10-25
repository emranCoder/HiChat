import Header from "./component/Header";
import ChatBox from "./component/ChatBox";
import LoginComponent from "./component/LoginComponent"
import getCookie from "./utility/cookie";
function App() {
  const auth = getCookie('auth');
  return (
    <>
      {(auth && <Header />)}

      {(auth && <ChatBox />) || <LoginComponent />}
    </>
  );
}

export default App;
