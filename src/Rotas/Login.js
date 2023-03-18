import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";


export default function Login () {

    const navigate = useNavigate();
    return (
        <Body>
            <Logo src={logo}/>
            <Form>
                <Input placeholder="email" type="email" required></Input>
                <Input placeholder="senha" type="password" required></Input>
                <Button>Entrar</Button>
            </Form>
            <Cadastro onClick={() => navigate("/Cadastro")}><span>Não tem uma conta? Cadastre-se!</span></Cadastro>
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

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
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