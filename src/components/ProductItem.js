import React, {useState} from 'react';
import Carrusel from "./Carrusel.js"
import CarruselModal from './CarruselModal'

export default function ProductItem({ data }) {
    let { foto1, foto2, foto3, name, price } = data

    const [mostrar3, setMostrar3] = useState(false);
    const cambiarMostrar3 = () => setMostrar3(prev => !prev);

    return (
        <div className="producto" >
            <div >
                <div className="contenido-img">
                    {/* <img className="img" src={foto} alt="producto" /> */}
                    <Carrusel className="img" foto1={foto1} foto2={foto2} foto3={foto3}/>
                </div>
                <div className="text">
                    <h3 className="productoNombre" onClick={cambiarMostrar3}>{name}</h3>
                    <h4 className="productoPrecio" onClick={cambiarMostrar3}>${price}.000</h4>
                </div>
            </div>
            <CarruselModal mostrar3={mostrar3} cambiarMostrar3={cambiarMostrar3} foto1={foto1} foto2={foto2} foto3={foto3}/>
        </div>
    );
}