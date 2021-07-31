import React from 'react'
import Nav from './nav.js'
import foto from './img/FOTO20.jpg'
class Contato extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        texto: this.props.texto,
      }
    }
    render(){
     
      return(
        <div style={{backgroundImage: 'url(' + foto + ')', backgroundSize: 'cover', height:"100vh"}}>
            <Nav texto="Contato"/>
            contato
        </div>
  
      )
    }
    }
  
  export default Contato