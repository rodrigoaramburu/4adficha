import styled from "styled-components";
import { usePersonagemState } from "../../hooks/usePersonagemState";
import { ButtonAdicionar, FieldInput, InputBox, TrashButton } from "../FieldStyle";

import AtaqueIcon from '../../assets/ataque.svg';

const AtaqueContainer = styled.div`
    padding:10px;

`;

const AtaqueDisplay = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

    &::before{
        content: '';
        background-image: url(${AtaqueIcon});
        background-size: 100%;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
    }

`;


const TableAtaqueModificadores = styled.table`
    width: 100%;
    & input{
        padding: 3px;
        margin:2px;
        font-size:.9em;
        border-width: 1px;
    }

    & input[name='modificador'] {
        width:100%;    
    }
    
    & input[name='descricao'] {
        width:100%;    
    }

    & button{

    }
`;

function AtaqueField({ posicao }) {


    const personagemState = usePersonagemState();

    function changeHabilitadoHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).ataqueModificadores;
        
        let i = event.target.getAttribute('data-index');
        modificadores[i].habilitado = event.target.checked;

        personagemState.setPersonagemProperty(posicao, 'ataqueModificadores', Object.assign([], modificadores));
    }

    function changeModificadorHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).ataqueModificadores;
        let index = event.target.getAttribute('data-index');
        modificadores[index].modificador = event.target.value;

        personagemState.setPersonagemProperty(posicao, 'ataqueModificadores', Object.assign([], modificadores));
    }

    function changDescricaoHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).ataqueModificadores;
        let i = event.target.getAttribute('data-index');
        modificadores[i].descricao = event.target.value;

        personagemState.setPersonagemProperty(posicao, 'ataqueModificadores', Object.assign([], modificadores));
    }

    function addModificador(){
        let modificadores = personagemState.getPersonagem(posicao).ataqueModificadores;
        modificadores.push({
            habilitado: false,
            modificador: '',
            descricao: ''
        });
        personagemState.setPersonagemProperty(posicao, 'ataqueModificadores', Object.assign([], modificadores));
    }


    function removeModificador(event){
        if( !window.confirm('Realmente deseja remover o modificador de ataque?')){
            return;
        }
        let index = event.target.getAttribute('index');
        let modificadores = personagemState.getPersonagem(posicao).ataqueModificadores;

        modificadores.splice(index, 1);

        personagemState.setPersonagemProperty(posicao, 'ataqueModificadores', Object.assign([], modificadores));
    }
    

    
    return (
        <AtaqueContainer>
            <AtaqueDisplay>
                <label>Ataque</label>
                <InputBox type="number" readOnly value={personagemState.getTotalAtaque(posicao)} />
                <ButtonAdicionar onClick={addModificador} title="Adicionar modificador de ataque">+</ButtonAdicionar>
            </AtaqueDisplay>
            <TableAtaqueModificadores>
                <tbody>
                    {personagemState.getPersonagem(posicao).ataqueModificadores.map((modificador, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="habilitado"
                                    data-index={i}
                                    checked={modificador.habilitado}
                                    onChange={changeHabilitadoHandler}
                                    title="Habilitar/Desabilitar modificador ataque"
                                />
                            </td>
                            <td  style={ {width: '50px'}}>
                                <FieldInput
                                    type="text"
                                    name="modificador"
                                    data-index={i}
                                    value={modificador.modificador}
                                    placeholder="Mod."
                                    onChange={changeModificadorHandler}
                                    style={ modificador.invalido ? {borderColor: '#F00',borderWidth: '1px',borderStyle: 'solid'} : {} }
                                />
                            </td>
                            <td>
                                
                                <FieldInput
                                    type="text"
                                    name="descricao"
                                    data-index={i}
                                    placeholder="Descrição"
                                    value={modificador.descricao}
                                    onChange={changDescricaoHandler}
                                />
                            </td>

                            <td>
                                <TrashButton onClick={removeModificador} index={i}  title="Remover modificador de ataque">x</TrashButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </TableAtaqueModificadores>

        </AtaqueContainer>
    );
}

export default AtaqueField;