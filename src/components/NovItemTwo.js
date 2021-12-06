import React, { useState } from 'react';
import Modal from './Modal'

export default function NovItemThree({ data }) {
    let { foto, name, price } = data
    const [estado1, setEstado1] = useState(false);
    const cambiarEstado1 = () => setEstado1(prev => !prev);

    return (
        <div style={{display: 'flex'}}>
            <div className="producto2" onClick={cambiarEstado1}>
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
                <div className="nov-modal-dos">
                    <img className='img' src={foto} alt="producto" />
                </div>
            </Modal>
        </div>
    );
}
