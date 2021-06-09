import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from './temporarydrawer.js'


class Nav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      texto: this.props.texto,
    }
  }
  render(){
   
    return(
      <div>
          <div style={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar variant="dense">
              <TemporaryDrawer/>
            <Typography variant="h6" color="inherit">
              {this.state.texto}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      </div>

    )
  }
  }

export default Nav