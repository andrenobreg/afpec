import React from 'react'
import Nav from './nav.js'
class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        texto: this.props.texto,
      }
    }
    render(){
     
      return(
        <div>
            <Nav texto="Página Inicial"/>
            <div style={{color:"black", marginTop:"calc(50vh - 80px)", fontWeight:"bold", fontSize:"20px"}}>
                Aplicação experimental.
            </div>
        </div>
  
      )
    }
    }
  
  export default Home