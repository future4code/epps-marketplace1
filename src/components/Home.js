import React from "react";
import styled from 'styled-components'

const Teste = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 200px;
`

class Home extends React.Component{
	render(){
		return(
			<Teste>
				<h1>oi</h1>
			</Teste>
			
		)
	}
}

export default Home