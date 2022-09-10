import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/context.js";
import Out from "../img/out.svg";

export default function Home() {
  const { token, name } = useContext(Context);

  axios.get("http://localhost:5000/transactions");

  return (
    <>
      <Header>
        <h2>Olá, {name}</h2>
        <img src={Out}></img>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 2.5rem auto 0 auto;
  h2 {
    color: white;
    font-size: 2.6rem;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
  }
`;
