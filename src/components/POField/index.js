import styled from "styled-components";
import {usePersonagemState} from "../../hooks/usePersonagemState";
import { FieldContainer, FieldInput, FieldLabel } from "../FieldStyle";


const ContainerPO = styled(FieldContainer)`
    width: 100px;

    @media(max-width:640px){
        width: 100%;
    }
`;

function POField({ posicao }) {

    const personagensState = usePersonagemState();

    function changeHandler(event) {
        personagensState.setPersonagemProperty(posicao, 'po', event.target.value);
    }

    return (
        <ContainerPO>
            <FieldLabel htmlFor={`PO${posicao}`}>PO:</FieldLabel>
            <FieldInput
                type="number"
                name={`po${posicao}`}
                id={`po${posicao}`}
                min="0"
                value={personagensState.getPersonagem(posicao).po}
                onChange={changeHandler}
                placeholder="PO" />
        </ContainerPO>
    );
}


export default POField;