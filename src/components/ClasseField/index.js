import { useContext, useState } from "react";
import { usePersonagemState } from "../../hooks/usePersonagemState";
import { FieldContainer, FieldInput, FieldLabel } from "../FieldStyle";


function ClasseField({posicao}){

    const personagensState = usePersonagemState();
    
    function changeHandler(event){
        personagensState.setPersonagemProperty(posicao, 'classe', event.target.value);
    }

    return (
        <FieldContainer>
            <FieldLabel htmlFor={`classe${posicao}`}>Classe: </FieldLabel>
            <FieldInput 
                type="text"
                name={`classe${posicao}`}
                id={`classe${posicao}`}
                placeholder="Ex. Anão, Clérigo, Guerreiro, etc"
                list="classes"
                value={personagensState.getPersonagem(posicao).classe}
                onChange={changeHandler}
            />
            <datalist id="classes">
                <option>Guerreiro</option>
                <option>Clérigo</option>
                <option>Ladino</option>
                <option>Mago</option>
                <option>Bárbaro</option>
                <option>Elfo</option>
                <option>Anão</option>
                <option>Halfling</option>
            </datalist>
        </FieldContainer>
    );

}

export default ClasseField;