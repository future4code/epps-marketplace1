import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';


const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 240px;
    background-color: #FFFCED;
  }
`

export default function PermanentDrawerLeft() {

  return (
    <div>
      <StyledDrawer
        variant="permanent"
        anchor="left"
      >
        <Toolbar/>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary={'Sobre nós'} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary={'Contato'} />
            </ListItem>
            <Divider />
        </List>

      </StyledDrawer>
    </div>
  );
}