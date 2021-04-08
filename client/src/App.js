import React, { Component } from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import ShopProvider from './context/shopContext';
import ProductPage from './pages/ProductPage';
import Serologico from './pages/serologico';
import SerologicoTest from './pages/serologico-buy';
import SerologicoTest3 from './pages/serologico-buy-3';
import SerologicoTest5 from './pages/serologico-buy-5';
import SalivaTest from './pages/saliva-buy';
import SalivaTest3 from './pages/saliva-buy-3';
import SalivaTest5 from './pages/saliva-buy-5';
import PcrTest from './pages/pcr-buy';
import PcrTest3 from './pages/pcr-buy3';
import PcrTest5 from './pages/pcr-buy5';
import AntigenosTest from './pages/antigenos-buy';
import Saliva from './pages/saliva';
import Antigenos from './pages/antigenos';
import HomePage from './pages/HomePage';
import Calendario from './pages/calendario';
import Contacto from './pages/contacto';
import SobreNosotros from './pages/sobre_nosotros';
import Tienda from './pages/tienda';
import Carrito from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ScrollToTop from './components/withRouter';
import Envios from './pages/envios'
import Devoluciones from './pages/devoluciones'
import avisoLegal from './pages/aviso-legal'
import avisoCookies from './pages/aviso-cookies'
import politicaPrivacidad from './pages/politica-privacidad'
import home from './pages/home'
import HomePersona from './pages/home-personas'
import HomeEmpresas from './pages/home-empresas'
import faqs from './pages/faqs'
import blogs from './pages/blog/blogs'
import procor_hoyocero from './pages/blog/hoyocero'
import procor_concepto from './pages/blog/procor-concepto'
import Post from './components/Post'
import BlogDetalles from './pages/blog/Blog-detalles'


import ProcorDiaDelPadre from './pages/procor-diadelpadre'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

let hashHistory = Router.hashHistory;
function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
        <Router history={hashHistory}>
          <ScrollToTop />
          <Navbar />
          <Carrito />
          <Switch>
            <Route exact path="/blogs" component={blogs} />
            <Route path="/faqs" component={faqs} />
            <Route path="/politica-privacidad" component={politicaPrivacidad} />
            <Route path="/aviso-cookies" component={avisoCookies} />
            <Route path="/aviso-legal" component={avisoLegal} />
            <Route path="/devoluciones" component={Devoluciones} />
            <Route path="/envios" component={Envios} />
            <Route path="/test-antigenos" component={AntigenosTest} />
            <Route path="/test-saliva" component={SalivaTest} />
            <Route path="/test-pcr" component={PcrTest} />
            <Route path="/test-pcr-kit-5" component={PcrTest5} />
            <Route path="/test-pcr-kit-3" component={PcrTest3} />
            <Route path="/test-serologico" component={SerologicoTest} />
            <Route path="/test-serologico-kit-3" component={SerologicoTest3} />
            <Route path="/test-serologico-kit-5" component={SerologicoTest5} />
            <Route path="/test-antigenos" component={AntigenosTest} />
            <Route path="/test-saliva" component={SalivaTest} />
            <Route path="/test-saliva-kit-3" component={SalivaTest3} />
            <Route path="/test-saliva-kit-5" component={SalivaTest5} />
            <Route path="/tienda" component={Tienda} />
            <Route path="/saliva" component={Saliva} />
            <Route path="/antigenos" component={Antigenos} />
            <Route path="/serologico" component={Serologico} />
            <Route path="/producto" component={ProductPage} />
            <Route path="/sobre-nosotros" component={SobreNosotros} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/calendario" component={Calendario} />
            <Route path="/procor-nuevo-concepto" component={procor_concepto} />
            <Route path="/procor-hoyo-zero" component={procor_hoyocero} />
            <Route path="/procor-diadelpadre" component={ProcorDiaDelPadre} />
            <Route path="/procor-empresas" component={HomeEmpresas} />
            <Route exact path="/blogs/:id" render={(props) => <BlogDetalles {...props} />} />
            <Route exact path="/Post" component={Post} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/" component={HomePersona} />

          </Switch>
          <Footer />
        </Router>
      </StyletronProvider>
    </ShopProvider>

  );
}

export default App;
