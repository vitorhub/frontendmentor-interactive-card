import React from "react";
import './Tks.css'
import LogoTks from '../images/icon-complete.svg'

export default function Tks(props) {
    let pr = props.classe || "tks-esconde";
    return (
        <div className={pr} >
            <img src={ LogoTks } alt="logo tks" className="logo-tks"/>
            <h4>Thank you!</h4>
            <p>We've added your card details</p>
            <button id="btn-continue" className="btn-continue" >Continue</button>
        </div>
    )
}