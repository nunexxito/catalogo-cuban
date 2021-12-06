import React, { useState } from 'react';
import Modal from './Modal'

export default function NovItemOne({ data }) {
    let { foto, name, price } = data
    const [estado1, setEstado1] = useState(false);
    const cambiarEstado1 = () => setEstado1(prev => !prev);

    return (
        <div>
            <div className="producto1" onClick={cambiarEstado1}>
                <div className="contenido-img">
                    <img className="img" src={foto} alt="producto" />
                </div>
                <div className="text">
                    <h3 className="productoNombre">{name}</h3>
                    <h4 className="productoPrecio">${price}.000</h4>
                </div>
            </div>
            <Modal
                estado={estado1}
                cambiarEstado={cambiarEstado1}
                mostrarHeader={false}
                mostrarToggle={true}
                posicionVertical={false}
                exit={'#000'}
                borderRadius={'0'}
                padding={'0'}>
                <div className="nov-modal">
                    <img className='img' src={foto} alt="producto" />
                </div>
            </Modal>
        </div>
    );
}