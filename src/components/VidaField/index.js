import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";

import HeartIcon from '../../assets/heart.svg';

const VidaContainer = styled.div`
    background-image: url(${HeartIcon});
    width:140px;
    height:140px;
    background-size: 100%;
    position: relative;
    margin-right: 30px;
`;


const VidaAtualContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

    & label{
        text-align: center;
    }
    
    & input{
        display: block;
        background: transparent;
        width: 50px;
        font-size: 1.5em;
        text-align: center;
        margin-left:10px;
    }
`;



const VidaTotalContainer = styled.div`
    position: absolute;
    right:-15px;
    bottom: 15px;
    border: 3px solid var(--accent);
    border-radius:50%;
    width:60px;
    height:60px;
    
    background: var(--papiro);
    
    display: flex;
    flex-direction: column;

    & label{
        font-size: .7em;
        display: block;
        text-align: center;
        margin-top: 5px;
    }

    & input{
        width: 100%;
        font-size: 1.2em;
        background: transparent;
        text-align: center;
        padding-left: 15px;
    }
`;

function VidaField({ posicao }) {

    const personagemState = usePersonagemState();
    
    function changeHandlerVidaAtual(event) {
        personagemState.setPersonagemProperty(posicao, 'vida', {
            atual: parseInt(event.target.value),
            total: personagemState.getPersonagem(posicao).vida.total
        });
    }

    function changeHandlerVidaTotal(event) {
        personagemState.setPersonagemProperty(posicao, 'vida', {
            atual: personagemState.getPersonagem(posicao).vida.atual,
            total: parseInt(event.target.value)
        });
    }

    return (
        <VidaContainer>
            <VidaAtualContainer>
                <label>Atual</label>
                <input
                    type="number"
                    value={personagemState.getPersonagem(posicao).vida.atual}
                    onChange={changeHandlerVidaAtual}
                    min="0"
                    placeholder="Atual"
                />
            </VidaAtualContainer>

            <VidaTotalContainer>
                <label>Total</label>
                <input
                    type="number"
                    value={personagemState.getPersonagem(posicao).vida.total}
                    onChange={changeHandlerVidaTotal}
                    min="0"
                    placeholder="Atual"
                />
            </VidaTotalContainer>
        </VidaContainer>
    );

}


export default VidaField;