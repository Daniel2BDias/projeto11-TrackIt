import styled from "styled-components";
import { CgTrash } from "react-icons/cg";
import dayArray from "../assets/Arrays/dayArray";

export default function Habito () {
    const removeHabit = () => {

    }

    return (
        <Box>
            <Cont>
                <h1>
                    Hábito 1
                </h1>
                <Days />
            </Cont>
            <CgTrash onClick={() => removeHabit} className="icon"
                color="666666"
            />
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

function Days () {
    return (
        <Day/>
    );
};

const Day = () => {
    
    return (
        <BDays>
        {dayArray.map(d => <D dia={d}/>)}
        </BDays>
    )
};

const D = ({dia, selecionado}) => {
    
    return <DayButton selecionado={selecionado}>{dia}</DayButton>;
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

    color: ${(props) => props.selecionado ? "white" : "#DBDBDB"};
    background-color: ${(props) => props.selecionado ? "#CFCFCF" : "white"};
    border: 1px solid #DBDBDB;

`