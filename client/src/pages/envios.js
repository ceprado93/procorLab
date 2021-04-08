import React, {Component} from 'react'
class envios extends Component {
    constructor(props){
        super();
        this.state={
            data:'',
        }
    }

    render(){
    return (
        <div id="politicas">
            <section>
            <p id="SemiBold">Envio Express</p>
<p>Gracias a una gran compañía como Correos Express, se garantiza la entrega en un plazo máximo de 48h, siempre que las circunstancias lo permitan.
</p>
<p>Llámanos para más información al
(+34) 917 36 42 41</p>



<p id="SemiBold">Gastos de Envío a PENÍNSULA</p>
<p>Los gasto de envío variarán dependiendo del volumen de cada producto. Al final de la compra podrá comprobar los gastos que conlleva cada envio, variando desde los 2,95 para un sobre, 4,95€ para un paquete de hasta 5kg y hasta un máximo de 10,00€ por pesos superiores. Impuestos no incluidos
</p>
<p>Sobre
2,95€ + iva</p>

<p>Bulto hasta 5kg
4,95€ + iva</p>

<p>Bulto desde 5kg
10,00€ + iva</p>

<p id="SemiBold">Otros envios a NO PENÍNSULA</p>
<p>Los gastos de envío a Islas Canarias, Baleares, Ceuta y Melilla son de 10€.</p>

<p>Para cualquier consulta relacionaza para envios a otras comunidades o provincias fuera de la peninsula u otros paises, rogamos se ponga en contacto en el télefono (+34)  917 36 42 41 o en el correo pedidos@procorlab.es
</p>
            </section>

        </div>
    )
}
}
export default envios
