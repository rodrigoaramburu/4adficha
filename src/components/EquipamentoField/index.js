import styled from "styled-components";
import { usePersonagemState } from "../../hooks/usePersonagemState";
import { ButtonAdicionar, FieldInput, TrashButton } from "../FieldStyle";

import EquipamentoIcon from '../../assets/equipamento.svg';
import PortandoFalseIcon from '../../assets/portando-false.svg';

const ContainerEquipamento = styled.div`
    margin:10px 0;
    margin-bottom:30px;
`;

const ContainerTituloEquipamento = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 10px;
    & label{
        font-size: 1.3em;
    }
    & > button{
        margin: 0 10px;
    }

    &::before{
        content: '';
        background-image: url(${EquipamentoIcon});
        background-size: 100%;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
    }
`;

const TableEquipamento = styled.table`

width: 100%;
& input{
    padding: 3px;
    margin:2px;
}

& input[type='text'] {
    width:100%;   
    font-size: 1.1em; 
}

`;


const LabelPortando = styled.label`
    cursor: pointer;
    & span{
        display:block;
        width:1px;
        height:1px;
        text-indent: -9999px;
        overflow: hidden;
    }


    & i::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(${PortandoFalseIcon});   
        background-size: 100%;
        filter: opacity(0.3)
    }

    & input:checked + i::after{
        filter: opacity(1);
    }


    & div {
        width:1px;
        height:1px;
        text-indent: -9999px;
        overflow:hidden;
    }
    & input{
        display: none;
    }

`;


function EquipamentoField({ posicao }) {

    const personagensState = usePersonagemState();

    function changeEquipadoHandler(event) {
        let index = event.target.getAttribute('data-index');
        let equipamentos = personagensState.getPersonagem(posicao).equipamentos;
        equipamentos[index].equipado = event.target.checked;

        personagensState.setPersonagemProperty(posicao, 'equipamentos', Object.assign([], equipamentos));
    }

    function changeDescricaoHandler(event) {
        let index = event.target.getAttribute('data-index');
        let equipamentos = personagensState.getPersonagem(posicao).equipamentos;
        equipamentos[index].descricao = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'equipamentos', Object.assign([], equipamentos));
    }


    function addEquipamento() {
        let equipamentos = personagensState.getPersonagem(posicao).equipamentos;
        equipamentos.push({
            equipado: false,
            descricao: ''
        });

        personagensState.setPersonagemProperty(posicao, 'equipamentos', Object.assign([], equipamentos));
    }

    function removeEquipamento(event) {
        if (!window.confirm('Você realmente deseja remover o equipamento')) {
            return;
        }
        
        let index = event.target.getAttribute('data-index');
        let equipamentos = personagensState.getPersonagem(posicao).equipamentos;
        equipamentos.splice(index, 1);

        personagensState.setPersonagemProperty(posicao, 'equipamentos', Object.assign([], equipamentos));
    }

    return (
        <ContainerEquipamento>
            <ContainerTituloEquipamento>
                <label>Equipamentos</label>
                <ButtonAdicionar onClick={addEquipamento} title="Adicionar Equipamento">+</ButtonAdicionar>
            </ContainerTituloEquipamento>


            <TableEquipamento>
                <tbody>
                    {personagensState.getPersonagem(posicao).equipamentos.map((equipamento, i) => (
                        <tr key={i}>
                            <td style={ {width: '50px'} }>
                                <LabelPortando htmlFor={`equipado-${posicao}-${i}`}>
                                    <span>Equipado</span>
                                    <input
                                        type="checkbox"
                                        name={`equipado-${posicao}-${i}`}
                                        id={`equipado-${posicao}-${i}`}
                                        checked={equipamento.equipado}
                                        data-index={i}
                                        onChange={changeEquipadoHandler}
                                    />
                                    <i title="Marcador se portando equipamento"></i>

                                </LabelPortando>
                            </td>
                            <td>
                                <FieldInput
                                    type="text"
                                    name={`descricao-${posicao}-${i}`}
                                    id={`descricao-${posicao}-${i}`}
                                    value={equipamento.descricao}
                                    placeholder="Descrição do Equipamento"
                                    data-index={i}
                                    onChange={changeDescricaoHandler}
                                />
                            </td>
                            <td style={{width:'30px'}}>
                                <TrashButton onClick={removeEquipamento} index={i} title="Remover equipamento">X</TrashButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableEquipamento>
        </ContainerEquipamento>
    );
}


export default EquipamentoField;