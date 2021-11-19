import React from "react";
import Carrusel from './Carrusel.js'

export default function CarruselModal({ mostrar3, cambiarMostrar3, foto1, foto2, foto3 }) {

	return (
		<div className={`contenedor-carrusel-modal ${mostrar3 && "show"}`}>
			<div className="carrusel-modal">
				<Carrusel className="img" foto1={foto1} foto2={foto2} foto3={foto3} />
			</div>
			<div className="toggle" onClick={cambiarMostrar3}></div>
		</div>
	);
}