import styled from "styled-components";
import dayArray from "../assets/Arrays/dayArray";
import { useState } from "react";

export default function NovoHabito ({newHabit, setNewHabit}) {

    return (
        <Box>
            <InputBox>
            <Input type="text" placeholder="nome do hábito"></Input>
            <Days >
                <Day/>
            </Days>
            </InputBox>
            <Options>
                <div>
                    <span onClick={() => setNewHabit(false)}>Cancelar</span>
                    <button>Salvar</button>
                </div>
            </Options>
        </Box>
    );
};

const Day = () => {
    
    return (
        <>
        {dayArray.map(d => <D dia={d}/>)}
        </>
    )
};

const D = ({dia}) => {

    const [selecionado, setSelecionado] = useState(false);

    const seleciona = () => {
        setSelecionado(!selecionado);
    }
    
    return <DayButton selecionado={selecionado} onClick={seleciona}>{dia}</DayButton>;
};

const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 180px;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

    button {
        border: 1px solid #D4D4D4;
    }

`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin-bottom: 5px;
    height: 45px;
    width: 300px;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 5px;

    &::placeholder {
        color: #DBDBDB;

    }
`

const Days = styled.div`    
    button {
        margin-right: 5px;
        font-size: 20px;
        height: 30px;
        width: 30px;
        border-radius: 5px;
    }
`
const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: #52B6FF;
    margin-right: 32px;

    button {
        width: 84px;
        height: 35px;
        font-size: 16px;
        color: white;
        background-color: #52B6FF;
        border-radius: 5px;
        margin-left: 25px;
    }

    button:enabled:hover {
        cursor: pointer;
    }

    button:enabled:active {
        transform: scale(0.97);
    }

    span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const DayButton = styled.button`

    color: ${(props) => props.selecionado ? "white" : "#DBDBDB"};
    background-color: ${(props) => props.selecionado ? "#CFCFCF" : "white"};

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(0.9);
    }
`