import React from "react";
import './Tks.css'

export default function Tks(props) {
    let pr = props.classe || "tks-esconde";
    return (
        <div className={pr} >
            <h4>Thank you!</h4>
            <p>We've added your card details</p>
            <button id="btn-continue">Continue</button>
        </div>
    )
}