import styled from "styled-components";
import trackit from "../assets/logo/TrackIt.png";

export default function Header () {
    return (
        <Head>
            <img src={trackit}/>
            <img className="userImage" src={undefined} />
        </Head>
    )
};

const Head = styled.header`
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    
    img {
        height: auto;
       width: 100px;
       margin: 10px;
    }

    .userImage {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;

