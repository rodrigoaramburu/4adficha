/* eslint-disable react/jsx-no-target-blank */
import styled from "styled-components";
import IconGithub from '../../assets/github.svg';


const RodapeContainer = styled.footer`
    background: var(--text-primary);
    color: #FFF;
    padding-bottom:20px;

    display: flex;
    justify-content: center;

    .wrap{
        width: 900px;
        padding: 10px;
    }

    a{
        color: #FFF;
    }
    a:hover{
        color: #CCC;
    }

    h3{
        margin-top:20px;
    }

    ul{
        padding-left: 20px;
    }
    ul li{
        list-style-type: circle;
    }

    .container-links{
        display: flex;
        align-items: baseline;
        padding-top:20px;
    }

    .container-links div{
        margin-right: 30px;
    }

    .github {
        margin-left: auto
    }
    .github img{
        vertical-align: middle;
        margin-right: 10px;
        filter: invert();
    }

    @media(max-width: 640px){
        width: 100%;
    }
`;

function Rodape() {

    return (
        <RodapeContainer>
            <div className="wrap">
                <a href="https://retropunk.com.br/loja/91-four-against-darkness" target="_blank"> Four Agaist Darkness - Versão Brasileira</a>
                <div className="container-links">
                    <div className="links">
                        <h4>Mapas</h4>
                        <ul>
                            <li><a href="https://probabletrain.itch.io/dungeon-scrawl" target="_blank">Dungeon Scrawl</a></li>
                        </ul>
                    </div>
                    
                    <div className="github">
                        <a href="https://github.com/rodrigoaramburu/4adficha" target="_blank">
                            <img src={IconGithub} width="24" height="24" alt="Icone do Github" />
                            Github do Projeto
                        </a>
                    </div>
                </div>
            </div>
        </RodapeContainer>
    );
}


export default Rodape;