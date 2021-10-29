import React from 'react';
import ProductItem from "./ProductItem.js"

export default function Catalogo({ctlg}) {

    return (
        <div className="contenedor">
            <div className="catalogo">
                <h2>Catalogo</h2>
                <div className="catalogo-grid">
					{ctlg.map(product => <ProductItem key={product.id} data={product}/>)}
                </div>
            </div>
        </div>
    );
}