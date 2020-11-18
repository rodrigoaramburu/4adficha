
import {usePersonagemState} from "../../hooks/usePersonagemState";
import { FieldContainer, FieldInput, FieldLabel } from "../FieldStyle";


function NomeField({ posicao }) {

    const personagemState = usePersonagemState();

    function changeHandler(event) {
        personagemState.setPersonagemProperty(posicao, 'nome', event.target.value);
    }

    return (
        <FieldContainer>
            <FieldLabel htmlFor={`nome${posicao}`}>Nome: </FieldLabel>
            <FieldInput
                type="text"
                name={`nome${posicao}`}
                id={`nome${posicao}`}
                value={personagemState.getPersonagem(posicao).nome}
                onChange={changeHandler}
                placeholder="Ex. Agatha, Dordred, Aendro," />
        </FieldContainer>
    );
}


export default NomeField;