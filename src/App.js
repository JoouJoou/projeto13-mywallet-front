import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context/context";
import Login from "./Componentss/signin/login/Login";
import Signup from "./Componentss/signin/register/Signup";
import Home from "./Componentss/home/Home";

function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(token);
  console.log(name);

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
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
