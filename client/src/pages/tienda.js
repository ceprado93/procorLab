import React from 'react'
import Saliva from '../assets/saliva-escritorio.png'
import Pcr from '../assets/pcr-escritorio.png'
import Serologico3 from '../assets/serologico-kit3.png'
import Serologico5 from '../assets/serologico-kit5.png'
import Serologico1 from '../assets/serologico-kit1.png'
import pcr3 from '../assets/pcr-kit3.png'
import pcr5 from '../assets/pcr-kit5.png'
import pcr1 from '../assets/pcr-kit1.png'
import Saliva3 from '../assets/saliva-kit3.png'
import Saliva5 from '../assets/saliva-kit5.png'
import Saliva1 from '../assets/saliva-kit1.png'
import antigenos from '../assets/antigenos-kit.png'

import Flecha from'../assets/Flecha.png'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'
import Serologico from './serologico'

const tienda = () => {
    return (
        <div id="store">
            
            <section>                 
            <div className="mas__vendidos">
                <p id="SemiBold">LOS MÁS VENDIDOS</p>
                <AliceCarousel>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" className="hero_link"><Link className="hero_link" to="/test-saliva/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">   <img src={Saliva1} className="sliderimg"/></Link></a>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" className="hero_link"><Link className="hero_link" to="/test-serologico/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">   <img src={Serologico1} className="sliderimg"/></Link></a>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" className="hero_link"><Link className="hero_link" to="/test-pcr/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=">   <img src={pcr1} className="sliderimg"/></Link></a>


                </AliceCarousel>
            </div>
            </section>
            <section className="all__products">                               
            <div>
            <p id="SemiBold">VER TODOS LOS PRODUCTOS</p>
            <img id="flecha" src={Flecha} />
            </div>
            </section>
            <section class="pack2">
            <AliceCarousel>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" className="hero_link"><Link className="hero_link" to="/test-saliva/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">   <img src={Saliva1} className="sliderimg"/></Link></a>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" className="hero_link"><Link className="hero_link" to="/test-saliva-kit-3/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">   <img src={Saliva3} className="sliderimg"/></Link></a>
                <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" className="hero_link"><Link className="hero_link" to="/test-saliva-kit-5/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">   <img src={Saliva5} className="sliderimg"/></Link></a>


                </AliceCarousel>
            </section>
            <section>
            <div className="pack2">
            <AliceCarousel className="secondary_recommended">
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" className="hero_link"><Link className="hero_link" to="/test-serologico/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">   <img src={Serologico1} className="sliderimg"/></Link></a>
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" className="hero_link"><Link className="hero_link" to="/test-serologico-kit-3/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">   <img src={Serologico3} className="sliderimg"/></Link></a>
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" className="hero_link"><Link className="hero_link" to="/test-serologico-kit-5/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">   <img src={Serologico5} className="sliderimg"/></Link></a>

</AliceCarousel>
</div>
<div className="pack2">
<AliceCarousel className="secondary_recommended">
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" className="hero_link"><Link className="hero_link" to="/test-pcr/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=">   <img src={pcr1} className="sliderimg"/></Link></a>
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" className="hero_link"><Link className="hero_link" to="/test-pcr-kit-3/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=">   <img src={pcr3} className="sliderimg"/></Link></a>
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" className="hero_link"><Link className="hero_link" to="/test-pcr-kit-5/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=">   <img src={pcr5} className="sliderimg"/></Link></a>

</AliceCarousel>
            </div>
            <div className="pack2">
<div className="secondary_recommended">
            <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=" className="hero_link"><Link className="hero_link" to="/test-antigenos/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=">   <img src={antigenos} className="sliderimg"/></Link></a>

</div>
            </div>
            <div className="pack2">
                <p id="SemiBold" className="descubre"> ¡DESCUBRE MÁS PRODUCTOS PRÓXIMAMENTE! </p>
            </div>
            </section>
        </div>
    )
}

export default tienda
