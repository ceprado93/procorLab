import React, { useEffect, useContext, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import ilustracion from '../../assets/ilustracion.png'
import Flecha from '../../assets/Flecha.png'
import FB from '../../assets/facebook-blanco.png'
import IG from '../../assets/insta-blanco.png'
import Twitter from '../../assets/twitter-blanco.png'
import Whatsapp from '../../assets/whatsapp-blanco.png'
import blog from '../../assets/blog.png'
import hoyocero from '../../assets/hoyocero.jpg'

import Cross from '../../assets/Cerrar menú.png'
import Menu from '../../assets/Menú.png'
import NewsService from '../../services/news.service'

const Blogs = () => {

  const newsService = new NewsService()
  const [news, setNews] = useState(undefined)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    loadNews()
  }, [])

  function loadNews() {
    newsService
      .getNews()
      .then(response => setNews(response.data))
      .catch(err => console.log(err))
  }

  function close() {
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
              <a href="#about"><img src={Whatsapp} /></a>
              <a href="https://www.facebook.com/Procorlab-100801542046256/"><img src={FB} /></a>
              <a href="https://instagram.com/procorlab?igshid=15t963ppv1gvc"><img src={IG} /></a>
              <a href="https://twitter.com/Procorlab"><img src={Twitter} /></a>
            </div>
          </div>

          <a id="icon" className="icon" onClick={handleClick}>
            <img id="ham" className="hamburger" src={Menu} />
            <img id="cross" className="cross" src={Cross} />

          </a>
        </div>
      </div>
      <div id="politicas">
        <div className="columnaNoticias">
          {news?.map((elm, idx) =>
            <section key={elm.Id}>
              <Link to="/procor-nuevo-concepto" style={{ textDecoration: 'none' }}>
                <div className="noticias">
                  <div className="imgBlog"><img src={elm.image} /></div>
                  <div className="textoBlog">
                    <p id="SemiBold">{elm.title}</p>
                    <p className="textoBlog__texto">{elm.description}</p>
                    <div className="noticias__tags">{elm.tags.map(elm => <div>{elm}</div>)}</div>
                  </div>
                </div>
                {idx < (news.length - 1) && <hr></hr>}
              </Link>
            </section>
          )}

        </div>
        <div className="sideMenu">
          <h2>Tags</h2>
          <ul>
            <li>pruebas</li>
            <li>test</li>
            <li>personas</li>
            <li>empresas</li>
            <li>covid-19</li>
            <li>noticias</li>
            <li>clientes</li>
            <li>eventos</li>
            <li>espacios</li>
          </ul>
        </div>
        {/* <section>
          <Link to="/procor-hoyo-zero" style={{ textDecoration: 'none' }}>

            <div className="noticias" id="golfblog">
              <div className="imgBlog"><img src={hoyocero} /></div>
              <div className="textoBlog">
              ProcorLab es una empresa que nace con el objetivo de cubrir toda una serie de necesidades
                    que surgen tras la aparición del COVID 19. Su estrategia se fundamenta en la escucha activa, adelantándose
                    a la incertidumbre que la pandemia ha generado en todos los ámbitos sociales y centrándose en lo que de verdad importa,
                    las personas...
                <p id="SemiBold">NP – Real Federación Española de Golf</p>
                <p> A día de hoy, desde ProcorLab, hemos alcanzado acuerdos de colaboración con más de 150 empresas
                  lo que se ha traducido en el diseño de más de 200 espacios libres de Covid... </p>

              </div>
            </div>
          </Link>
        </section> */}
      </div>
    </div>
  )
}

export default Blogs
