import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Hoje () {

    const dayjs = require('dayjs');
    var localeData = require('dayjs/plugin/localeData')
        dayjs.extend(localeData)
        dayjs().localeData();

    return (
        <>
            <Header></Header>
            <Box>
                <Menu>
                {dayjs().format()}
                </Menu>
            <H />
            <H />
            </Box>
            <Footer></Footer>
        </>
    )
};

const Box = styled.div`
    background-color: #F2F2F2;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around:
`

const Menu = styled.div`
    height: 80px;
`

const H = styled.div`
    width: 340px;
    height: 95px;
    background-color: #FFFFFF;
    margin-bottom: 10px;
`