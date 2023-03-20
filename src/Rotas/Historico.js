import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historico () {
    return (
        <>
        <Header />
        <Box>
        <H>Histórico</H>
        <MOTD>Em breve você poderá ver o histórico dos seus hábitos aqui!</MOTD>
        </Box>
        <Footer />
        </>
    )
};

const Box = styled.div`
    margin: 70px 0;
`

const H = styled.div`
    height: 80px;
    width: 180px;
    text-align: center;
    color: #126BA5;
    font-size: 23px;
    display: flex;
    align-items: center;
    margin-left: 26px;
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
    color: #666666;
`