import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";
import { FieldContainer, FieldInput, FieldLabel } from "../FieldStyle";


const ContainerPista = styled(FieldContainer)`
    width: 100px;

    @media(max-width:640px){
        width: 100%;
    }
`;

function PistaField({ posicao }) {

    const personagensState = usePersonagemState();

    function changeHandler(event) {
        personagensState.setPersonagemProperty(posicao, 'pista', event.target.value);
    }

    return (
        <ContainerPista>
            <FieldLabel htmlFor={`pista${posicao}`}>Pistas:</FieldLabel>
            <FieldInput
                type="number"
                name={`pista${posicao}`}
                id={`pista${posicao}`}
                min="0"
                max="3"
                value="0"
                value={personagensState.getPersonagem(posicao).pista}
                onChange={changeHandler}
                placeholder="Pistas que o personagem possui" />
        </ContainerPista>
    );
}


export default PistaField;