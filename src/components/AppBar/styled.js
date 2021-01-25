import { AppBar, Toolbar } from '@material-ui/core';
import Typography  from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Logo = styled.img`
  width: 50px;
  object-fit: cover;
`

export const Center = styled.img`
  margin: auto;
  width: 500px;
  object-fit: cover;
  margin-bottom: 30px;
`

export const Botao = styled.button`
    background-color: black;
`

export const StyledTypography = styled(Typography)`
//  flex-grow: 1; //para funcionar o flex no componente envolvendo a logo, título e botão de login foi preciso tirar esse flex-grow, pois ele estava ocupando todo o espaço restante disponível do componente pai, não deixando espaço para os demais se moverem.
`

export const AppBarWrapper = styled(Toolbar)`
    display: flex;
    background-color: #FFFCED; //cor do header
    color: black;

`

export const StyledAppBar = styled(AppBar)`
    z-index: 1201;
    background-color: #FFFCED;
    color: black;
`




