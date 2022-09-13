import React from "react";
import FundoDesk from '../images/bg-main-desktop.png'
import FundoMobile from '../images/bg-main-mobile.png'
import './Bg.css'

function Bg(){

    function EscolheFundo(){
        if(window.innerWidth <= 375) { return FundoMobile }
        else{ return FundoDesk }
    }
    // backgroundImage: `url(${FundoDesk})`

    return(
        <div className="background">
              Hello World
        </div>
    )
}
export default Bg;