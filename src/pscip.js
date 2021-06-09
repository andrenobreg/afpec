import React from 'react'
import Nav from './nav.js'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
class Pscip extends React.Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }
    render(){
      let check = false;
      let cargaincendio = null;
      let risco = null;
      let numextintores = null;
      let areaconst = null;
      let distanciaextintores = null;
      const cnae = [
        { uso: 'Residencial', descricao: 'Alojamentos estudantis', divisao: "A-3", carga: 300 },
        { uso: 'Residencial', descricao: 'Apartamentos', divisao: "A-2", carga: 300 },
        { uso: 'Residencial', descricao: 'Casas térreas ou sobrados', divisao: "A-1", carga: 300 },
        { uso: 'Residencial', descricao: 'Pensionatos', divisao: "A-3", carga: 300 },
        { uso: 'Serviços de Hospedagem', descricao: 'Hotéis', divisao: "B-1", carga: 500 },
        { uso: 'Serviços de Hospedagem', descricao: 'Motéis', divisao: "B-1", carga: 500 },
        { uso: 'Serviços de Hospedagem', descricao: 'Apart-hotéis', divisao: "B-2", carga: 300 },
        { uso: 'Comercial varejista, Loja', descricao: 'Açougue', divisao: "C-1", carga: 40 },
        { uso: 'Comercial varejista, Loja', descricao: 'Antiguidades', divisao: "C-2", carga: 300 },
        { uso: 'Comercial varejista, Loja', descricao: 'Aparelhos domésticos', divisao: "C-1", carga: 300 },
        { uso: 'Comercial varejista, Loja', descricao: 'Armarinhos', divisao: "C-1", carga: 300 },
        { uso: 'Comercial varejista, Loja', descricao: 'Armas', divisao: "C-1", carga: 300 },
      ];
     
    function processadados (){
      numextintores = 0;
      areaconst = document.getElementById("areaconstruida").value;
      if(cargaincendio <= 300){
        risco = "baixo";
      }
      if(cargaincendio > 300 && cargaincendio <= 1200){
        risco = "medio";
      }
      if(cargaincendio > 1200){
        risco = "alto";
      }
      if(areaconst <= 50 && risco == "baixo"){
        numextintores = 1;
      }
    }

    function handleCheck(){
      if(check == false){
        check = true;
      }else{
        if (check == true){
          check = false;
        }
      }
    }

    function handleChange(valor){
      if(valor!=null){
        cargaincendio = valor.carga;
      }
        
    }

      return(
        <div>
            <Nav texto="Projeto de Segurança Contra Incêndio"/>
              <div>
              <List>
              <div style={{paddingLeft:"15px", paddingRight:"15px"}}>
              <Autocomplete
                id="classificacao"
                options={cnae}
                getOptionLabel={(option) => option.descricao + " (" + option.divisao + "): " + option.carga + "MJ/m²" }
                style={{ width: "100%"}}
                renderInput={(params) => <TextField {...params} label="Classificação de atividade" />}
                onChange={(event, value) => handleChange(value)}
              />
              </div>
                <ListItem>
                <TextField id="areaconstruida" label="Área total construída" style={{width:"100%"}}/>
                </ListItem>

                <ListItem>
                <TextField id="area" label="Área total do terreno" style={{width:"100%"}}/>
                </ListItem>

                <ListItem>
                <TextField id="area" label="Número de pavimentos" style={{width:"100%"}}/>
                </ListItem>

                <ListItem>
                <TextField id="area" label="Altura considerada" style={{width:"100%"}}/>
                </ListItem>

                <ListItem>
                <TextField id="area" label="Área total do edifício" style={{width:"100%"}}/>
                </ListItem>

                <ListItem>
                  É atividade de risco?
                <Checkbox
                  color="default"
                  onClick={() => { handleCheck() }}
                />
                </ListItem>

                <ListItem>
                <Button variant="contained" style={{width:"100%"}} onClick={() => { processadados() }}>AVANÇAR</Button>
                </ListItem>
              </List>
                
                
                
                
                
              </div>
        </div>
  
      )
    }
    }
  
  export default Pscip