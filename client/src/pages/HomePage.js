import React, { useEffect, useContext, useLayoutEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'

import flecha from '../assets/Flecha.png';

import { useParams } from 'react-router-dom'
const HomePage = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        };
    }, [fetchProductWithId, id])

    var pageHeight = window.innerHeight;


    useLayoutEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <div id="home" className="scroll-container ">
            <section className="hero hero--pcr-saliva">
                <div className="hero_product">
                    <p className="hero_heading">PCR en saliva</p>
                    <p className="hero_copy">Ya puedes volver a viajar</p>
                    <div className=" botones botones--pcr" style={{ marginBottom: 20 }}>
                        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=" className="hero_link_home"><Link className="hero_buy" to={`/producto/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=`}>MÁS INFORMACIÓN</Link></a>
                    </div>
                    <div className="arrow bounce">
                        <img src={flecha} />
                    </div>
                </div>
            </section>
            <section className="hero hero--serologico">
                <div className="hero_product">
                    <p className="hero_heading">Serológico</p>
                    <p className="hero_copy">El del dedito</p>
                    <div className=" botones botones">
                        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=" className="hero_link_home"><Link className="hero_buy" to="/serologico/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=">MÁS INFORMACIÓN</Link></a>
                    </div>
                </div>
            </section>
            <section className="hero hero--antigenos">
                <div className="hero_product">
                    <p className="hero_heading">Antígenos</p>
                    <p className="hero_copy">El del palito</p>
                    <div className=" botones botones">
                        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=" className="hero_link_home"><Link className="hero_buy" to="/antigenos/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODIyODQyMTU=">MÁS INFORMACIÓN</Link></a>
                    </div>
                </div>
            </section>
            <section className="hero hero--saliva">
                <div className="hero_product">
                    <p className="hero_heading">Saliva</p>
                    <p className="hero_copy">Sin palito, igual de efectivo</p>
                    <div className=" botones botones">
                        <a key="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=" className="hero_link_home"><Link className="hero_buy" to="/saliva/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=">MÁS INFORMACIÓN</Link></a>
                    </div>
                </div>
            </section>
            <section className="hero hero--spotify">
                <div className="hero_product">
                    <p className="hero_heading">¡Positivos positivos! </p>
                    <p className="hero_copy">escucha nuestra playlist para empezar el día con un plus de motivación. </p>
                    <div className=" botones botones">
                        <a href="https://open.spotify.com/playlist/1EaZqmJ9gXsHUO8a6cn6Vk?si=8epqZAGuTFGCbs_hH-GzDA" className="hero_link">ESCUCHAR AHORA</a>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default HomePage
