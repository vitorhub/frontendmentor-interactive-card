import React, { useState , createContext } from "react";
export const Contexto = createContext();

function MainContext({children}) {
    const [numberCard, setNumberCard] = useState("0000 0000 0000 0000");
    const [nome, setNome] = useState("JANE APPLESEED");
    const [mes, setMes ] = useState("12");
    const [ano, setAno ] = useState("23");
    const [cvc, setCvc] = useState("999");
    return (
      <Contexto.Provider value={ 
      { nome, setNome, numberCard, setNumberCard, cvc, setCvc, mes, setMes, ano, setAno }
      }>
        {children}
      </Contexto.Provider>
    );
  }
  
  export default MainContext;