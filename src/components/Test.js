import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../mui';

/*
* Reference link:
* 1) http://www.material-ui.com/#/components/app-bar
* 2) Reddit discussion about ReactJS + Material-UI:
*    https://www.reddit.com/r/reactjs/comments/5p1rin/whats_the_best_way_to_use_material_design_with/ 
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