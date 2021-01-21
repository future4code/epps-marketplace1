import React from "react";
import styled from 'styled-components'
import center from '../imagens/center.png'
import { Center } from '../components/AppBar/styled';
import { Button } from '@material-ui/core';


const Main = styled.div`
	margin-top: 100px;
	justify-content: center;
	margin-top: 60px;
	border: 1px solid black;
	text-align: center;
	background-color: #333D44;
	padding: 50px;
`

class Home extends React.Component{


	render(){
		return(
				<Main>
					<Center src={center}/>
				</Main>
		)
	}
}

export default Home