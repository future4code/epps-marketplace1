import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBarWrapper, StyledAppBar} from './styled';
import Button from '@material-ui/core/Button';
import logo from '../../imagens/logo-reduzido.png';
import { Logo } from './styled';


export default function ButtonAppBar() {

  return (
    <div>
      <StyledAppBar>
        <AppBarWrapper>
          <Logo src={logo} />
          <Button color="inherit">Cliente</Button>
          <Button color="inherit">Produtos</Button>
        </AppBarWrapper>
      </StyledAppBar>
    </div>
  );
}