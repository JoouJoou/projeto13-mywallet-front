import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/context";

export default function Signup () {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [disable, setDisable] = useState(false);

    function sendSubmit(e) {
        console.log("mds")
        e.preventDefault()
        setDisable(true)
        console.log({name, email, password})

        if (password === password2) {
            axios.post("http://localhost:5000/signup", {
                name,
                email,
                password
            }).then((e) => {
                console.log(e)
                window.alert("Registrado com sucesso")
                navigate("/")
            }).catch((err) => {
                window.alert(err.response.data)
                setDisable(false)
            })
        }
        else {
            return window.alert("Ambas as senhas devem coincidir")
        }
    }

    return (
        <Container>
            <h1>
                MyWallet
            </h1>
            <form onSubmit={sendSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                <input type="password" placeholder="Confirmar a senha" value={password2} onChange={(e) => {setPassword2(e.target.value)}} required/>
                <button type="submit" disabled={disable}>Cadastrar</button>
            </form>
            <h2 onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</h2>
        </Container>
    )
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
    input::placeholder{
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
        background-color: #A328D6;
        font-weight: bold;
        cursor: pointer;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
    `