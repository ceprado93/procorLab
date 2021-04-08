import React, { useEffect, useContext } from 'react'
import Flecha from '../assets/Flecha.png'
import Avion from '../assets/avion.png'
import Casa from '../assets/casa.png'
import Reloj from '../assets/reloj.png'
import Dias from '../assets/dias.png'
import PCR from '../assets/pcr-saliva.JPG'
import Escudo from '../assets/escudo.png'
import { useParams}  from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
const Serologico = () => {
    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=")
        return () => {

        };
    }, [ fetchProductWithId, id ])
    
    function click(event){
        addItemToCheckout(product.variants[0].id, 5); 
        openCart();
    }
    return (
        <div id="product__page" className="serologico__page-product">
            <section className="product__title">
            <p className="hero_heading">Serológico</p>
            <p className="hero_copy">Anticuerpos hasta 6 meses</p>
            </section>
            <section className="image-section">
                <div className="image__product">
                    
                     </div>               
                <p>39,95€/ud.</p>
            </section>
            <section className="product__caracteristics">
                <p>CARACTERÍSTICAS DE PRODUCTO</p>
                <p>Pack de 25 unidades.</p>
                <img className="flecha__producto" src={Flecha} />
                <p id="fiabilidad">98,4% de fiabilidad <br></br> entre los días</p>
                <p id="SemiBold" className="dias_semi">12d - 6m</p>
            </section>
            <section className="product__times">
                <div className="phw">
                <img src={Escudo} />
                <p>Detecta el grado de inmunidad<br></br>
                (más rojo = más anticuerpos)
                </p>
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
            <div className=" boton--producto">                
            <button onClick={click} className="hero_link">COMPRAR AHORA</button>
            </div>
        </div>
    )
}

export default Serologico
