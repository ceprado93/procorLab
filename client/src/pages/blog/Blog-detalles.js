import React, { useEffect, useContext, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import ilustracion from '../../assets/ilustracion.png'
import Flecha from '../../assets/Flecha.png'
import FB from '../../assets/facebook-blanco.png'
import IG from '../../assets/insta-blanco.png'
import Twitter from '../../assets/twitter-blanco.png'
import Whatsapp from '../../assets/whatsapp-blanco.png'
import hoyocero from '../../assets/hoyocero.jpg'
import NewsService from '../../services/news.service'

import Cross from '../../assets/Cerrar menú.png'
import Menu from '../../assets/Menú.png'
const BlogDetalles = props => {

  const newsService = new NewsService()
  const [news, setNews] = useState(undefined)



  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    loadNews()
  }, [])

  function loadNews() {
    newsService
      .getOne(props.match.params.id)
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

  function createMarkup() { return { __html: news?.description }; };

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
      <div id="politicas__detalles">

        <section>
          <div id="fotoblog">
            <img id="hoyozero" src={news?.image} />
          </div>
          <p id="SemiBold" className="titulo"> {news?.title}</p>

        </section>
        <section dangerouslySetInnerHTML={createMarkup()}>
        </section>

      </div>
    </div >
  )
}

export default BlogDetalles
