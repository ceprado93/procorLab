import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import ilustracion from '../../assets/ilustracion.png'
import Flecha from '../../assets/Flecha.png'
import FB from '../../assets/facebook-blanco.png'
import IG from '../../assets/insta-blanco.png'
import Twitter from '../../assets/twitter-blanco.png'
import Whatsapp from '../../assets/whatsapp-blanco.png'
import blog from '../../assets/blog.png'

import Cross from '../../assets/Cerrar menú.png'
import Menu from '../../assets/Menú.png'
const procor_concepto = () => {

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
              <img src={blog} />
              </div>
            <p id="SemiBold" className="titulo">ProcorLab, un nuevo concepto de servicio sanitario</p>

          </section>
          <section>
          ProcorLab es una empresa que nace con el objetivo de cubrir toda una serie de necesidades que surgen tras la aparición del COVID 19. Su estrategia se fundamenta en la escucha activa, adelantándose a la incertidumbre que la pandemia ha generado en todos los ámbitos sociales y centrándose en lo que de verdad importa, las personas.

          </section>
          <section>
          De esta manera, la empresa se ha convertido en una pionera en el diagnóstico de la enfermedad, ofreciendo una cobertura total al paciente desde el mismo momento en el que tiene sospecha de contagio y hasta que se confirma el resultado. 

          </section>

<section>
A este respecto, <span id="SemiBold">Carlos De Vicente</span>, director de la empresa señala «sabíamos que la atención temprana ante un contacto directo era clave. Seguimos teniendo miedo al virus y lo curioso es que, en muchas ocasiones, este miedo está más relacionado con la posibilidad de contagio a familiares cercanos de riesgo que a padecer en primera persona la enfermedad». 

</section>

<section>
Como consecuencia, la empresa es consciente de la importancia de un diagnóstico temprano realizado por un profesional, lo que se ha traducido en tres pilares básicos de gestión: la fiabilidad de las pruebas, la rapidez en la atención al cliente y la especialización del equipo sanitario en la realización de los diferentes test, ya sean en sangre, saliva o nasofaríngeos.

</section>

<section>
En esta línea, <span id="SemiBold">De Vicente </span>matiza «hablamos de salud. Un tema nada validí. No podemos conformarnos con una venta electrónica de test. Es fundamental ofrecer un servicio de atención personalizado donde profesionales del sector sanitario analicen cada caso en concreto recomendando la prueba que mejor se ajuste a las necesidades del paciente y garantizando la veracidad de los resultados».

</section>

<section>
Adicionalmente, <span id="SemiBold">el Director General de ProcorLab</span> añade «somos un servicio integral de diagnóstico. Nuestro foco de atención está puesto en las personas y en una detección temprana de la enfermedad. Acompañamos a todos aquellos que nos solicitan ayuda desde un primer momento y damos respuesta a todas sus dudas»

</section>

<section>
ProcorLab crece y lo hace con la seguridad de haber iniciado un camino hacia un nuevo concepto sanitario donde la experiencia del paciente cobra una especial relevancia. La empresa apuesta por la investigación como clave para la recuperación, por lo que adquiere un firme compromiso para continuar trabajando en todo aquello que nos preocupa y. que está directamente relacionado con la salud.

</section>

<section>
Para ello ProcorLab no ha dudado en destinar parte de sus recursos a la creación de un <span id="SemiBold">departamento de I+D</span> que cuenta con la colaboración de la <span id="SemiBold">UC3M</span>.   Este departamento se crea con el objetivo de ofrecer <span id="SemiBold">soluciones</span> a diferentes problemas sanitarios que se plantean en el día a día, y que incluyen, entre otros, la optimización de procesos hasta el desarrollo de nuevos medicamentos.

</section>




        </div>
        </div>
    )
}

export default procor_concepto
