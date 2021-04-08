import React from 'react'


import { Link,  withRouter } from 'react-router-dom';


const footer = (props) => {
    const { location } = props;

    if (location.pathname==="/"){
      return null;
    }
  
    return (
         <div className="footer">
        <div className="col1">
        <a ><Link className="Nav__link" to="/politica-privacidad"><p>Privacidad</p></Link></a>
        <a ><Link className="Nav__link" to="/aviso-cookies"><p>Cookies</p></Link></a>
        <a ><Link className="Nav__link" to="/aviso-legal"><p>Aviso legal</p></Link></a>
        <a ><Link className="Nav__link" to="/envios"><p>Envíos</p></Link></a>
       </div>
        

        <div className="col2">
        <a ><Link className="Nav__link" to="/blogs"><p>Blogs</p></Link></a>
        <a ><Link className="Nav__link" to="/sobre-nosotros"><p>Sobre nosotros</p></Link></a>
        <a ><Link className="Nav__link" to="/contacto"><p>Contacto</p></Link></a>
        <a ><Link className="Nav__link" to="/calendario"><p>Calendario</p></Link></a>
        </div>
        <div className="col3"> 
        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" ><Link className="Nav__link" to="/producto/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk="><p>PCR</p></Link></a>
        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" ><Link className="Nav__link" to="/serologico/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM="><p>Serológico</p></Link></a>
        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=" ><Link className="Nav__link" to="/antigenos/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU="><p>Antígenos</p></Link></a>
        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" ><Link className="Nav__link" to="/saliva/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc="><p>Saliva</p></Link></a>
        </div>
    </div>
        )
    }
    


export default withRouter(footer)
