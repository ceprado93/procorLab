
import React, { useEffect, useContext } from 'react'
import Flecha from '../assets/Flecha.png'
import Avion from '../assets/avion.png'
import Casa from '../assets/casa.png'
import Reloj from '../assets/reloj.png'
import Dias from '../assets/dias.png'
import PCR from '../assets/pcr-saliva.JPG'
import Persona from '../assets/persona.png'


import { useParams}  from 'react-router-dom'
import { ShopContext } from '../context/shopContext'


const Saliva = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=")
        return () => {

        };
    }, [ fetchProductWithId, id ])
    
    function click(event){
        addItemToCheckout(product.variants[0].id, 1); 
        openCart();
    }
    return (
        <div id="product__page" className="saliva__page-product">
            <section className="product__title">
            <p className="hero_heading">Saliva</p>
            <p className="hero_copy">El test más cómodo</p>
            </section>
            <section className="image-section">
                <div className="image__product">
                    
                     </div>               
                <p>60€</p>
            </section>
            <section className="product__caracteristics">
                <p>CARACTERÍSTICAS DE PRODUCTO</p>
                <img className="flecha__producto" src={Flecha} />
                <p id="fiabilidad">95% de fiabilidad <br></br> entre los dias</p>
                <p id="SemiBold" className="dias_semi">4 - 27</p>
            </section>
            <section className="product__times">
                <div className="phw">
                <img src={Persona} />
                <p>Capacidad de detectar asintomáticos</p>
                </div>
                <div className="phw" id="domicilio">
                <img src={Casa} />
                <p>Toma de muestra no invasiva</p>
                </div>
                <div className="phw">
                <img src={Reloj} />
                <p>Resultados en un máximo de 20 minutos</p>
                </div>
            </section>
            <section className="small__text">
                <p>
                    Se recomienda enjuagarse la boca con agua diez minutos antes de realizar la prueba y no haber fumado, comido ni bebido nada (salvo agua) <br></br>al menos durante toda la hora anterior.
                    </p>
<p>
A partir del día 14, comienza la respuesta inmunitaria a nivel 
sistema y pasa por completo a la sangre. Por esta razón, no mide la inmunidad,<br></br> pero sí realiza una detección precoz.


                </p>
            </section>
            <div className=" boton--producto">                
            <button onClick={click} className="hero_link">COMPRAR AHORA</button>
            </div>
        </div>
    )
}

export default Saliva
