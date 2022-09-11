import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context/context";
import Login from "./Componentss/signin/login/Login";
import Signup from "./Componentss/signin/register/Signup";
import Home from "./Componentss/home/Home";
import TransferIN from "./Componentss/transfer/in/TransferIN";
import TransferOUT from "./Componentss/transfer/out/TransferOUT";

function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  return (
    <>
      <Context.Provider
        value={{
          token,
          setToken,
          name,
          setName,
          email,
          setEmail,
          balance,
          setBalance,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newin" element={<TransferIN />} />
            <Route path="/newout" element={<TransferOUT />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
