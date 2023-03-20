import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CgCheck } from "react-icons/cg";
import Loading from "../components/Loading";
import { useState } from "react";

export default function Hoje () {

    const dayjs = require('dayjs');
    let localeData = require('dayjs/plugin/localeData')
        dayjs.extend(localeData)
        dayjs().localeData();

        const weekdays = {
            Sunday: "Domingo",
            Monday: "Segunda",
            Tuesday : "Terça",
            Wednesday: "Quarta",
            Thursday: "Quinta",
            Friday: "Sexta",
            Saturday: "Sábado"
          };

        const curDay = () => {
            return `${weekdays[dayjs().format("dddd")]}, ${dayjs().format("DD")}/${dayjs().format("MM")}`
          }

    return (
        <Body>
            <Header></Header>
            <Box>
                <Menu>
                {curDay()}
                <MOTD data-test="today-counter">
                    Nenhum hábito concluído ainda
                </MOTD>
                </Menu>
                <Hj></Hj>
            </Box>
            <Footer></Footer>
        </Body>
    )
};

const Body = styled.main`
    height: 75vh;
    width: 100%;
    margin: 70px 0;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const Box = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 25px;
    width: 100%;
    height: 80px;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
`

const Hj = () => {

    const [disabled, setDisabled] = useState(false);

    function completeHabit () {
        setDisabled(true);
    }

    return (
        <H>
            <Info>
                <h1>Habito</h1>
                <div>
                    <p>Sequecia atual:</p>
                    <p>Recorde:</p>
                </div>
            </Info>
            <button disabled={disabled} onClick={completeHabit}>{disabled ? <Loading/> : <CgCheck color="white" size={100}/>}</button>
        </H>
    )
};

const H = styled.div`
    width: 97%;
    height: 95px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    button {
        height: 80px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 10px;
    }

    button:enabled {
        border: 1px solid #E7E7E7;
    }

    button:disabled {
        background-color: #52B6FF;
    }

    button:enabled:hover{
        cursor: pointer;
    }

    button:enabled:active {
        transform: scale(0.97);
    }
`

const Info = styled.div`
    h1 {
        font-size: 20px;
        margin-bottom: 5px;
    }

    p {

    }
`

const MOTD = styled.div`
    color: #C4C4C4;
    font-size: 18px;
`