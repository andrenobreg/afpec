import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './home.js'
import Oprojeto from './oprojeto.js'
import Contato from './contato.js'
function Routes(){
    return(
    
           <BrowserRouter>
                  <Switch>
                         <Route exact path="/" component={Home}/>;
                         <Route path="/oprojeto" component={Oprojeto}/>;
                         <Route path="/contato" component={Contato}/>;
                  </Switch>
           </BrowserRouter>

    );
}

export default Routes;