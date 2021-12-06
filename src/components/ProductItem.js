import React, {useState} from 'react';
import Carrusel from "./Carrusel.js"
import Modal from './Modal'

export default function ProductItem({ data }) {
    let { foto1, foto2, foto3, name, price } = data
    const [estado1, setEstado1] = useState(false);
    const cambiarEstado1 = () => setEstado1(prev => !prev);

    return (
        <div className="producto" >
            <div >
                <div className="contenido-img">
                    {/* <img className="img" src={foto} alt="producto" /> */}
                    <Carrusel className="img" foto1={foto1} foto2={foto2} foto3={foto3}/>
                </div>
                <div className="text">
                    <h3 className="productoNombre" onClick={cambiarEstado1}>{name}</h3>
                    <h4 className="productoPrecio" onClick={cambiarEstado1}>${price}.000</h4>
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
                    <Carrusel className="img" foto1={foto1} foto2={foto2} foto3={foto3}/>
            </Modal>
        </div>
    );
}