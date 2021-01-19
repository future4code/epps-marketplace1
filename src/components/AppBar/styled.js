import { AppBar, Toolbar } from '@material-ui/core';
import Typography  from '@material-ui/core/Typography';
import styled from 'styled-components';
import StyledDrawer from '@material-ui/core';

export const Logo = styled.img`
  width: 100px;
  margin-rigth: 30px;
`

export const StyledTypography = styled(Typography)`
//  flex-grow: 1; //para funcionar o flex no componente envolvendo a logo, título e botão de login foi preciso tirar esse flex-grow, pois ele estava ocupando todo o espaço restante disponível do componente pai, não deixando espaço para os demais se moverem.
`

export const AppBarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

`

export const StyledAppBar = styled(AppBar)`
    z-index: 1201
`



