import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";

import PetrificadoIcon from '../../assets/petrificado.svg';

const LabelPetrificado = styled.label`
    cursor: pointer;
    & i::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(${PetrificadoIcon});
        background-size: 100%;
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
        display: none;
    }

    @media(max-width:640px){
        & i::after{
            float: right;
        }
    }

`;

function PetrificadoField({posicao}){

    const personagemState = usePersonagemState();

    function changeHandler(event){
        personagemState.setPersonagemProperty(posicao, 'petrificado', event.target.checked);
        
    }

    return (
        <div>
            <LabelPetrificado htmlFor={`petrificado${posicao}`}>
                <div>Usando Petrificado</div>
                <input 
                    type="checkbox"
                    name={`petrificado${posicao}`}
                    id={`petrificado${posicao}`}
                    checked={personagemState.getPersonagem(posicao).petrificado}
                    onChange={changeHandler} 
                    
                />
                <i title="Habilitar/Desabilitar se está Petrificado"></i>
            </LabelPetrificado>

        </div>
    );
}


export default PetrificadoField;