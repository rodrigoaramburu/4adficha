import styled from "styled-components";
import { ButtonAdicionar, FieldInput, TrashButton } from "../FieldStyle";

import MagiaIcon from '../../assets/magic.svg';
import { usePersonagemState } from "../../hooks/usePersonagemState";


const MagiaContainer = styled.div`
    margin-bottom:30px;
`;

const ContainerTituloMagia = styled.div`
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
        background-image: url(${MagiaIcon});
        background-size: 100%;
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 10px;
    }
`;

const TableMagias = styled.table`
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


function MagiasField({ posicao }) {

    const personagensState = usePersonagemState();


    function changeNomeHander(event) {
        let index = event.target.getAttribute('data-index');
        let magias = personagensState.getPersonagem(posicao).magias;
        magias[index].nome = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }

    function changeMemorizadasHander(event) {
        let index = event.target.getAttribute('data-index');
        let magias = personagensState.getPersonagem(posicao).magias;
        magias[index].memorizadas = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }

    function changeUtilizadasHander(event) {
        let index = event.target.getAttribute('data-index');
        let magias = personagensState.getPersonagem(posicao).magias;
        magias[index].utilizadas = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }

    function changeObsHander(event) {
        let index = event.target.getAttribute('data-index');
        let magias = personagensState.getPersonagem(posicao).magias;
        magias[index].obs = event.target.value;

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }

    function addMagia() {
        let magias = personagensState.getPersonagem(posicao).magias;
        magias.push({
            nome: '',
            utilizadas: 0,
            memorizadas: 0,
            obs: ''
        });

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }


    function removeMagia(event) {

        if (!window.confirm('Você realmente deseja remover a magia')) {
            return;
        }

        let index = event.target.getAttribute('data-index');
        let magias = personagensState.getPersonagem(posicao).magias;
        magias.splice(index, 1);

        personagensState.setPersonagemProperty(posicao, 'magias', Object.assign([], magias));
    }

    return (
        <MagiaContainer>

            <ContainerTituloMagia>
                <label>Magias</label>
                <ButtonAdicionar onClick={addMagia} title="Adicionar Magia">+</ButtonAdicionar>
            </ContainerTituloMagia>


            <TableMagias>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Memo.</th>
                        <th>Utili.</th>
                        <th>Obs.</th>

                    </tr>
                </thead>
                <tbody>
                    {personagensState.getPersonagem(posicao).magias.map((magia, i) => (
                        <tr key={i}>
                            <td>
                                <FieldInput
                                    type="text"
                                    name={`nome-magia-${posicao}-${i}`}
                                    id={`nome-magia-${posicao}-#${i}`}
                                    value={magia.nome}
                                    data-index={i}
                                    onChange={changeNomeHander}
                                    placeholder="Nome da Magia"
                                />
                            </td>

                            <td style={{ width: '50px' }}>
                                <FieldInput
                                    type="number"
                                    name={`memorizadas-${posicao}-magia-#${i}`}
                                    id={`memorizadas-${posicao}-magia-#${i}`}
                                    min="0"
                                    data-index={i}
                                    value={magia.memorizadas}
                                    onChange={changeMemorizadasHander}
                                />
                            </td>

                            <td style={{ width: '50px' }}>
                                <FieldInput
                                    type="number"
                                    name={`utilizadas-magia-${posicao}-${i}`}
                                    id={`utilizadas-magia-${posicao}-${i}`}
                                    min="0"
                                    data-index={i}
                                    value={magia.utilizadas}
                                    onChange={changeUtilizadasHander}
                                />
                            </td>

                            <td>
                                <FieldInput
                                    type="text"
                                    name={`obs-magia-${posicao}-${i}`}
                                    id={`obs-magia-${posicao}-${i}`}
                                    data-index={i}
                                    value={magia.obs}
                                    onChange={changeObsHander}
                                    placeholder="Observações"
                                />
                            </td>
                            <td style={{ width: '30px' }}>
                                <TrashButton onClick={removeMagia} data-index={i} title="Remover Magia">X</TrashButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableMagias>

        </MagiaContainer>
    );
}

export default MagiasField;