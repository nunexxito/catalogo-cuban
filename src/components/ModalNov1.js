import React from "react";

export default function ModalNov1({ mostrar, cambiarMostrar, foto}) {

	return (
		<div className={`contenedor-carrusel-modal ${mostrar && "show"}`}>
			<div className="nov-modal">
				<img className='img' src={foto} alt="producto" />
			</div>
				<div className="toggle" onClick={cambiarMostrar}></div>
		</div>
	);
}