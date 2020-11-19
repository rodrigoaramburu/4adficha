import styled from "styled-components";



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


    @media(max-width: 640px){
        width: 100%;
    }
`;

function Rodape(){

    return (
        <RodapeContainer>
            <div className="wrap">
                <div className="links">
                    <a href="https://retropunk.com.br/loja/91-four-against-darkness" target="_blank">Versão Brasileira</a>
                    <h3>Mapas</h3>
                    <ul>
                        <li><a href="https://probabletrain.itch.io/dungeon-scrawl" target="_blank">Dungeon Scrawl</a></li>
                    </ul>
                    
                </div>
            </div>
        </RodapeContainer>
    );
}


export default Rodape;