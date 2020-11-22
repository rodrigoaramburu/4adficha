import React from 'react';
import ClasseField from "../ClasseField";
import NivelField from '../NivelField';
import NomeField from "../NomeField";
import LanternaField from "../LanternaField";
import VidaField from '../VidaField';
import AtaqueField from '../AtaqueField';
import DefesaField from '../DefesaField';
import styled from 'styled-components';
import POField from '../POField';
import EquipamentoField from '../EquipamentoField';
import MagiasField from '../MagiasField';
import HabilidadesField from '../HabilidadesField';
import { usePersonagemState } from '../../hooks/usePersonagemState';
import AtaduraField from '../AtaduraField';
import PetrificadoField from '../PetrificadoField';
import PistaField from '../PistaField';
import MortoField from '../MortoField';


const ClasseNivelContainer = styled.div`
    display: flex;
    gap: 10px;

    & div:first-child{
        flex-grow: 1;
    }

    @media(max-width:640px){
        flex-direction: column;
    }
    
`;

const ContainerClasseNivelPO = styled.div`
    display: flex;

    & div:first-child{
        flex-grow: 1;
    }
    @media(max-width:640px){
        flex-direction: column-reverse;
    }
    
`;

const ContainerStatus = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin:10px;
    
    @media(max-width: 680px){
        display: flex;
    }
`;

const ContainerVidaAtaqueDefesa = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width:640px){
        flex-direction: column;
    }
`;

const PersonagemContainer = styled.section`
    box-shadow: 2px 3px 10px black, 0 0 125px #8f5922 inset;
    background: var(--papiro);
    padding: 20px;
    margin: 10px;
`;

const ChangePositionButton = styled.button`
    cursor: pointer;
    padding:5px 10px;
    font-size: 1.3em;
    background: var(--accent);
    color:#FFF;
    margin:5px;
    border-radius:5px;

    &.up{
        transform: rotate(-90deg); 
    }
    &.down{
        transform: rotate(90deg); 
    }
`;

function Personagem({ posicao }) {

    const personagemState = usePersonagemState();


    function personagemUp(){
        personagemState.changePosition('up', posicao);
        
        //let top = document.querySelector(`#personagem-${posicao-1}`).offsetTop;
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    function personagemDown(){
        personagemState.changePosition('down', posicao);
        
        //let top = document.querySelector(`#personagem-${posicao+1}`).offsetTop; 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <PersonagemContainer>
            <div id={ `personagem-${posicao}` }></div>
            <ContainerClasseNivelPO>
                <div>
                    <NomeField posicao={posicao} />
                    <ClasseNivelContainer>
                        <ClasseField posicao={posicao} />
                        <NivelField posicao={posicao} />
                        <POField posicao={posicao} />
                        <PistaField posicao={posicao} />
                    </ClasseNivelContainer>
                </div>

                <ContainerStatus>
                    <LanternaField posicao={posicao} />
                    <AtaduraField posicao={posicao} />
                    <PetrificadoField posicao={posicao} />
                    <MortoField posicao={posicao} />
                </ContainerStatus>
            </ContainerClasseNivelPO>


            <ContainerVidaAtaqueDefesa>
                <VidaField posicao={posicao} />

                <AtaqueField posicao={posicao} />

                <DefesaField posicao={posicao} />
            </ContainerVidaAtaqueDefesa>

            <EquipamentoField posicao={posicao} />

            <MagiasField posicao={posicao} />

            <HabilidadesField posicao={posicao} />


            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                {posicao > 0 &&
                    <ChangePositionButton 
                        onClick={ personagemUp } 
                        className="up"
                        title="Para cima na orderm"
                    >
                        &#10140;
                    </ChangePositionButton>

                }
                {posicao < 3 &&
                    <ChangePositionButton 
                        onClick={ personagemDown} 
                        className="down"
                        title="Para baixo na orderm"
                    >
                        &#10140;
                    </ChangePositionButton>
                }

            </div>

        </PersonagemContainer>
    );
}


export default Personagem;