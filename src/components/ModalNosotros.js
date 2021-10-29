import React from "react";

export default function ModalNosotros({ mostrar2, cambiarMostrar2 }) {

	return (
		<div className={`contenido-modal-barras ${mostrar2 && "show"}`}>
			<div className="modal-barras">
				<button onClick={cambiarMostrar2} className="exit" >
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="30" height="30"
						viewBox="0 0 24 24"><path d="M 4.7070312 3.2929688
						L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969
						L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031
						L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312
						L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688
						z"></path></svg>
				</button>
			</div>
		</div>
	);
}