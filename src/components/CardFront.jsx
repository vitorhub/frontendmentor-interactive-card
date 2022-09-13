import React from "react";
import { useContext } from "react";
import './CardFront.css'
import { Contexto } from "./MainContext";
import BgCardFront from "../images/bg-card-front.png";
import LogoFront from '../images/card-logo.svg'


function CardFront() {

    const {nome, numberCard, mes, ano } = useContext(Contexto);  /* usa contexto e desestrutura */

    return (
        <>
            <div className="card-front">
                <img src={BgCardFront} alt="cartao frente" className="bg-card-front"/>
                <img src={LogoFront} alt="logo cartao" className="logo-card"/>
                <h3 className="numero-cartao" > { numberCard } </h3> <br/>
                <h3 className="nome" >{ nome }</h3> <br/> {/* recebe state nome */}
                <h3 className="mes-ano" > { mes }/{ ano } </h3>
            </div>
        </>
    )
}
export default CardFront;