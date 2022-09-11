import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/context";

export default function TransferIN() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const { token, email, setBalance } = useContext(Context);
  const [description, setDescription] = useState("");
  const [disable, setDisable] = useState(false);

  function sendTransfer(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: email,
      },
    };

    axios
      .post(
        "http://localhost:5000/transactions",
        {
          id: email,
          value,
          description,
          type: "in",
        },
        config
      )
      .then((e) => {
        setBalance(e.data);
        console.log(typeof e.data);
        navigate("/home");
      })
      .catch((err) => {
        window.alert(err.response.data);
        setDisable(false);
      });
  }

  return (
    <Container>
      <h2>Nova entrada</h2>
      <form onSubmit={sendTransfer}>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
        <button type="submit" disabled={disable}>
          Salvar entrada
        </button>
      </form>
    </Container>
  );
}

const Container = styled.main`
  h2 {
    font-size: 2.6rem;
    color: white;
    font-weight: bold;
    padding: 2.5rem 0 4rem 2.4rem;
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
`;
