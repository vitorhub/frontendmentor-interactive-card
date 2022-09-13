import React, { useContext } from "react";
import './CardBack.css';
import { Contexto } from "./MainContext";
import BgCardBack from '../images/bg-card-back.png'

function CardBack() {
    const {cvc } = useContext(Contexto);

    return (
        <div className="card-back">
            <img src={BgCardBack} alt="card back" className="img-card-back"/>
            <h3 className="titulo-cvc"> { cvc } </h3> 
        </div>
        )
}
export default CardBack;