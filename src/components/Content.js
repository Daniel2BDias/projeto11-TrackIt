import styled from "styled-components";
import { CgMathPlus } from "react-icons/cg";
import NovoHabito from "./NovoHabito";
import Habito from "./Habito";


export default function Content () {
    return (
        <Body>
        <Head><div>Meus hábitos</div><button><CgMathPlus /></button></Head>
        <Cont>
            <NovoHabito/>
            <Habito />
            <MOTD><p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p></MOTD>
        </Cont>
        </Body>
    );
};

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Cont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;

    div {
        width: 180px;
        text-align: center;
        color: #126BA5;
        font-size: 23px;
    }

    button {
        margin-right: 18px;
        height: 40px;
        width: 40px;
        border: none;
        border-radius: 5px;
        font-size: 22px;
        background-color: #52B6FF;
        text-align: center;
        color: #FFFFFF;
        padding-top: 7px;
    }

    button:hover {
        cursor: pointer;
    }

    button:enabled:active {
        transform: scale(0.95);
    } 
`

const MOTD = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 23px;
    font-size: 18px;
    box-sizing: border-box;
    padding: 20px;
`