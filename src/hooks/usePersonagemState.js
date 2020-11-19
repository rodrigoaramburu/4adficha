import { evaluate } from 'mathjs';
import { useContext } from 'react';
import { PersonagemContext } from '../App';




export class PersonagemModel{

    constructor(){
        this.nome = '';
        this.classe = '';
        this.nivel = 1;
        this.portandoLanterna = false;
        this.utilizouAtadura = false;
        this.petrificado = false;
        this.vida = {
            atual: 0,
            total: 0
        };
        this.ataqueModificadores = [{
            habilitado: false,
            modificador:'',
            descricao: ''
        }];
        this.defesaModificadores = [{
            habilitado: false,
            modificador:'',
            descricao: ''
        }];
        this.equipamentos = [{
                equipado: false,
                descricao: ''
        }];
        this.magias = [{
            nome: '',
            obs: '',
            memorizadas: 0,
            utilizadas: 0
        }];
        this.habilidades = [{
            descricao: ''
        }];
    }
}




export function usePersonagemState() {
   
    const [personagensState, setPersonagensState] = useContext(PersonagemContext);
    
    function getPersonagem(posicao){
        return personagensState[posicao];
    }

    function setPersonagemProperty(posicao, property, value){

        personagensState[posicao][property] = value;
        setPersonagensState(
            Object.assign({}, Object.assign({}, personagensState))
        );

        window.localStorage.setItem('personagens', JSON.stringify( personagensState ));
    }

    function getTotalAtaque(posicao){
        let total = 0;
        personagensState[posicao].ataqueModificadores.forEach( atqMod => {
            if( atqMod.habilitado ){
                atqMod.invalido = false;
                if(atqMod.modificador !== '' ){
                    let mod = atqMod.modificador.replace('N',personagensState[posicao].nivel);
                    try{
                        total += Math.floor( evaluate(mod) );
                    }catch{
                        atqMod.invalido = true;
                        console.log('inva');
                    }
                    return;
                }
                
            }
        })
        return total;
    }


    function getTotalDefesa(posicao){
        let total = 0;
        personagensState[posicao].defesaModificadores.forEach( atqMod => {
            if( atqMod.habilitado ){
                atqMod.invalido = false;
                if(atqMod.modificador !== '' ){
                    let mod = atqMod.modificador.replace('N',personagensState[posicao].nivel);
                    try{
                        total += Math.floor( evaluate(mod) );
                    }catch{
                        atqMod.invalido = true;
                        console.log('inva');
                    }
                    return;
                }
                
            }
        })
        return total;
    }


    function novo(){
        setPersonagensState([
            new PersonagemModel(),
            new PersonagemModel(),
            new PersonagemModel(),
            new PersonagemModel(),
          ]);
        
          window.localStorage.removeItem('personagens');
    }

    function changePosition( dir, position){
        position = parseInt(position);
        let changePersonagens = Object.assign([], personagensState);

        if( dir === 'up'){
            if( position === 0) return ;
            let tmp = changePersonagens[position-1];
            changePersonagens[position-1] = changePersonagens[position];
            changePersonagens[position] = tmp;
        }

        if( dir === 'down'){
            if( position === 3) return ;
            
            let tmp = changePersonagens[position+1];
            changePersonagens[position+1] = changePersonagens[position];
            changePersonagens[position] = tmp;
        }
        setPersonagensState(changePersonagens);
    }

    function getData(){
        return personagensState;
    }

    function setData(data){
        setPersonagensState(data);
    }

    return {
        getPersonagem,
        setPersonagemProperty,
        getTotalAtaque,
        getTotalDefesa,
        novo,
        getData,
        setData,
        changePosition
    }
}
