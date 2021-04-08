import { withRouter } from "react-router-dom"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class footer2 extends Component{
    changeTitle = () => {
        switch(window.location.pathname){
          case '/procor-empresas':
            return 'footerEmpresas';
          case '/procor-personas':
            return 'footerPersonas';
          default:
            return 'footerHome';
        }
        
      }
   render(){
    return(<div>{this.props.changeTitle}</div>)
    
   }
}

export default withRouter(footer2)