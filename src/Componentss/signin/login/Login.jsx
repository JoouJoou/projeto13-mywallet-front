import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/context";

export default function Login() {
  const navigate = useNavigate();

  const { setToken, setName, email, setEmail } = useContext(Context);
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  function sendLogin(e) {
    e.preventDefault();
    setDisable(true);

    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((e) => {
        setToken(e.data.token);
        setName(e.data.name);
        navigate("/home");
      })
      .catch((err) => {
        window.alert(err.response.data);
        setDisable(false);
      });
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={sendLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button type="submit" disabled={disable}>
          Entrar
        </button>
      </form>
      <h2 onClick={() => navigate("/signup")}>Primeira vez? Cadastre-se!</h2>
    </Container>
  );
}

const Container = styled.main`
  height: 66.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  margin: 0 auto;
  h1 {
    font-size: 3.2rem;
    color: white;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
  }
  input {
    width: 32.6rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 2rem;
    color: black;
  }
  input::placeholder {
    font-size: 2rem;
    color: black;
    padding-left: 1.5rem;
  }
  button {
    font-size: 2rem;
    color: white;
    width: 32.6rem;
    height: 4.6rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #a328d6;
    font-weight: bold;
    cursor: pointer;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;
