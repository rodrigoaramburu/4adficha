import styled from "styled-components";
import { ButtonAdicionar, FieldInput, TrashButton } from "../FieldStyle";

import HabilidadeIcon from '../../assets/skill.svg';
import { usePersonagemState } from "../../hooks/usePersonagemState";


const ContainerTituloHabilidade = styled.div`
    sdisplay:flex;
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
        background-image: url(${HabilidadeIcon});
        background-size: 100%;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
    }
`;

const TableHabilidades = styled.table`
    width:100%;

    & input{
        font-size:.9em;
        padding:5px;
    }

    & th{
        font-weight:normal;
        font-size:.9em;
    }

`;


function HabilidadesField({ posicao }) {

    const personagensState = usePersonagemState();

    function changeDescricaoHander(event){
        let index = event.target.getAttribute('data-index');
        let habilidades = personagensState.getPersonagem(posicao).habilidades;
        habilidades[index].descricao = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'habilidades', Object.assign([], habilidades));
    }

    function addHabilidade() {
        let habilidades = personagensState.getPersonagem(posicao).habilidades;
        habilidades.push({
            nome: '',
            utilizadas: 0,
            memorizadas: 0,
            obs: ''
        });

        personagensState.setPersonagemProperty(posicao, 'habilidades', Object.assign([], habilidades));
    }


    function removeHabilidade(event){

        if (!window.confirm('Você realmente deseja remover a Habilidade')) {
            return;
        }
        
        let index = event.target.getAttribute('data-index');
        let habilidades = personagensState.getPersonagem(posicao).habilidades;
        habilidades.splice(index, 1);

        personagensState.setPersonagemProperty(posicao, 'Habilidades', Object.assign([], habilidades));
    }

    return (
        <div>

            <ContainerTituloHabilidade>
                <label>Habilidades</label>
                <ButtonAdicionar onClick={addHabilidade} title="Adicionar Habilidade">+</ButtonAdicionar>
            </ContainerTituloHabilidade>


            <TableHabilidades>
                <tbody>
                    {personagensState.getPersonagem(posicao).habilidades.map((habilidade, i) => (
                        <tr key={i}>

                            <td>
                                <FieldInput
                                    type="text"
                                    name={`habilidade-descricao-${posicao}-${i}`}
                                    id={`habilidade-descricao-${posicao}-${i}`}
                                    data-index={i}
                                    value={habilidade.descricao}
                                    onChange={changeDescricaoHander}
                                    placeholder="Descrição da Habilidade"
                                />
                            </td>
                            <td style={{width:'30px'}}>
                                <TrashButton onClick={removeHabilidade} title="Remover Habilidade">X</TrashButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableHabilidades>

        </div>
    );
}

export default HabilidadesField;