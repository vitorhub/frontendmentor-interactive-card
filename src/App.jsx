import React from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MainContext from "./components/MainContext";
import './App.css'
import Bg from "./components/Bg";

function App() {
  return (
    <div className="app">
      <MainContext> {/* função do contexto envolve componentes */}
        <Bg/>
        <CardFront/>
        <CardBack />
        <Form />
        <Footer />
      </MainContext>
    </div>
  );
}
export default App;