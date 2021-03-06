import React from 'react'
import Separador from '../assets/Recurso 26.png'

import FB from '../assets/facebook-blanco.png'
import IG from '../assets/insta-blanco.png'
import Twitter from '../assets/twitter-blanco.png'
import Whatsapp from '../assets/whatsapp-blanco.png'
import Video from '../assets/video-nosotros.mp4'

const SobreNosotros = () => {
    return (
        <div  id="about__us" className="page">
        <div  className="page__details">
        <div  className="page_info">
            <div  className="about__title">
            <p>Sobre nosotros</p>            

            </div>
<div  className="about__video">
<video loop autostart autoPlay src={Video} type="video/mp4" />
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

<section  className="about__us">
<div  className="team">
<p id="SemiBold">Somos un equipo de trabajo especializado</p>
<p>Contamos con más de 20 años de experiencia en el sector sanitario, que ha aunado fuerzas por la imperativa necesidad, tanto social como económica, de retomar la normalidad de la que siempre hemos disfrutado.</p>
</div>
<div  className="mision">
<p id="SemiBold">MISIÓN</p>
<p>GARANTIZAR LA PROTECCIÓN SANITARIA DE LA POBLACIÓN</p>
</div>
<div  className="vision">
<p id="SemiBold">VISIÓN</p>
<p>SER LA EMPRESA LÍDER EN LA GESTIÓN DE LA PANDEMIA</p>
<ul>
<li>Suministro sanitario</li>
<li>Asesoramiento</li>
<li>Portal informativo</li>
</ul>
</div>
<div  className="valores">
<p id="SemiBold">VALORES</p>
<p>NUESTROS VALORES SE BASAN EN LA TRANSPARENCIA Y LA SEGURIDAD DE CARA AL CONSUMIDOR.</p>
</div>
</section>
<div className="logos_navbar">      
    <a href="#about"><img src={Whatsapp}/></a>
    <a href="https://www.facebook.com/Procorlab-100801542046256/"><img src={FB}/></a>
    <a href="https://instagram.com/procorlab_?igshid=15t963ppv1gvc"><img src={IG}/></a>
    <a href="https://twitter.com/Procorlab"><img src={Twitter}/></a>
  </div>
        </div>

    </div>
</div>    
    
    )
}

export default SobreNosotros