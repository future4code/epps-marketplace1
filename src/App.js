import React from "react";
import AppBar from './components/AppBar/AppBar' //header
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home'


class App extends React.Component{
	render(){
		return(
			<div>
				<CssBaseline/> 
				<AppBar/>
				<Home/>
			</div>
			
		)
	}
}

export default App