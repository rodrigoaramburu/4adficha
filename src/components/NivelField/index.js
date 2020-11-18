import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";
import { FieldContainer, FieldInput, FieldLabel } from "../FieldStyle";


const ContainerNivel = styled(FieldContainer)`
    width: 100px;

    @media(max-width:640px){
        width: 100%;
    }
`;

function NivelField({ posicao }) {

    const personagensState = usePersonagemState();

    function changeHandler(event) {
        personagensState.setPersonagemProperty(posicao, 'nivel', event.target.value);
    }

    return (
        <ContainerNivel>
            <FieldLabel htmlFor={`nivel${posicao}`}>Nível:</FieldLabel>
            <FieldInput
                type="number"
                name={`nivel${posicao}`}
                id={`nivel${posicao}`}
                min="0"
                value={personagensState.getPersonagem(posicao).nivel}
                onChange={changeHandler}
                placeholder="Nível do personagem" />
        </ContainerNivel>
    );
}


export default NivelField;