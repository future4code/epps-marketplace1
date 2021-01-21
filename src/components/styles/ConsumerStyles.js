import styled from "styled-components"
import { Button } from '@material-ui/core';

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding: 1rem;
    background-color: #333D44; //div background
`

export const Main = styled.div`
    display: grid;
    grid-template-columns: 25vw 75vw;
    background-color: "333D44"; //div background produtos
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw 1vh;
    margin-top: 10%;
    margin-top: 50px;
    background-color: #FFFCED; //cor do filtro
`

export const Container2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    background-color: "333D44";
`

export const CategoryFilter = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 70vw;
    padding: 1vw 1vh;
    margin-bottom: 10vh;
    border-radius: 20px;
`
