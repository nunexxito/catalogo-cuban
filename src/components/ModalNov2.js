import React from "react";

export default function ModalNov2({ mostrar, cambiarMostrar, foto }) {

	return (
		<div className={`contenedor-carrusel-modal ${mostrar && "show"}`}>
			<div className="nov-modal-dos">
				<img className='img' src={foto} alt="producto" />
			</div>
				<div className="toggle" onClick={cambiarMostrar}></div>
		</div>
	);
}