import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";

import AtaduraIcon from '../../assets/atadura.svg';

const LabelAtadura = styled.label`
    cursor: pointer;
    & i::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(${AtaduraIcon});
        filter: opacity(30%);
    }

    & input:checked + i::after{
        filter: opacity(100%);
    }
    & div {
        width:1px;
        height:1px;
        text-indent: -9999px;
        overflow:hidden;
    }
    & input{
        visibility: hidden;
    }

    @media(max-width:640px){
        & i::after{
            float: right;
        }
    }

`;

function AtaduraField({posicao}){

    const personagemState = usePersonagemState();

    function changeHandler(event){
        personagemState.setPersonagemProperty(posicao, 'utilizouAtadura', event.target.checked);
        
    }

    return (
        <div>
            <LabelAtadura htmlFor={`atadura${posicao}`}>
                <div>Usando Atadura</div>
                <input 
                    type="checkbox"
                    name={`atadura${posicao}`}
                    id={`atadura${posicao}`}
                    checked={personagemState.getPersonagem(posicao).utilizouAtadura}
                    onChange={changeHandler} 
                    
                />
                <i title="Habilitar/Desabilitar se já utilizou atadura"></i>
            </LabelAtadura>

        </div>
    );
}


export default AtaduraField;