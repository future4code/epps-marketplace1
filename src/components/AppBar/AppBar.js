import React from 'react';
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
          {/* <Button color="inherit">Home</Button> */}
          <Button color="inherit">Cliente</Button>
          <Button color="inherit">Produtos</Button>
        </AppBarWrapper>
      </StyledAppBar>
    </div>
  );
}