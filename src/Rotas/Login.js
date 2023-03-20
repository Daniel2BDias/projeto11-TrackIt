import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import UserContext from "../components/userContext";


export default function Login () {

    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo, setUserInfo } = useContext(UserContext);
    const body = {
        email: email,
        password: password
    };

    const logIn = (e) => {
        e.preventDefault(true);
        setDisabled(!disabled);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        promise.then(res => {
            setUserInfo({ ...userInfo, token: res.data.token, image: res.data.image });
            navigate("/habitos");
        });
        promise.catch(err=>alert(err.response.status));

    }
    
    return (
        <Body>
            <Logo src={logo}/>
            <Form onSubmit={logIn}>
                <Input data-test="email-input" disabled={disabled} placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
                <Input data-test="password-input" disabled={disabled} placeholder="senha" type="password" value={password} onChange={(e) =>setPassword(e.target.value)} required></Input>
                <Button data-test="login-btn" disabled={disabled} type="submit" >{!disabled ? "Entrar" : <Loading/>}</Button>
            </Form>
            <Cadastro data-test="signup-link" onClick={() => navigate("/Cadastro")}><span>Não tem uma conta? Cadastre-se!</span></Cadastro>
        </Body>
    );
};

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 50px;
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

    &:disabled {
        opacity: 70%;
    }
`;

const Button = styled.button`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 303px;
    border: none;
    margin: 1px 0;

    &:disabled {
        background-color: #52B6FF;
        opacity: 70%;
    }

    &:enabled {
        font-size: 21px;
        background-color: #52B6FF;
        color: #FFFFFF;
    }

    &:hover {
        cursor: ${props => props.disabled ? "initial" : "pointer"};
    }

    &:active {
        transform: ${props => props.disabled ? "none" : "scale(0.95)"};
    }
`;

const Cadastro = styled.div`
    color: #52B6FF;
    margin: 20px 0;
    
    span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;