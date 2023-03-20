import styled from "styled-components";
import  { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

export default function Footer () {

    const navigate = useNavigate()
    return (
        <Foot data-test="menu">
            <div data-test="habit-link" className="habitos" onClick={() => navigate("/habitos")}>Hábitos</div>
            <Progress data-test="today-link">
            <Hoje onClick={() => navigate("/hoje")}>Hoje</Hoje>
            <CircularProgressbar
                value={0}
                maxValue={100}
                background
                backgroundPadding={6}

                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "#FFFFFF"
                })}
            />
            </Progress>
            <div data-test="history-link" onClick={() => navigate("/historico")} className="historico">Histórico</div>
        </Foot>
    )
};

const Foot = styled.footer`
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        color: #52B6FF;
        margin-bottom: 10px;
        width: 100px;
        text-align: center;
    }

    div:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
const Progress = styled.article`
    height: 100px;
    width: 100px;
    align-self: flex-end;
    position: relative;
`

const Hoje = styled.section`
    position: absolute;
    color: #FFFFFF;
    top: 41px;
    left: 32%;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`