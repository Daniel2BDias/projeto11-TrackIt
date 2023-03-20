import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

        function currentDay() {
            return `${weekdays[dayjs().format("dddd")]}, ${dayjs().format("DD")}/${dayjs().format("MM")}`
          }

    return (
        <Body>
            <Header></Header>
            <Box>
                <Menu>
                {currentDay()}
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
    height: 80vh;
    width: 100%;
    margin: 70px 0;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
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
    return (
        <H>
            <Info>
                <h1>Habito</h1>
                <div>
                    <p>Sequecia atual</p>
                    <p>Recorde</p>
                </div>
            </Info>
            <button></button>
        </H>
    )
};

const H = styled.div`
    width: 95%;
    height: 95px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
`

const Info = styled.div`

`

const MOTD = styled.div`
    color: #C4C4C4;
    font-size: 18px;
`