import React from "react";
import styled from 'styled-components'
import center from '../imagens/center.png'
import { Center } from '../components/AppBar/styled';
import { Button } from '@material-ui/core';

const Main = styled.div`
	display: flex;
	justify-content: center;
	/* margin-top: 200px; */
	border: 1px solid black;
	text-align: center;
	background-color: #333D44;
`

const Caixa = styled.div`
	justify-content: center;
	width: 100%;
	/* border: 1px solid black; */
	text-align: center;
	padding: 10px;
	background-color: #FFFCED;
	
`

class Home extends React.Component{
	render(){
		return(
			<div>
				
				<Main>
					<Center src={center}/>
				</Main>

				<Caixa>
					<img src="https://img.icons8.com/wired/64/000000/change-user-male.png"/>
					<h3>CONSUMIDOR</h3>
					<Button onClick="" variant="contained" color="black">Acessar</Button>
					<br></br>
					<br></br>
					<img src="https://img.icons8.com/wired/64/000000/change-user-male.png"/>
					<h3>FORNECEDOR</h3>
					<Button onClick="" variant="contained" color="black">Acessar</Button>
				</Caixa>
			</div>
			
		)
	}
}

export default Home