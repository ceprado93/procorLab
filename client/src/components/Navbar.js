import React, { useContext, useEffect } from 'react'
import Logo from '../assets/Logo.png'
import FB from '../assets/FB.png'
import IG from '../assets/IG.png'
import Twitter from '../assets/Twitter.png'
import Whatsapp from '../assets/Whatsapp.png'
import Menu from '../assets/Menú.png'
import Calendario from '../assets/calendario.png'
import LogoWhite from '../assets/Procor3.png'
import Carrito from '../assets/Carrito.png'
import Cross from '../assets/Cerrar menú.png'

import { Link, withRouter } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'


const Navbar = (props) => {
  const { fetchAllProducts, products, openCart } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {

    };
  }, [fetchAllProducts])
  /*if(location === "/calendario"){
    logo1.style.display = "none";
  calendario.style.display = "block";
  }else if (location === "/tienda"){
    logo1.style.display = "none";
    //tienda.style.display = "block";
  }else{
    logo1.style.display = "block";
    calendario.style.display = "none";
  }*/

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
    if (menuOpen.classList.contains("open")) {

      logo1.style.display = "none";
      logo2.style.display = "block";
      ham.style.display = "none";
      carro.style.display = "none";

      cross.style.display = "block";
      carrito.classList.add("open");

    } else {
      logo2.style.display = "none";
      logo1.style.display = "block";
      cross.style.display = "none";
      ham.style.display = "block";
      carrito.style.display = "block";
      carrito.classList.remove("open");
      carro.style.display = "block";

    }
    /*Hide and show menu*/
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const { location } = props;

  if (location.pathname === "/" || location.pathname === "/procor-empresas" || location.pathname === "/procor-personas" || location.pathname === "/faqs" || location.pathname === "/blogs" || location.pathname === "/procor-diadelpadre" || location.pathname === "/procor-nuevo-concepto" || location.pathname === "/procor-hoyo-zero") {
    return null;
  }
  return (
    <div className="topnav" id="topnav">
      <div className="menu" >
        <a onClick={close}><Link className="activeNav logo__procor" to="/">
          <img id="logo__nav1" className="logo__green" src={Logo} />
          <img id="logo__nav2" className="logo__white" src={LogoWhite} />
        </Link>
        </a>
        <div id="carrito" className="carrito_header">
          <img onClick={() => openCart()} src={Carrito} />
        </div>
        <div id="myLinks">

          <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" onClick={handleClick}><Link className="Nav__link" to="/producto/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=">PCR</Link></a>
          <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" onClick={handleClick}><Link className="Nav__link" to="/serologico/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">Serológico</Link></a>
          <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=" onClick={handleClick}><Link className="Nav__link" to="/antigenos/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=">Antígenos</Link></a>
          <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" onClick={handleClick}><Link className="Nav__link" to="/saliva/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">Saliva</Link></a>
          <a id="oculto" onClick={handleClick}><Link className="Nav__link" to="/blogs">Blogs</Link></a>
          <a onClick={handleClick}><Link className="Nav__link" to="/faqs">FAQS</Link></a>
          <a id="oculto" onClick={handleClick}><Link className="Nav__link" to="/tienda">Tienda</Link></a>
          <a id="oculto" onClick={handleClick}><Link className="Nav__link" to="/sobre-nosotros">Sobre nosotros</Link></a>
          <a id="oculto" onClick={handleClick}><Link className="Nav__link" to="/contacto">Contacto</Link></a>
          <a id="oculto" onClick={handleClick}><Link className="Nav__link" to="/calendario">Calendario</Link></a>

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
  )
}

export default withRouter(Navbar)
