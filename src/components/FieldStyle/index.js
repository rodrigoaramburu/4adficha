import styled from "styled-components";

import Trash from '../../assets/trash.svg';

export const FieldContainer = styled.div`
    margin: 10px 0;
`;

export const FieldLabel = styled.label`
    display: block;
    margin-bottom:5px;
    color: var(--text-primary);
    font-weight:bold;
`;


export const FieldInput = styled.input.attrs(
    props => ({
        'data-index': props['data-index'] ,
      })
)`
    background: var(--accent-alpha);
    width:100%;
    font-size:1.2em;
    border-bottom: 2px solid var(--accent);
    padding: 10px;
`;

export const ButtonAdicionar = styled.button`
    padding: 5px 10px;
    background: var(--accent);
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
`;


export const TrashButton = styled.button`
    padding: 3px 7px;
    color: #F00;
    background-image: url(${Trash});
    background-color: transparent;
    background-size: 100%;
    display: inline-block;
    width: 18px;
    height: 18px;
    text-indent: -9999px;
    overflow: hidden;
    margin-left:5px;
    cursor: pointer;
`;


export const InputBox = styled.input`
    padding: 3px;
    font-size: 1.3em;
    width: 100px;
    margin: 0 10px;
    background: var(--accent-alpha);
    border: 2px solid var(--accent);
    text-align: center;
    padding-left:10px;
`;