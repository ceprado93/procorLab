import React, {Component} from 'react'
import Calendario from '../assets/Recurso 25.png'
import Flecha from '../assets/Flecha.png'
import Tipos from '../assets/tipos.png'
import { Link } from 'react-router-dom'
import Pcr from '../assets/pcr-kit1.png'
import flecha from '../assets/Flecha.png'; 
class calendario extends Component {
    constructor(props){
        super();
        this.state={
            data:'',
        }
    }

    render(){
    return (
        <div id="calendario">
            <section>
                <div className="calendar__image">
                <img src={Calendario} />
                <img className="tipos" src={Tipos} />
                </div>
            </section>

        </div>
    )
}
}
export default calendario
