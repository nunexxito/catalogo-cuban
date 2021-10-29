import React from "react";
import Catalogo from "./Catalogo";
import Novedades from "./Novedades";

export default function Productos({ ctlg }) {
    return (
        <div>
            <div className="contenido-novedades">
                <Novedades id="novedades"/>
            </div>
            <Catalogo ctlg={ctlg} id="catalogo" />
        </div>
    );
}