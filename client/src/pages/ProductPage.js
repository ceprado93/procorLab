import React, { useEffect, useContext } from 'react'
import Flecha from '../assets/Flecha.png'
import Avion from '../assets/avion.png'
import Casa from '../assets/casa.png'
import Reloj from '../assets/reloj.png'
import Dias from '../assets/dias.png'
import PCR from '../assets/pcr-saliva.JPG'

import { useParams}  from 'react-router-dom'
import { ShopContext } from '../context/shopContext'


const ProductPage = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product,openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=")
        return () => {

        };
    }, [ fetchProductWithId, id ])

    function click(event){
        addItemToCheckout(product.variants[0].id, 1); 
        openCart();
    }
    return (
        <div id="product__page">
            <section className="product__title">
            <p className="hero_heading">PCR en saliva</p>
            <p className="hero_copy">en tu casa, en 6 horas*</p>
            </section>
            <section className="image-section">
                <div className="image__product">
                    
                     </div>               
                <p><span id="crossed">118</span><span id="crossedd">€</span>99€</p>
            </section>
            <section className="product__caracteristics">
                <p>CARACTERÍSTICAS DE PRODUCTO</p>
                <img className="flecha__producto" src={Flecha} />
                <p id="fiabilidad">99% de fiabilidad <br></br> Resultados en</p>
                <p id="SemiBold" className="dias_semi">6 - 24h</p>
            </section>
            <section className="product__times">
                <div className="phw">
                <img src={Avion} />
                <p>Apta para viajar</p>
                </div>
                <div className="phw" id="domicilio">
                <img src={Casa} />
                <p>Recogida de muestra a domicilio</p>
                </div>
                <div className="phw">
                <img src={Reloj} />
                <p>Resultados en 6 h*</p>
                </div>
            </section>
            <section className="small__text">
                <p>
                Se recomienda enjuagarse la boca con agua diez minutos antes de realizar la prueba y no haber fumado, comido ni bebido nada (salvo agua) <br></br>al menos durante toda la hora anterior.
                </p>
<p>
La prueba se realiza a domicilio y la muestra se manda a 
analizar al laboratorio de la Universidad Carlos III de Madrid.

 </p>
                <p>
                *Servicio exprés en 6h solo disponible para la Comunidad de Madrid. Para el resto del territorio peninsular 24h.
                </p>
            </section>
            <div className=" boton--producto">                
            <button  onClick={click} className="hero_link">COMPRAR AHORA</button>
            </div>
        </div>
    )
}

export default ProductPage
