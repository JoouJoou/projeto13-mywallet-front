import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/context";
export default function Tranfers() {
  return (
    <Container>
      <h2>SIlencio</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 32.6rem;
  height: 44.6rem;
  background-color: white;
  border-radius: 0.5rem;
  margin: 2.2rem auto;
  h2 {
    font-size: 2rem;
    color: #868686;
    text-align: center;
    padding-top: 55%;
  }
`;
