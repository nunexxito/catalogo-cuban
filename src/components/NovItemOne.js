import React, {useState} from 'react';
import ModalNov1 from './ModalNov1'

export default function NovItemOne({ data }) {
    let { foto, name, price } = data
    const [mostrar, setMostrar] = useState(false);

    const cambiarMostrar = () => setMostrar(prev => !prev);

    return (
        <div>
            <div className="producto1" onClick={cambiarMostrar}>
                <div className="contenido-img">
                    <img className="img" src={foto} alt="producto" />
                </div>
                <div className="text">
                    <h3 className="productoNombre">{name}</h3>
                    <h4 className="productoPrecio">${price}.000</h4>
                </div>
            </div>
            <ModalNov1 foto={foto} mostrar={mostrar} cambiarMostrar={cambiarMostrar}/>
        </div>
    );
}