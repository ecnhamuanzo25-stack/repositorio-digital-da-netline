import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import { RepositoryIcon } from "./components/icons";

function App() {
  const lidarComAdesao = () => {
    alert("Redirecionando para o formulário de adesão!");
  };

  return (
    <div>
      <Header onPlanosClick={lidarComAdesao} />

       <section id="inicio" style={{ height: "80vh", padding: "4rem" }}>
        <div></div>
        <div>
          <h2>
            Repositorio Digital da <span>Netline</span>
          </h2>
          <p>
            Conectando ideias, estruturando o futuro. <span className="text-indigo-600">Bem-vindo ao repositório
            interno Netline.{" "}</span>
          </p>
          <h4></h4>
          <div>
            <div></div>
          </div>
        </div>
      </section> 

     <Card
       title="Repositório"      description="Arquivos internos da empresa"
       icon={<RepositoryIcon />}
      />
    {/* 
      <section id="sobre-nos">

      </section>
      <section id="suporte"></section>

      <footer>hgvcyhb</footer> */}
    </div>
  );
}


export default App;
