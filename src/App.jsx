import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/signup";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer'

function App() {
  const [islogin, setIslogin] = useState(true);
  const [issignup, setIssignup] = useState(false);
  const [skipLogin, setSkipLogin] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-2 gap-4 main">
      { !skipLogin && <Header />}

      {!skipLogin && (
        <div className="flex gap-4 mt-2">
          <button 
            onClick={() => {
              setIslogin(!islogin);
              setIssignup(!issignup);
            }}
            className=" btn btn-primary">
            {islogin ? "Signup" : "Login"}
          </button>

          <button
            onClick={() => {
              setSkipLogin(true);
              setIslogin(false);
              setIssignup(false);
            }}
            className="btn btn-info"  >
            Skip Login
          </button>
        </div>
      )}

      <div className="w-full max-w-md bg-gray-900 p-4 rounded shadow">
        {!skipLogin && islogin && <Login />}
        {!skipLogin && issignup && <Signup />}
        {skipLogin && <Home />}
      </div>

      <Footer/>
    </div>
  );
}

export default App;