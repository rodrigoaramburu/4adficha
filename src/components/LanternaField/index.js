import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";

import LanternaIcon from '../../assets/lanterna.svg';

const LabelLanterna = styled.label`
    cursor: pointer;
    & i::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(${LanternaIcon});
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
        display:none;
    }

    @media(max-width:640px){
        & i::after{
            float: right;
        }
    }

`;

function LanternaField({posicao}){

    const personagemState = usePersonagemState();

    function changeHandler(event){
        personagemState.setPersonagemProperty(posicao, 'portandoLanterna', event.target.checked);
        
    }

    return (
        <div>
            <LabelLanterna htmlFor={`lanterna${posicao}`}>
                <div>Usando Lanterna</div>
                <input 
                    type="checkbox"
                    name={`lanterna${posicao}`}
                    id={`lanterna${posicao}`}
                    checked={personagemState.getPersonagem(posicao).portandoLanterna}
                    onChange={changeHandler} 
                    
                />
                <i title="Habilitar/Desabilitar portando lanterna"></i>
            </LabelLanterna>

        </div>
    );
}


export default LanternaField;