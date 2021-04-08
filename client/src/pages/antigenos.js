import React, { useEffect, useContext } from 'react'
import Flecha from '../assets/Flecha.png'
import Avion from '../assets/avion.png'
import Casa from '../assets/casa.png'
import Reloj from '../assets/reloj.png'
import Dias from '../assets/dias-antigenos.png'
import PCR from '../assets/pcr-saliva.JPG'
import Rayo from '../assets/rayo.png'

import { useParams}  from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
const Antigenos = () => {
    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=")
        return () => {

        };
    }, [ fetchProductWithId, id ])
    function click(event){
        addItemToCheckout(product.variants[0].id, 1); 
        openCart();
    }
    return (
        <div id="product__page" className="antigenos__page-product">
            <section className="product__title">
            <p className="hero_heading">Antígenos</p>
            <p className="hero_copy">El test más rápido</p>
            </section>
            <section className="image-section">
                <div className="image__product">
                    
                     </div>               
                <p>15€/ud.</p>
            </section>
            <section className="product__caracteristics">
                <p>CARACTERÍSTICAS DE PRODUCTO</p>
                <p>Pack de 25 unidades.</p>
                <img className="flecha__producto" src={Flecha} />
                <p id="fiabilidad">97% de fiabilidad <br></br> entre los dias</p>
                <p id="SemiBold" className="dias_semi">4 - 10</p>
            </section>
            <section className="product__times">
                <div className="phw">
                <img id="rayito"  src={Rayo} />
                <p>Detecta el virus en la fase de incubación</p>
                </div>
                <div className="phw">
                <img src={Casa} />
                <p>Toma de muestra nasofaríngea realizada por personal sanitario</p>
                </div>
                <div className="phw">
                <img  src={Reloj} />
                <p>Resultados en un máximo de 20 minutos</p>
                </div>
            </section>
            <section className="small__text">
                <p>Prueba limitada a uso profesional. 
                </p>
 <p>
 Se recomienda cuando sabemos la fecha del contacto y si 
 presenta algún síntoma. Su sensibilidad es baja en asintomáticos.
 </p>
 <p>
 Detecta proteína Ag, una proteína que hace de puente entre las células de nuestro cuerpo y el virus. Una vez que se ha producido esta fusión, nuestro cuerpo elimina la proteína, por eso su marco de efectividad es tan concreto.
 

 </p>
            </section>
            <div className=" boton--producto">                
            <button onClick={click} className="hero_link">COMPRAR AHORA</button>
            </div>
        </div>
    )
}

export default Antigenos
