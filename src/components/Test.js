import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../mui';

/*
* Reference link:
* http://www.material-ui.com/#/components/app-bar 
*/

/*
* Was smash.gg built using material-ul?!?!
*/

class Test extends Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={Mui} />
        //To write component
      </MuiThemeProvider>
    )
  }
}


export default Test;