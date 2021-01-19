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




class Home extends React.Component{


	render(){
		return(
			<div>
				<Main>
					<Center src={center}/>
				</Main>

			</div>
			
		)
	}
}

export default Home