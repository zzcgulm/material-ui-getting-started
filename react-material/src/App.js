import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './navbar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy component="h1" variant="title"
              color="inherit"
            >
              My header             
           </TypoGraphy>
           <NavBar>
           </NavBar>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
export default App;
