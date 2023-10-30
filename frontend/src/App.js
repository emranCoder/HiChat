import Header from "./component/Header";
import ChatBox from "./component/ChatBox";
import LoginComponent from "./component/LoginComponent"
import getCookie from "./utility/cookie";
import SignUpComponent from "./component/SignUpComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const auth = getCookie('auth');
  return (
    <>
      <BrowserRouter >
        {(auth && <Header />)}
        <Routes>
          <Route path="/" Component={(auth && ChatBox) || LoginComponent} />
          <Route path="/signup" Component={!auth && SignUpComponent} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
