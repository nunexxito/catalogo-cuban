import React, {useState} from "react";
import ModalBarras from "./ModalBarras";
import { Link } from 'react-scroll';
import ModalNosotros from './ModalNosotros'

export default function Navegacion() {
    const [mostrar, setMostrar] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);

    const cambiarMostrar = () => setMostrar(prev => !prev);
    const cambiarMostrar2 = () => setMostrar2(prev => !prev);

    return (
        <div className="navegacion">
        <Link to="inicio">
                <h2>CUBAN</h2>
        </Link>
            <nav>
                <Link to="novedades" className="btn-nav">Novedades</Link>
                <Link to="catalogo" className="btn-nav">Catalogo</Link>
                {/* <Link className="btn-nav">Ultimas unidades</Link> */}
                <Link className="btn-nav" onClick={cambiarMostrar2}>Contacto</Link>
                <ModalNosotros mostrar2={mostrar2} cambiarMostrar2={cambiarMostrar2}/>
                <button onClick={cambiarMostrar} className={`menu ${mostrar && "quitar"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 171 171"><g fill="none" fill-rule="nonzero"
                        stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                        stroke-dashoffset="0" font-family="none" font-weight="none"
                        font-size="none" text-anchor="none">
                        <path d="M0,171.99654v-171.99654h171.99654v171.99654z"
                        fill="none"></path><g fill="#ffffff"><path
                        d="M14.25,35.625v14.25h142.5v-14.25zM14.25,78.375v14.25h142.5v-14.25zM14.25,
                        121.125v14.25h142.5v-14.25z"></path></g></g></svg>
                </button>
                <ModalBarras mostrar={mostrar} cambiarMostrar={cambiarMostrar} cambiarMostrar2={cambiarMostrar2}/>
            </nav>
        </div>
    );
}