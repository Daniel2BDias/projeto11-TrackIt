import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default function Habitos () {
    return (
        <Body>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </Body>
    )
};

const Body = styled.main`
    margin: 70px 0;
    height: 100%;
    width: 100%;
`;