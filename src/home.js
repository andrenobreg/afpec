import React from 'react'
import Nav from './nav.js'
import foto from './img/FOTO20.jpg'
import Grid from '@material-ui/core/Grid'
import {OBJModel} from 'react-3d-viewer'
class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        texto: this.props.texto,
      }
    }
    render(){
     
      return(
        <div style={{backgroundImage: 'url(' + foto + ')', backgroundSize: 'cover', height:"100vh"}}>
            <Nav texto="Acervo Fotogramétrico do Patrimônio Edificado Cearense"/>
            <div style={{paddingLeft:"20px", paddingRight:"20px", marginTop:"10px", paddingBottom:"12px", textDecoration: "none", height: "calc(100vh - 120px)", width:"100%", overflow: "auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
              <div style={{background:"white", maxWidth:"800px", width:"100vw", maxHeight:"600px", minHeight:"600px", height:"100vh", borderRadius:"8px", marginBottom:"20px"}}>
                Antiga igreja do Real Hospício do Ceará, em Aquiraz.
                <div>
                  <OBJModel src="./modelos/rhc/B.obj"/>
                </div>
              </div>
              <div style={{background:"white", maxWidth:"800px", width:"100vw", maxHeight:"600px", minHeight:"600px", height:"100vh", borderRadius:"8px", marginBottom:"20px"}}>
                lala
              </div>
              
            </div>
        </div>
  
      )
    }
    }

    
  
  export default Home