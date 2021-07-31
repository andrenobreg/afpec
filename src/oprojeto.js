import React from 'react'
import Nav from './nav.js'
import foto from './img/FOTO20.jpg'
class Oprojeto extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        texto: this.props.texto,
      }
    }
    render(){
     
      return(
        <div style={{backgroundImage: 'url(' + foto + ')', backgroundSize: 'cover', height:"100vh"}}>
            <Nav texto="O projeto"/>
            Texto
        </div>
  
      )
    }
    }
  
  export default Oprojeto