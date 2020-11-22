import { useState } from "react";
import styled from "styled-components";
import { usePersonagemState } from "../../hooks/usePersonagemState";

const AnotacaoContainer = styled.div`
    position: fixed;
    width:50%;
    top:10%;
    bottom:10%;
    right: 0;

    display: flex;

    transition: width 1s;

    .inner-container{
        position: relative;

        display: flex;
        justify-content: strech;
        align-items:
    }

    h2{
        color:#FFF;
        background: var(--accent);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 10px ;  

        font-size: 0.95em;

        height:60px;
        position: absolute;
        top: 20%;
        left: -60px;
        z-index: -1;

        transform: rotate(-90deg);

        cursor: pointer;
    }

    &.hidden{
        width: 0% !important;
    }
    

    @media(max-width:640px){
        width:90%;
    }
`;

const ContainerAnotacaoTexto = styled.div`
    width:100%;
    box-shadow: 2px 3px 10px black, 0 0 125px #8f5922 inset;
    background: var(--papiro);
    padding: 20px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    

    textarea{
        width:100%;
        min-width:100px;
        height:100%;
        border: 1px solid #CCC;
        border-radius:5px;
        padding:5px;
    }

`;

function Anotacao() {

    const personagemState = usePersonagemState();

    const [show, setShow] = useState(true);

    function onChangeHandler(event) {
        personagemState.setAnotacoes(event.target.value);
    }

    function keydownHandler(event) {

        if (event.key === 'Tab') {
            event.preventDefault();
            const textarea = document.querySelector("#anotacoes");
            let start = textarea.selectionStart;
            let end = textarea.selectionEnd;
            let value = event.target.value;
            value = value.substring(0, start) + "\t" + value.substring(end);
            personagemState.setAnotacoes(value);
        }
    }

    function toggle() {
        setShow(!show);
    }
    return (
        <AnotacaoContainer className={show ? 'hidden' : ''}>
            <div className="inner-container">
                <h2 onClick={toggle}>Anotações</h2>
            </div>
            <ContainerAnotacaoTexto>
                <textarea
                    id="anotacoes"
                    value={personagemState.getAnotacoes()}
                    onChange={onChangeHandler}
                    onKeyDown={keydownHandler}
                ></textarea>
            </ContainerAnotacaoTexto>
        </AnotacaoContainer>
    );
}

export default Anotacao;