import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/context.js";
import Out from "../img/out.svg";
import Plus from "../img/plus.svg";
import Minus from "../img/minus.svg";
import Tranfers from "./balance/Transfers.jsx";
import NoTranfers from "./balance/NoTransfers.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { token, setToken, name, setName, email, setEmail } =
    useContext(Context);
  let transfers = [
    { value: 33.2, type: "out" },
    { value: 50.2, type: "in" },
    { balance: 29.53 },
  ];

  /* axios.get("http://localhost:5000/transactions"); */

  return (
    <>
      <Header>
        <h2>Olá, {name}</h2>
        <img
          src={Out}
          onClick={() => {
            setToken("");
            setName("");
            setEmail("");
            navigate("/");
          }}
        ></img>
      </Header>
      {transfers.length > 0 ? <Tranfers /> : <NoTranfers />}
      <Footer>
        <button onClick={() => navigate("/newin")}>
          <img src={Plus} />
          <h2>
            Nova <br />
            entrada
          </h2>
        </button>
        <button onClick={() => navigate("/newout")}>
          <img src={Minus} />
          <h2>
            Nova <br />
            saída
          </h2>
        </button>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 32.6rem;
  margin: 2.5rem auto 0 auto;
  h2 {
    color: white;
    font-size: 2.6rem;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
  img {
    cursor: pointer;
  }
`;

const Footer = styled.main`
  width: 32.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  button {
    width: 15.5rem;
    height: 11.4rem;
    background-color: #a328d6;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.7rem;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    cursor: pointer;
  }
`;
