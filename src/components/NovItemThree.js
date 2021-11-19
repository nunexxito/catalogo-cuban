import React, { useState } from 'react';
import ModalNov2 from './ModalNov2'

export default function NovItemThree({ data }) {
    let { foto, name, price } = data
    const [mostrar, setMostrar] = useState(false);

    const cambiarMostrar = () => setMostrar(prev => !prev);

    return (
        <div style={{display: 'flex'}}>
            <div className="producto2" onClick={cambiarMostrar}>
                <div className="contenido-img">
                    <img className="img" src={foto} alt="producto" />
                </div>
                <div className="text">
                    <h3 className="productoNombre">{name}</h3>
                    <h4 className="productoPrecio">${price}.000</h4>
                </div>
            </div>
            <ModalNov2 foto={foto} mostrar={mostrar} cambiarMostrar={cambiarMostrar} />
        </div>
    );
}