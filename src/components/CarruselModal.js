import React from "react";
import Carrusel from './Carrusel.js'

export default function CarruselModal({ mostrar3, cambiarMostrar3, foto1, foto2, foto3 }) {

	return (
		<div className={`contenedor-carrusel-modal ${mostrar3 && "show"}`}>
			<div className="carrusel-modal">
				{/* <button onClick={cambiarMostrar3} className="exit" >
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="30" height="30"
						viewBox="0 0 24 24"><path d="M 4.7070312 3.2929688
						L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969
						L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031
						L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312
						L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688
						z"></path></svg>
				</button> */}
				<div className="contenido-modal">
					<Carrusel foto1={foto1} foto2={foto2} foto3={foto3}/>
				</div>
			</div>
		</div>
	);
}