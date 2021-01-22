import React from "react";
import AppBar from './components/AppBar/AppBar' //header
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home'
import Fornecedor from './components/Fornecedor'
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import ConsumerPage from './components/ConsumerPage'

// FFFCED
// cor do background
// chumbo: 333D44
// bacgrkound: FFFCED

const Main = styled.div`
	padding: 50px;
	display: flex;
	justify-content: center;
	background-color: #FFFCED; //cor background dos icones da tela home
`

const Title = styled.div`
	text-align: center;
	font-size: 30px;
	font-family: 'Rajdhani', sans-serif;
	background-color: #FFFCED; //cor do title
	padding: 10px;
`

class App extends React.Component {

	state = {
		pagina: 0,
	}

	onClickfornecedor = () => {
		this.setState({ pagina: 1 })
		console.log('fornecedor')
	}

	onClickConsumidor = () => {
		this.setState({ pagina: 2 })
		console.log('consumidor')
	}

	onClickHome = () => {
		this.setState({ pagina: 0 })
		console.log('pagina home')
	}


	render() {
		console.log(this.state)
		const paginaRenderizada = () =>{
			if (this.state.pagina === 0) {
				return (
					<div>
						<CssBaseline />
						<Home/>
						<Title>OLD IS COOL</Title>
						<Main>
							<img src="https://img.icons8.com/wired/64/000000/change-user-male.png" />
							<Button onClick={this.onClickfornecedor} variant="contained" size="small">Fornecedor</Button>
							<img src="https://img.icons8.com/wired/64/000000/change-user-male.png" />
							<Button onClick={this.onClickConsumidor} variant="contained" size="small">Consumidor</Button>
						</Main>
					</div>
				)
			} else if (this.state.pagina === 1) {
				return (
					<div>
						<Fornecedor/>
					</div>
					
				)
			} else if (this.state.pagina === 2) {
				return (
					<div>
						<ConsumerPage/>
					</div>
					
				)
			}	
		}
		return(
			<div>
				<AppBar onClickHome={this.onClickHome} onClickfornecedor={this.onClickfornecedor} onClickConsumidor={this.onClickConsumidor}/>
				{paginaRenderizada()}
			</div>
		)
		
	}
}

export default App