import React, { useEffect, useContext} from 'react'
import { scroller } from "react-scroll";
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import ilustracion from '../assets/ilustracion.png'
import Flecha from '../assets/Flecha.png'
import FB from '../assets/facebook-blanco.png'
import IG from '../assets/insta-blanco.png'
import Twitter from '../assets/twitter-blanco.png'
import Whatsapp from '../assets/whatsapp-blanco.png'
import emailjs from 'emailjs-com'
import Separador from '../assets/Recurso 26.png'
import solicitaPruebaLanding from '../assets/solicitaPruebaLanding.png'
import Cross from '../assets/Cerrar menú.png'
import Menu from '../assets/Menú.png'
import diaDelPadre from '../assets/diadelpadre1.png'
import pideInfo from '../assets/pide-info.png'

const ProcorDiaDelPadre = () => {
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ms36otd', 'template_wav4qpj', e.target, 'user_29SCJ5tSmyhfUETa03XNu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }
    
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
          function myNav() {
            var x = document.getElementById("myTopnav");
            if (x.className === "navbar") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
        
      
          function scrollToSection() {
            scroller.scrollTo("formulario", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
          };
          
        return(
        <div id="home-personas" className="diadelpadre">
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
   <a onClick={handleClick}><Link className="Nav__link" to="/">Ir a inicio</Link></a>

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
            <section  className="home" id="HomePersonas">
                <div id="home__landing">
                      <div className="texto_home">
                    <p id="SemiBold">DÍA DEL PADRE</p>
                    <p>No me conformo con<br></br>
                         decirte que te quiero
                    </p>
                    <div className="boton--producto ">
                <a  className="hero_link_home"><Link  className="solicita_prueba" onClick={scrollToSection} ><img src={solicitaPruebaLanding} /></Link></a>
                </div>
                </div>
                <div className="ilustracion">
                <img  src={diaDelPadre} />
                </div>
                </div>
              
                
            </section>
            <section id="personas">
                <p id="SemiBold">ProcorLab<br></br>Día del padre</p>
                <p>
                  La mejor prevención es una detección temprana. No renuncies a decirle que le quieres.<br></br>
                  Respeta las normas sanitarias y evita contagios innecesarios en un día tan especial.<br></br>
                  En <span id="Bold">ProcorLab</span> podemos ayudarte.
</p>
<div id="indo_diapadre">
<Link  to="procor-personas" ><img  src={pideInfo} /></Link>
  </div>

            </section>
            <section id="contacta-con-nosotros">
                <p id="SemiBold">Contacta con nosotros</p>   
                <div id="num"><a href="tel:+34917 364 241">(+34) 917 364 241</a></div> 

            <div className="logos_navbar">      
    <a href="#about"><img src={Whatsapp}/></a>
    <a href="https://www.facebook.com/Procorlab-100801542046256/"><img src={FB}/></a>
    <a href="https://instagram.com/procorlab?igshid=15t963ppv1gvc"><img src={IG}/></a>
    <a href="https://twitter.com/Procorlab"><img src={Twitter}/></a>
  </div>
            </section>   
            <div id="contacto">
            <div className="formulario"></div>


    <div className="contact__text">
        <p> MÁNDANOS UN CORREO</p>
    </div>
    <section className="contact__form">
    <form id="contact-form"  onSubmit={sendEmail}>
<div className="form-group">
<input type="text" className="form-control" placeholder="NOMBRE" name="name"/>
</div>
<div className="form-group">
<input type="email" className="form-control" aria-describedby="emailHelp" name="mail" placeholder="CORREO" />
</div>
<div className="form-group">
<textarea className="form-control" rows="5" placeholder="CONSULTA" name="message"></textarea>
</div>

<div className=" botones botones--contacto">
<p><input type="checkbox" name="terms" required/> Acepto <u>la política de privacidad</u></p>

<p id="pequeño">
De acuerdo con la legislación vigente sobre Protección de Datos de Carácter Personal,
le informamos que los datos que nos facilite se incluirán en el sistema de tratamiento de Corporación Auditiva InnoAudio, CIF: B88505953, 
Avenida de la Industria, 4, Edificio 1, Portal 2, Planta 3º, 28108 Alcobendas, Madrid. Tlf: 917 36 42 41, 
Correo electrónico: info@procorlab.es, con el propósito de dar respuesta a su solicitud.
Los datos que usted proporcione los guardaremos mientras se mantenga la relación comercial o durante los años necesarios 
para cumplir con obligaciones legales. Corporación Auditiva InnoAudio le informa que tratará los datos de forma lícita, transparente y actualizada.
 Es por ello que Corporación Auditiva InnoAudio se compromete a adoptar las medidas razonables para que los datos se supriman o rectifiquen sin demora
 cuando sea necesario. Los datos no se cederán bajo ninguna circunstancia a terceros, excepto los casos donde exista una obligación
  legal. Puede ejercer sus derechos de acceso, rectificación, limitación, supresión, portabilidad y oposición al tratamiento de sus 
  datos personales dirigiéndose por escrito a info@procorlab.es. Puede consultar la información adicional y detallada sobre nuestra 
  política de privacidad en www.procorlab.es. Le informamos que puede revocar su consentimiento en cualquier momento enviando un 
  correo electrónico a la dirección de correo electrónico: info@procorlab.es. Para cualquier reclamación puede dirigirse a 
  www.aepd.es
</p>
     
    <button type="submit" className="hero_link">CONTACTAR</button>
    </div>
</form>

    </section>


        <div  className="page__details">
        <div  className="page_info">
            <div  className="about__title">
            <p id="SemiBold">Nuestros clientes</p>            

            </div>
<section>
<div  className="stadistics">
<div  className="block">
<p id="SemiBold">+20</p>
<p>Años en el sector</p>
</div>
<img  className="separator" src={Separador} />
<div  className="block">
<p id="SemiBold">+1M</p>
<p>Pruebas realizadas</p>
</div>
<img  className="separator" src={Separador} />

<div  className="block">
<p id="SemiBold">+1.000</p>
<p>Empresas atendidas</p>
</div>
<img  className="separator" src={Separador} />
<div  className="block">
<p id="SemiBold">+3.500</p>
<p>Productos donados</p>
</div>
</div>
</section>
</div>
</div>
            <section className="map donde_estamos">
                <p id="SemiBold">¿Dónde estamos?</p>
                </section>
            <section className="map">
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12129.000102770855!2d-3.6422426!3d40.536065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876f6b02077b36a2!2sPROCOR!5e0!3m2!1ses!2ses!4v1613071657411!5m2!1ses!2ses"></iframe>
            </section>
            <section className="contacto-text">
            <div className="office__contacto">
                <p id="SemiBold"> TELÉFONO DE CONTACTO</p>
                <p><a href="tel:+34917 364 241">(+34) 917 364 241</a></p>
                <p id="SemiBold">HORARIO</p>
                <p>09:00h a 14:30h - 16:00h a 19:30h</p>
            </div>
            <div className="office__place">
                <p id="SemiBold">NUESTRA CLÍNICA</p>
                <div id="close">
                    <p>Dirección: Avda de la industria, 4.</p>
                <p>Edificio 1, Portal 2, Planta Baja</p>
                <p>28108 - Alcobendas</p>
                </div>
                
                <p>MADRID</p>
                </div>
            </section>  

        </div>
               
        
      </div>
        )
    
}

export default ProcorDiaDelPadre
