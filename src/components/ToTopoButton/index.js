import styled from "styled-components";


const ButtonToTopo = styled.button`
    position: fixed;
    right:10px;
    bottom: 10px;

    background: var(--accent);
    color: #FFF;
    padding: 10px;
    border-radius: 5px;

    span{
        transform: rotate(-90deg);
        display:inline-block;
        font-size: 1.2em
    }
`;

function ToTopoButton(){

    function toTopo(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ButtonToTopo onClick={toTopo}>
            <span>&#10140;</span> Topo
        </ButtonToTopo>
    );

}

export default ToTopoButton;