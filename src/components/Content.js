import styled from "styled-components";
import { CgMathPlus } from "react-icons/cg";
import NovoHabito from "./NovoHabito";
import Habito from "./Habito";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./userContext";


export default function Content () {

    const [newHabit, setNewHabit] = useState(false);
    const [hasHabit, setHasHabit] = useState(false);
    const {userInfo, setUserInfo} = useContext(UserContext);
    const Auth = {
        headers: {
          'Authorization': `Bearer ${userInfo.token}` 
        }
      }

    const renderNewHabit = () => {
        setNewHabit(true);
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", Auth)
        promise.then(({data}) => {

            setUserInfo({...userInfo, habitshabits : data})

    });
        promise.catch(err => alert(err.response.data.message))
    }, [])

    return (
        <Body>
            <Head><div>Meus hábitos</div><button onClick={renderNewHabit}><CgMathPlus /></button></Head>
            <Cont>
                {newHabit ? <NovoHabito newHabit={newHabit} setNewHabit={setNewHabit}/> : null}
                {userInfo.habits !== [] ? userInfo.habits.map(({id, days, name}) => <Habito id={id} days={days} name={name}/>) : null}
                {!hasHabit ? <MOTD><p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p></MOTD> : null}
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
    color: #666666;
`