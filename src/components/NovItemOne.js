
import React from 'react';

export default function NovItemOne({ data }) {
    let { foto, name, price } = data

    return (
        <div className="producto1">
            <div className="contenido-img">
                <img className="img" src={foto} alt="producto" />
            </div>
            <div className="text">
                <h3 className="productoNombre">{name}</h3>
                <h4 className="productoPrecio">${price}.000</h4>
            </div>
        </div>
    );
}