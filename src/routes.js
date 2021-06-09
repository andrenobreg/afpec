import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './home.js'
import Pscip from './pscip.js'
import Contato from './contato.js'
function Routes(){
    return(
    
           <BrowserRouter>
                  <Switch>
                         <Route exact path="/" component={Home}/>;
                         <Route path="/pscip" component={Pscip}/>;
                         <Route path="/contato" component={Contato}/>;
                  </Switch>
           </BrowserRouter>

    );
}

export default Routes;