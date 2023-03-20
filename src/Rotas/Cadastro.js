import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

export default function Cadastro () {

    const [cadastro, setCadastro] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [disabled, setDisabled] = useState(false);

    console.log({email, name, image, password});

    const navigate = useNavigate();

    const cadastrar = (e) => {
        e.preventDefault(true);
        setDisabled(true);
        setCadastro({email, name, image, password});
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
        promise.then((res) => { 
            alert("Usuário Cadastrado!")
            navigate("/");
        });
        promise.catch((err) => {
            alert("Deu Xabu!" + ` ${err.response.data.message}`);
            setDisabled(false);    
        });
    };

    return (
        <Body>
            <Logo src={logo}/>
            <Form onSubmit={cadastrar}>
                <Input data-test="email-input" disabled={disabled} placeholder="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
                <Input data-test="password-input" disabled={disabled} placeholder="senha" type="password" name="senha" value={password} onChange={(e) => setPassword(e.target.value)} required></Input>
                <Input data-test="user-name-input" disabled={disabled} placeholder="nome" type="text" name="nome" value={name} onChange={(e) => setName((e.target.value))} required></Input>
                <Input data-test="user-image-input" disabled={disabled} placeholder="foto" type="url" name="foto" value={image} onChange={(e) => setImage(e.target.value)} required></Input>
                <Button data-test="signup-btn" type="submit" disabled={disabled}>{disabled ? <Loading/> : "Cadastrar"}</Button>
            </Form>
            <Login data-test="login-link" onClick={() => navigate("/")}><span>Já possui um conta? Faça o Login!</span></Login>
        </Body>
    );
};

const Body = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    box-sizing: border-box;
    background-color: white;
    
`;

const Logo = styled.img`
    display: block;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Input = styled.input`
    font-size: 20px;
    margin: 2px 0;
    height: 45px;
    width: 290px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 0 5px;

    &::placeholder {
        color: #D4D4D4;
    }
`;

const Button = styled.button`
    font-size: 21px;
    margin: 1px 0;
    border: none;
    height: 45px;
    width: 303px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Login = styled.div`
    color: #52B6FF;
    margin: 20px 0;
    
    span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
