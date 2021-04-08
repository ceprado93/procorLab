import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import ilustracion from '../../assets/ilustracion.png'
import Flecha from '../../assets/Flecha.png'
import FB from '../../assets/facebook-blanco.png'
import IG from '../../assets/insta-blanco.png'
import Twitter from '../../assets/twitter-blanco.png'
import Whatsapp from '../../assets/whatsapp-blanco.png'
import hoyocero from '../../assets/hoyocero.jpg'

import Cross from '../../assets/Cerrar menú.png'
import Menu from '../../assets/Menú.png'
const procor_hoyocero = () => {

    function close(){
        var x = document.getElementById("myLinks"); 
        var y = document.getElementById("topnav");
            y.classList.remove("open");
            var ham = document.getElementById("ham");
            var cross = document.getElementById("cross");
            var carrito = document.getElementById("icon");
            var carro = document.getElementById("carrito");
            var logo1 = document.getElementById("logo__nav1");
            var logo2 = document.getElementById("logo__nav2");
            if (x.style.display === "block") {
              logo1.style.display = "block";
              logo2.style.display = "none";
              x.style.display = "none";
              cross.style.display = "none";
        ham.style.display = "block";
        carrito.style.display = "block";
        carrito.classList.remove("open");
        carro.style.display = "block";
            } 
      }
        function handleClick(e) {
            e.preventDefault();
        
            var x = document.getElementById("myLinks");     
            var y = document.getElementById("topnav");
            y.classList.toggle("open");
            var menuOpen = document.getElementById("topnav");
            var logo1 = document.getElementById("logo__nav1");
            var logo2 = document.getElementById("logo__nav2");
            var ham = document.getElementById("ham");
            var cross = document.getElementById("cross");
            var carrito = document.getElementById("icon");
            var carro = document.getElementById("carrito");
    
    /*Hide logo and display the other*/
   
    /*Hide and show menu*/
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
          }

   
    return (
        <div id="blogs">
        <div className="topnav" id="topnav">
        <div className="menu" >
        <a ><Link className="active logo__procor" to="/">
        <img id="logo__nav1" className="logo__green" src={Logo} />
        </Link>
</a>
<div id="menu" className="menu-home">
<a ><Link className="Nav__link" to="/home">PRUEBAS</Link></a>
<a ><Link className="Nav__link" to="/blogs">BLOG</Link></a>
<a ><Link className="Nav__link" to="/faqs">FAQS</Link></a>
</div>
<div>
<a id="menu-empresa"><Link className="Nav__link" to="/">IR A INICIO</Link></a>
</div>
<div id="myLinks" className="hamHome">
<a onClick={handleClick}><Link className="Nav__link" to="/home">Pruebas</Link></a>
<a onClick={handleClick}><Link className="Nav__link" to="/blogs">Blogs</Link></a>
<a onClick={handleClick}><Link className="Nav__link" to="/faqs">FAQS</Link></a>
<a id="menu-empresa"><Link className="Nav__link" to="/">Ir a inicio</Link></a>

<div className="logos_navbar">      
<a href="#about"><img src={Whatsapp}/></a>
<a href="https://www.facebook.com/Procorlab-100801542046256/"><img src={FB}/></a>
<a href="https://instagram.com/procorlab?igshid=15t963ppv1gvc"><img src={IG}/></a>
<a href="https://twitter.com/Procorlab"><img src={Twitter}/></a>
</div>
</div>

<a  id="icon" className="icon" onClick={handleClick}>
<img id="ham" className="hamburger" src={Menu} />
<img id="cross" className="cross" src={Cross} />

</a>
</div>
</div>
        <div id="politicas">
               
            <section>
              <div id="fotoblog">
              <img id="hoyozero" src={hoyocero} />
              </div>
            <p id="SemiBold" className="titulo">NP – Real Federación Española de Golf</p>

          </section>
          <section>
              <p id="SemiBold">ProcorLab, empresa especializada en servicios integrales de prevención y diagnóstico de Covid-19, alcanza un acuerdo con la Real Federación Española de Golf, posicionándose como la empresa líder en el diseño de espacios Covid free a través de una detección temprana de la enfermedad.</p>

          </section>
          <section>
          A día de hoy, desde ProcorLab, hemos alcanzado acuerdos de colaboración con más de 150 empresas lo que se ha traducido en el diseño de más de 200 espacios libres de Covid.          </section>
          <section>
          Adicionalmente y tras la firma del acuerdo de colaboración con la Real Federación Española de Golf, ProcorLab estará presente en los más de 70 torneos previstos por la organización.  Su objetivo es conseguir que cada uno de los torneos que se celebren, lo hagan desde la total seguridad de que no existe la posibilidad de contagio entre los asistentes, participantes y deportistas.
          </section>

<section>
En esta línea, Alejandro Pérez Marcos, CMO de ProcorLab señala que «ProcorLab crece y el motivo es, sin duda, el protocolo establecido con una total rigurosidad ofreciendo en todo momento unos estándares de calidad altísimos. Trabajamos con las mejores y más fiables pruebas del mercado, colaboramos con el laboratorio de la Universidad Carlos III de Madrid y no descuidamos ni un solo detalle: vehículos medicalizados, áreas de aislamiento. Lo que sea necesario». 
</section>

<section>
Asimismo, el CMO de la empresa afirma «haber alcanzado este acuerdo supone para nosotros una recompensa y un reconocimiento a todos los esfuerzos realizados durante los últimos meses. Nos sentimos francamente agradecidos a la Real Federación Española de Golf por la confianza depositada en ProcorLab. Nuestro empeño siempre ha sido conseguir volver a la normalidad lo antes posible». 
</section>

<section>
Por otro lado, Gonzaga Escauriaza, presidente de la Real Federación Española de Golf, asegura que «desde el inicio de la pandemia el conjunto del golf español ha tenido muy clara la importancia de demostrar al conjunto de la sociedad que nuestro deporte es seguro y cumple con todos los protocolos establecidos en cada momento. No en vano, gracias al apoyo conjunto de todas las instituciones, fuimos en primer deporte que contó con la aprobación de un protocolo por parte del Ministerio de Sanidad y de CSD, ya que el golf se disputa al aire libre y cumpliendo con las distancias de seguridad».
</section>

<section>
«Ha llegado el momento –continúa Gonzaga Escauriaza– de seguir ahondando en el camino de la seguridad, y de ahí que estemos muy orgullosos del acuerdo suscrito con ProcorLab, que nos garantiza que la celebración de los torneos nacionales son seguros y cumplen con todos los protocolos sanitarios necesarios».
</section>





        </div>
        </div>
    )
}

export default procor_hoyocero
