import React from "react";
import AppBar from './components/AppBar/AppBar' //header
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home'
import Fornecedor from './components/Fornecedor'
import ItemList from './components/ItemList/ItemList'
// import Consumidor from './components/Consumidor'
import Cart from './components/Cart'
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
	background-color: #FFFCED;
`

class App extends React.Component {

	state = {
		pagina: 0,
	}

	onClickfornecedor = () => {
		this.setState({ pagina: 1 })
	}

	onClickConsumidor = () => {
		this.setState({ pagina: 2 })
	}

	render() {
		if (this.state.pagina == 0) {
			return (
				<div>
					<CssBaseline />
					<AppBar />
					<Home />
					<Main>
						<br></br>
						<img src="https://img.icons8.com/wired/64/000000/change-user-male.png" />
						<br></br>
						<Button onClick={this.onClickfornecedor} variant="contained" size="small">Fornecedor</Button>
						<br></br>
						<img src="https://img.icons8.com/wired/64/000000/change-user-male.png" />
						<br></br>
						<Button onClick={this.onClickConsumidor} variant="contained" size="small">Consumidor</Button>
					</Main>
				</div>
			)
		} else if (this.state.pagina == 1) {
			return (
				<Fornecedor/>
			)
		} else if (this.state.pagina === 2) {
			return (
				<ConsumerPage/>
			)
		}

	}
}

export default App