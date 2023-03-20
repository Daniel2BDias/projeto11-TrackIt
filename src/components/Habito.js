import styled from "styled-components";
import { CgTrash } from "react-icons/cg";
import dayArray from "../assets/Arrays/dayArray";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Habito ({name, days, id, auth}) {

    const navigate = useNavigate();

    const removeHabit = () => {

        if(window.confirm("Deseja mesmo deletar este hábito?")) {

        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, auth);
        promise.then(navigate("/habitos"));
        promise.catch(err => alert(`${err.response.data.message}`));

        }
    }

    return (
        <Box data-test="habit-container"> 
            <Cont>
                <h1 data-test="habit-name">
                    {name}
                </h1>
                <Days days={days}/>
            </Cont>
            <DeleteBtn data-test="habit-delete-btn" onClick={removeHabit}><CgTrash className="icon"
                color="666666"
            /></DeleteBtn>
        </Box>
    );
};

const Box = styled.div`
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    width: 340px;
    padding: 10px 10px 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    .icon:hover {
        cursor: pointer;
    }

    .icon:active {
        transform: scale(0.95);
    }
`

const Cont = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    h1 {
        font-size: 20px;
        color: #666666;
        margin-bottom: 3px;
    }
`

function Days ({days}) {
    return (
        <Day days={days}/>
    );
};

const Day = ({days}) => {
    
    return (

        <BDays >
        {dayArray.map(d => <D days={days} dia={d}/>)}
        </BDays>
    )
};

const D = ({dia, selecionado, days}) => {
    
    return <DayButton data-test="habit-day" days={days}>{dia}</DayButton>;
};

const BDays = styled.div`
    button {
        margin-right: 5px;
        font-size: 20px;
        height: 30px;
        width: 30px;
        border-radius: 5px;
    }
`

const DayButton = styled.button`

    color: ${(props) => props.days ? "white" : "#DBDBDB"};
    background-color: ${(props) => props.days ? "#CFCFCF" : "white"};
    border: 1px solid #DBDBDB;

`

const DeleteBtn = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    background-color: white;
`