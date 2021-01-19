import React from "react";
// import AppBar from './components/AppBar/AppBar' //header
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/core";
import SideMenu from './components/SideMenu/SideMenu'

export default function App() {

  return (
    <div>
      <CssBaseline/>
        {/* <AppBar /> */} //header
        <SideMenu />
    </div>
  );
}
