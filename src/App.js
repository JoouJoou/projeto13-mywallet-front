import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context/context";



function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");

  return (
    <>
      <Context.Provider
        value={{
          token,
          setToken,
          name,
          setName,
          password, 
          setPassword,
          balance,
          setBalance
        }}
      >
        <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}

export default App;
