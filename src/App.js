import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context/context";
import Login from "./Componentss/signin/login/Login";
import Signup from "./Componentss/signin/register/Signup";

function App() {
  const [token, setToken] = useState("");
  console.log(token);

  return (
    <>
      <Context.Provider
        value={{
          token,
          setToken,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
