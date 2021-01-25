import React from 'react';
import {AppBarWrapper, StyledAppBar} from './styled';
import Button from '@material-ui/core/Button';
import logo from '../../imagens/logo-reduzido.png';
import { Logo } from './styled';


class AppBar extends React.Component {

  aleatoria=()=>{
        console.log('oi')
  }

  render() {
    return(
    <div>
      <StyledAppBar>
        <AppBarWrapper>
          <Logo src={logo} />
          <Button color="inherit" onClick={this.props.onClickHome}>Home</Button>
          <Button color="inherit" onClick={this.props.onClickfornecedor}>Fornecedor</Button>
          <Button color="inherit" onClick={this.props.onClickConsumidor}>Consumidor</Button>
        </AppBarWrapper>
      </StyledAppBar>
    </div>
    )}
}

export default AppBar;