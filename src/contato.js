import React from 'react'
import Nav from './nav.js'
class Contato extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        texto: this.props.texto,
      }
    }
    render(){
     
      return(
        <div>
            <Nav texto="Contato"/>
            contato
        </div>
  
      )
    }
    }
  
  export default Contato