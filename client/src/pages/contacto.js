import React from 'react'
import Flecha from '../assets/Flecha.png'
import FB from '../assets/facebook-blanco.png'
import IG from '../assets/insta-blanco.png'
import Twitter from '../assets/twitter-blanco.png'
import Whatsapp from '../assets/whatsapp-blanco.png'
import emailjs from 'emailjs-com'

const contacto = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ms36otd', 'template_wav4qpj', e.target, 'user_29SCJ5tSmyhfUETa03XNu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }
    return (
        <div id="contacto">
            <section className="map">
                <p>Contacto</p>
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12129.000102770855!2d-3.6422426!3d40.536065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876f6b02077b36a2!2sPROCOR!5e0!3m2!1ses!2ses!4v1613071657411!5m2!1ses!2ses"></iframe>
            </section>
            <section className="office__place">
                <p id="SemiBold">NUESTRAS OFICINAS</p>
                <div id="close">
                    <p>Dirección: Avda de la industria, 4.</p>
                <p>Edificio 1, Portal 2, Planta Baja</p>
                <p>28108 - Alcobendas</p>
                </div>
                
                <p>MADRID</p>
            </section>
            <section className="office__contacto">
                <p id="SemiBold"> TELÉFONO DE CONTACTO</p>
                <p>(+34) 917 364 241</p>
                <p id="SemiBold">HORARIO</p>
                <p>09:00h a 14:30h - 16:00h a 19:30h</p>
            </section>
            <section className="map">
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12129.000102770855!2d-3.6422426!3d40.536065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876f6b02077b36a2!2sPROCOR!5e0!3m2!1ses!2ses!4v1613071657411!5m2!1ses!2ses"></iframe>
            </section>
            <section className="office__place">
                <p id="SemiBold">NUESTRA CLÍNICA</p>
                <div id="close">
                    <p>Dirección: Avda de la industria, 4.</p>
                <p>Edificio 1, Portal 2, Planta Baja</p>
                <p>28108 - Alcobendas</p>
                </div>
                
                <p>MADRID</p>
            </section>
            <section className="office__contacto">
                <p id="SemiBold"> TELÉFONO DE CONTACTO</p>
                <p>(+34) 917 364 241</p>
                <p id="SemiBold">HORARIO</p>
                <p>09:00h a 14:30h - 16:00h a 19:30h</p>
            </section>
            <div className="contact__text">
                <p>CONTACTA CON NOSOTROS</p>
             <img  src={Flecha} />
            </div>
            <section className="contact__form">
            <form id="contact-form"  onSubmit={sendEmail}>
    <div className="form-group">
        <input type="text" className="form-control" placeholder="NOMBRE" name="name"/>
    </div>
    <div className="form-group">
        <input type="email" className="form-control" aria-describedby="emailHelp" name="mail" placeholder="CORREO" />
    </div>
    <div className="form-group">
        <textarea className="form-control" rows="5" placeholder="CONSULTA" name="message"></textarea>
    </div>
    <div className=" botones botones--contacto">                
            <button type="submit" className="hero_link">CONTACTAR</button>
            </div>
</form>
            </section>
            <section>
            <div className="logos_navbar">      
    <a href="#about"><img src={Whatsapp}/></a>
    <a href="https://www.facebook.com/Procorlab-100801542046256/"><img src={FB}/></a>
    <a href="https://instagram.com/procorlab_?igshid=15t963ppv1gvc"><img src={IG}/></a>
    <a href="https://twitter.com/Procorlab"><img src={Twitter}/></a>
  </div>
            </section>
        
        </div>
    )
    
}

export default contacto
