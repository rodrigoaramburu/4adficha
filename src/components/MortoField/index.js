import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";

import MortoIcon from '../../assets/death.svg';

const MortoContainer = styled.div`

    & i::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background-size: 100%;
        background-image: url(${MortoIcon});
        filter: opacity(30%);
    }

    &.morto i::after{
        filter: opacity(100%);
    }

    @media(max-width:640px){
        & i::after{
            float: right;
        }
    }

`;

function MortoField({posicao}){

    const personagemState = usePersonagemState();

    const isDeath = personagemState.getPersonagem(posicao).vida.atual <= 0;
    return (
        <div>
            <MortoContainer className={ isDeath ? 'morto': ''}>
                <i title="Sinaliza se personagem esta morto (vida atual = 0)"></i>
            </MortoContainer>

        </div>
    );
}


export default MortoField;