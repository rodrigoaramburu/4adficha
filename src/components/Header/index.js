import styled from "styled-components";
import { usePersonagemState } from "../../hooks/usePersonagemState";

const HeaderContainer = styled.header`
    
    background: #333;
    color: #FFF;
    padding: 10px;
    box-shadow: 2px 2px 2px #000;

    display: flex;
    justify-content: center;


    .wrap{
        width: 900px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between

    }

    @media(max-width: 640px){
        width:100%;
    }

`;

const ButtonHeader = styled.button`
    cursor: pointer;
    background: var(--accent);
    padding:5px 10px;;
    color: #FFF;
    margin:3px;
    border-radius: 4px;

    transition: filter 0.5s;
    &:hover{
        filter: opacity(.8)
    }
`;


const HeaderPersonagemButton = styled.button.attrs(
    props => ({
        'data-posicao': props['data-posicao'],
    })
)`
    cursor: pointer;
    background: var(--accent);
    color:#FFF;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;

    .num{
        display:inline-block;
        background: #FFF;
        color: var(--text-primary);
        padding: 5px 10px;
    }
    .nome{
        padding: 5px 10px;
    }
`;

function Header() {

    const personagemState = usePersonagemState();

    function novasFichas() {
        if (!window.confirm('Todos os dados presentes serão perdidos! Deseja uma nova ficha?')) {
            return;
        }
        personagemState.novo();
    }


    function exportToJson() {
        let filename = "export-ficas.json";
        let contentType = "application/json;charset=utf-8;";

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(personagemState.getData())))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            let a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(personagemState.getData()));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    function loadJson() {
        let fileInput = document.createElement('input');
        fileInput.type = "file";
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        fileInput.click();
        fileInput.onchange = () => {
            let reader = new FileReader();
            reader.onload = (event) => {
                let data = JSON.parse(event.target.result);
                personagemState.setData(data);
            };
            reader.readAsText(fileInput.files[0]);

            document.body.removeChild(fileInput);
        }
    }

    function scrollPersonagem(event) {
        let position = event.target.getAttribute('data-posicao');
        console.log(position);
        let top = document.querySelector(`#personagem-${position}`).offsetTop;
        window.scrollTo({ top: top, behavior: 'smooth' });
        console.log(document.querySelector('#personagem-3'));
    }

    return (
        <HeaderContainer>
            <div className="wrap">
                <div>
                    <h1>Ficha <abbr title="Four Agaist Darkness">4AD</abbr>(alpha)</h1>
                    <ButtonHeader onClick={novasFichas} title="Novo conjunto de ficha">Novo</ButtonHeader>
                    <ButtonHeader onClick={exportToJson} title="Exportar fichas para o computador">Salvar</ButtonHeader>
                    <ButtonHeader onClick={loadJson} title="Carregar fichas do computador">Carregar</ButtonHeader>
                </div>

                <div>
                    <HeaderPersonagemButton onClick={scrollPersonagem} data-posicao={0}>
                        <span className="num">1</span>
                        <span className="nome">
                            {personagemState.getPersonagem(0).nome === '' &&
                                'Personagem'
                            }
                            {personagemState.getPersonagem(0).nome}
                        </span>
                    </HeaderPersonagemButton>

                    <HeaderPersonagemButton onClick={scrollPersonagem} data-posicao={1}>
                        <span className="num">2</span>

                        <span className="nome">
                            {personagemState.getPersonagem(1).nome === '' &&
                                'Personagem'
                            }
                            {personagemState.getPersonagem(1).nome}
                        </span>
                    </HeaderPersonagemButton>

                    <HeaderPersonagemButton onClick={scrollPersonagem} data-posicao={2}>
                        <span className="num">3</span>
                        <span className="nome">

                            {personagemState.getPersonagem(2).nome === '' &&
                                'Personagem'
                            }
                            {personagemState.getPersonagem(2).nome}
                        </span>
                    </HeaderPersonagemButton>

                    <HeaderPersonagemButton onClick={scrollPersonagem} data-posicao={3}>
                        <span className="num">4</span>
                        <span className="nome">

                            {personagemState.getPersonagem(3).nome === '' &&
                                'Personagem'
                            }
                            {personagemState.getPersonagem(3).nome}
                        </span>
                    </HeaderPersonagemButton>
                </div>

            </div>

        </HeaderContainer>
    )
}


export default Header;