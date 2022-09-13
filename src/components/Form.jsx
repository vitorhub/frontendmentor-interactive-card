import React, { useContext, useState } from "react";
import { Contexto } from "./MainContext";
import './Form.css';
import Tks from "./Tks";

function Form() {
  const { setNome, setNumberCard,
    setCvc, setMes, setAno } = useContext(Contexto); /* usa contexto */

  const [advNome, setAdvNome] = useState();
  const [campoNome, setCampoNome] = useState("");
  const [advNCard, setAdvNCard] = useState("");
  const [campoCard, setCampoCard] = useState("");
  const [advMes, setAdvMes] = useState("");
  const [campoMes, setCampoMes] = useState("");
  const [advAno, setAdvAno] = useState("");
  const [campoAno, setCampoAno] = useState("");
  const [advCvc, setAdvCvc] = useState("");
  const [campoCvc, setCampoCvc] = useState("");
  const [submit, setSubmit] = useState(false);

  /* ************************NOME */
  function ValidaNome(parametroNome) { /* OnChange Mascara */
    if (parametroNome !== "") {   /* nao vazio */
      const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/; /* regex nome */
      if (parametroNome.match(regexNome)) {
        setCampoNome("ok");
        setNome(parametroNome.toUpperCase());
      }
      else { setCampoNome("nome invalido") }
    } else { setCampoNome("") }
  }
  function FuncAdvNome() { /* set estado advertencia de acordo com o resultado da mascara nome */
    if (campoNome === "") {
      setAdvNome(<p className="adv" > Can't be blank</p>);
    } else if (campoNome === "nome invalido") {
      setAdvNome(<p className="adv" > Wrong format, letters only </p>);
    } else if (campoNome === "ok") { 
      setAdvNome(<p className="adv" style={{ visibility: "hidden"}} > Nome ok </p>); }
  }
  /* ************************NOME */

  /* *********************** CARTAO */
  function MascaraCartao(par) { /* 0 */

    let input = document.getElementById("number-card");
    let size = input.value.length;
    if (size === 4 || size === 9 || size === 14) { input.value += " "; } /* para mascara input */
    setNumberCard(input.value);

    if (par !== "") { /* nao vazio */
      const regexNumeroCartao = /^[\d ]+$/;
      if (par.match(regexNumeroCartao)) {
        if (par.length < 19) { setCampoCard("<19"); } /* faltando digito */
        else { setCampoCard("ok"); } /* tudo validado */
      }
      else { setCampoCard("regex errado"); } /* pede apenas numeros */
    } else { /* vazio */
      setCampoCard("");
    }
  }
  function FuncAdvMascaraNCard() {
    if (campoCard === "ok") { setAdvNCard(<p className="adv" style={{ visibility:"hidden"}} > Cartao ok </p>) }
    else if (campoCard === "regex errado") {
      setAdvNCard(<p className="adv">Wrong format, numbers only</p>)
    }
    else if (campoCard === "") { setAdvNCard(<p className="adv"> Can't be blank </p>) }
    else if (campoCard === "<19") { setAdvNCard(<p className="adv"> Missing digit </p>) }
  }
  /* *********************** CARTAO */

  /* *********************** MES */
  function ValidaMes(parametroMes) {
    setMes(parametroMes);
    if (parametroMes === "") { setCampoMes(""); }
    else {  /* nao vazio TESTA */
      const regexMes = /^[\d]+$/;
      if (parametroMes.match(regexMes)) { /* passou no regex */
        if (parametroMes > 12) { setCampoMes("maior que 12"); }
        else {
          if (parametroMes.length < 2) { setCampoMes("<2"); }
          else { setCampoMes("ok"); }
        }
      } else {
        setCampoMes("erro regex");
      }
    }
  }
  function FuncAdvValidaMes() {
    if (campoMes === "ok") { setAdvMes(<p className="adv" style={{visibility:"hidden"}} > mes ok </p>) }
    else if (campoMes === "") { setAdvMes(<p className="adv"> Can't be blank </p>) }
    else if (campoMes === "maior que 12") { setAdvMes(<p className="adv"> Max is 12 </p>) }
    else if (campoMes === "erro regex") { setAdvMes(<p className="adv"> Numbers only </p>) }
    else if (campoMes === "<2") { setAdvMes(<p className="adv">Need two digits</p>) }
  }
  /* *********************** MES */

  /* *********************** ANO */
  function ValidaAno(parametroAno) {
    setAno(parametroAno);
    if (parametroAno === "") { setCampoAno(""); }
    else {
      const regexAno = /^[\d]+$/;
      if (parametroAno.match(regexAno)) {
        if (parametroAno.length < 2) { setCampoAno("<2"); }
        else { setCampoAno("ok"); }
      } else {
        setCampoAno("erro regex");
      }
    }
  }
  function FuncAdvValidaAno() {
    if (campoAno === "") { setAdvAno(<p className="adv"> Can't be blank </p>) }
    else if (campoAno === "erro regex") { setAdvAno(<p className="adv"> Numbers only  </p>) }
    else if (campoAno === "ok") { setAdvAno(<p className="adv" style={{visibility:"hidden"}} > Ano ok </p>) }
    else if (campoAno === "<2") { setAdvAno(<p className="adv">Need two digits</p>) }
  }
  /* *********************** ANO */

  /* *********************** CVC */
  function ValidaCvc(parametroCvc) {
    setCvc(parametroCvc);
    if (parametroCvc === "") { setCampoCvc("") }
    else {
      const regexCvc = /^[\d]+$/;
      if (parametroCvc.match(regexCvc)) {
        if (parametroCvc.length < 3) { setCampoCvc("<3"); }
        else { setCampoCvc("ok"); }
      } else {
        setCampoCvc("erro regex");
      }
    }
  }
  function FuncAdvValidaCvc() {
    if (campoCvc === "") { setAdvCvc(<p className="adv"> Can't be blank </p>) }
    else if (campoCvc === "erro regex") { setAdvCvc(<p className="adv"> Numbers only </p>) }
    else if (campoCvc === "ok") { setAdvCvc(<p className="adv" style={{visibility:"hidden"}} > CVC ok </p>) }
    else if (campoCvc === "<3") { setAdvCvc(<p className="adv"> Three digits minimum </p>) }
  }
  /* *********************** CVC */

  function TestaCampos(e) { /* CLICOU NO CONFIRM */
    e.preventDefault();
    FuncAdvNome();
    FuncAdvMascaraNCard();
    FuncAdvValidaMes();
    FuncAdvValidaAno();
    FuncAdvValidaCvc();
    if (campoNome === "ok"
      && campoCard === "ok"
      && campoMes === "ok"
      && campoAno === "ok"
      && campoCvc === "ok") {
      setSubmit(true);
    }
  }
  function TrocaTks() {
    if (submit) { return "tks-mostra" }
  }
  function TrocaForm() {
    if (submit) { return "esconde" }
  }

  return (
    <>
      <form action="!#" className={TrocaForm() || "mostra"}>
        <label htmlFor="name">Cardholder Name</label><br/>
        <input type="text" name="name" id="name" className="campo-texto"
          maxLength={23}
          placeholder="e.g. Jane Appleseed"
          onChange={(eventNome) => { ValidaNome(eventNome.target.value) }}
        />
        {advNome || <p className="hidden" >vazio</p> }

        <label htmlFor="number-card">Card Number</label><br/>
        <input type="text"
          autoComplete="off"
          maxLength={19}
          name="number-card"
          id="number-card" className="campo-texto"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(ENCard) => { MascaraCartao(ENCard.target.value) }}
        />
        {advNCard || <p className="hidden" >vazio</p> }
        <div className="linha">
          <div className="linha-a">
            <label htmlFor="mes">Exp. Date (MM/YY)</label><br/>
            <div className="div-mes-ano">
              <div className="mes">
                <input type="text" name="mes" id="mes" maxLength={2} placeholder="MM" className="campo-texto"
                  onChange={(eventMes) => { ValidaMes(eventMes.target.value) }}
                />
                {advMes || <p className="hidden" >vazio</p> }
              </div>
              <div className="ano">
                <input type="text" name="ano" id="ano" maxLength={2} placeholder="YY" className="campo-texto"
                  onChange={(eventAno) => { ValidaAno(eventAno.target.value) }}
                />
                {advAno || <p className="hidden" >vazio</p> }
              </div>
            </div>
          </div>
          <div className="div-cvc">
            <label htmlFor="number-cvc">CVC</label><br/>
            <input type="text" name="number-cvc"
              id="number-cvc" className="campo-texto"
              maxLength={3}
              placeholder="e.g. 123" max="999"
              onChange={(eventCvc) => { ValidaCvc(eventCvc.target.value) }}
            />
            {advCvc || <p className="hidden" >vazio</p> }
          </div>
        </div>

        <button id="btn-confirm" type="submit" className="btn-confirm"
        onClick={(e) => { TestaCampos(e) }}>Confirm</button>
      </form>
      <Tks classe={TrocaTks()} />
    </>
  );
}

export default Form;