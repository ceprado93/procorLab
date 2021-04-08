import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import landing from '../assets/landing.png'
import procorPersonas from '../assets/procorPersonas.png'
import procorEmpresas from '../assets/procorEmpresas.png'

import { useParams}  from 'react-router-dom'

const Home = () => {
      
    
        return(
        <div id="home">
            <section  className="home" id="home__home">
                <div id="logo_home">
            <img   src={Logo} />
                </div>
                <div id="home__landing">
                      <div className="texto_home bs">
                    <p id="SemiBold">DESCUBRE <br></br> PROCORLAB</p>
                    <p id="ofrecemos">En Procor ofrecemos un servicio integral de prevención y diagnóstico de Covid-19, tanto a personas como a<br></br>
                     empresas que busquen la máxima seguridad frente al virus.                  
                    </p>

              
                <div className="boton--producto ">
                <a  className="hero_link_home"><Link  className="" to={`/procor-personas`}><img src={procorPersonas} /></Link></a>
                <a  className="hero_link_home"><Link  id="procor-empresa-boton"to={`/procor-empresas`}><img src={procorEmpresas} /></Link></a>
                </div>
                </div>
                <div className="texto_home ss">
                    <p id="SemiBold">Descubre ProcorLab</p>
                    <p>En Procor ofrecemos un servicio<br></br> tanto a personas como a
                     empresas <br></br>que busquen la máxima seguridad<br></br> frente al Covid-19.                  
                    </p>
                    <div className="boton--producto ">
                <a  className="hero_link_home"><Link  className="" to={`/procor-personas`}><img src={procorPersonas} /></Link></a>
                <a  className="hero_link_home"><Link  id="procor-empresa-boton"to={`/procor-empresas`}><img src={procorEmpresas} /></Link></a>
                </div>
                </div>
                <div className="ilustracion">
                <img  id="landing_img" src={landing} />
                </div>
                </div>
            </section>
      </div>
        )
    
}

export default Home
