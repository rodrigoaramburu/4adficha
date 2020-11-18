import styled from "styled-components";
import { usePersonagemState } from "../../hooks/usePersonagemState";

import DefesaIcon from '../../assets/defesa.svg';
import { ButtonAdicionar, FieldInput, InputBox, TrashButton } from "../FieldStyle";

const DefesaContainer = styled.div`
    padding:10px;

`;

const DefesaDisplay = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    

    &::before{
        content: '';
        background-image: url(${DefesaIcon});
        background-size: 100%;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
    }

`;


const TableDefesaModificadores = styled.table`
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
`;

function DefesaField({ posicao }) {


    const personagemState = usePersonagemState();

    function changeHabilitadoHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).defesaModificadores;
        let i = event.target.getAttribute('data-index');
        modificadores[i].habilitado = event.target.checked;

        personagemState.setPersonagemProperty(posicao, 'defesaModificadores', Object.assign([], modificadores));
    }

    function changeModificadorHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).defesaModificadores;
        let i = event.target.getAttribute('data-index');
        modificadores[i].modificador = event.target.value;

        personagemState.setPersonagemProperty(posicao, 'defesaModificadores', Object.assign([], modificadores));
    }

    function changDescricaoHandler(event) {
        let modificadores = personagemState.getPersonagem(posicao).defesaModificadores;
        let i = event.target.getAttribute('data-index');
        modificadores[i].descricao = event.target.value;

        personagemState.setPersonagemProperty(posicao, 'defesaModificadores', Object.assign([], modificadores));
    }

    function addModificador(){
        let modificadores = personagemState.getPersonagem(posicao).defesaModificadores;
        modificadores.push({
            habilitado: false,
            modificador: '',
            descricao: ''
        });
        personagemState.setPersonagemProperty(posicao, 'defesaModificadores', Object.assign([], modificadores));
    }


    function removeModificador(event){
        if( !window.confirm('Realmente deseja remover o modificador de Defesa?')){
            return;
        }
        let index = event.target.getAttribute('index');
        let modificadores = personagemState.getPersonagem(posicao).defesaModificadores;

        modificadores.splice(index, 1);

        personagemState.setPersonagemProperty(posicao, 'defesaModificadores', Object.assign([], modificadores));
    }
    

    
    return (
        <DefesaContainer>
            <DefesaDisplay>
                <label>Defesa</label>
                <InputBox type="number" readOnly value={personagemState.getTotalDefesa(posicao)} />
                <ButtonAdicionar onClick={addModificador}  title="Adicionar modificador de defesa">+</ButtonAdicionar>
            </DefesaDisplay>
            <TableDefesaModificadores>
                <tbody>
                    {personagemState.getPersonagem(posicao).defesaModificadores.map((modificador, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    type="checkbox"
                                    name="habiitado"
                                    data-index={i}
                                    checked={modificador.habilitado}
                                    onChange={changeHabilitadoHandler}
                                    title="Habilitar/Desabilitar mod. defesa"
                                />
                            </td>
                            <td style={ {width: '50px'}}>
                                <FieldInput
                                    type="text"
                                    name="modificador"
                                    data-index={i}
                                    value={modificador.modificador}
                                    onChange={changeModificadorHandler}
                                    placeholder="Mod."
                                    style={ modificador.invalido ? {borderColor: '#F00',borderWidth: '1px',borderStyle: 'solid'} : {} }
                                />
                            </td>
                            <td>
                                
                                <FieldInput
                                    type="text"
                                    name="descricao"
                                    placeholder="Descrição"
                                    data-index={i}
                                    value={modificador.descricao}
                                    onChange={changDescricaoHandler}
                                />
                            </td>

                            <td>
                                <TrashButton onClick={removeModificador} index={i}  title="Remover modificador de defesa">x</TrashButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </TableDefesaModificadores>

        </DefesaContainer>
    );
}

export default DefesaField;