import React from 'react';
import Navegacion from "./Navegacion.js"
import Productos from "./Productos.js"
import Footer from "./Footer.js"
import BtnRedes from "./BtnRedes.js"
import SlideBar from "./SlideBar.js"
import video from "../img/video.mp4";

export default function Pagina({ctlg}) {
    return (
        <div>
            <div className="header" id="inicio">
                <Navegacion />
                <video className="video" src={video} autoPlay loop muted />
                <div className="text-container">
                    <h3>Estilo al estilo de CUBAN</h3>
                </div>
            </div>
            <div className="productos">
                <Productos ctlg={ctlg} />
            </div>
			<BtnRedes/>
            <div className="slide">
                <SlideBar/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}