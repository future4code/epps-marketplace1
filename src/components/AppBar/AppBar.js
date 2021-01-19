import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBarWrapper, StyledAppBar, StyledToolBar, StyledTypography} from './styled';
import Button from '@material-ui/core/Button';
import logo from '../../imagens/trabalho-logo.png';
import { Logo } from './styled';


export default function ButtonAppBar() {

  return (
    <div>
      <StyledAppBar>
        <AppBarWrapper>
          <Logo src={logo} />
          <StyledTypography variant="h6">
            News
          </StyledTypography>
          <Button color="inherit">Login</Button>
        </AppBarWrapper>
      </StyledAppBar>
    </div>
  );
}