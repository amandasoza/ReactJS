import React from "react";
import './App.css'; // Importando o arquivo de estilo
import Logo from "./components/logo"; 
import Navegacao from "./components/navegacao";
import Topo from "./components/logo"; // Corrigido para usar o componente Topo
import Principal from "./components/principal";

const App = () => {
    return (
        <>
            <header className="topo">
                <Logo />
                <Navegacao />
            </header>
            <Topo />
            <Principal />
            <div className="container">
                <h1 className="title">Hello, World!</h1>
                {/* Adicione mais conteúdo aqui */}
            </div>
        </>
    );
};

export default App;
