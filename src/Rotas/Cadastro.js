import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export default function Cadastro () {

    const navigate = useNavigate();
    return (
        <Body>
            <Logo src={logo}/>
            <Form>
                <Input placeholder="email" required></Input>
                <Input placeholder="senha" required></Input>
                <Input placeholder="nome" required></Input>
                <Input placeholder="foto" required></Input>
                <Button>Cadastrar</Button>
            </Form>
            <Login onClick={() => navigate("/")}><span>Já possui um conta? Faça o Login!</span></Login>
        </Body>
    );
};

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    box-sizing: border-box;
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
    color: #D4D4D4;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 0 5px;
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
`;

const Login = styled.div`
    color: #52B6FF;
    margin: 20px 0;
    
    span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
