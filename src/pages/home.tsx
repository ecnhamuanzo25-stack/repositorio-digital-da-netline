import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import { RepositoryIcon } from "../components/icons";
import Principal from "../assets/principal.png";
import Fundo1 from "../assets/fundo.jpg";

function home() {
  const lidarComAdesao = () => {
    alert("Redirecionando para o formulário de adesão!");
  };

  return (
    <div>
      <Header onPlanosClick={lidarComAdesao} />

      <section
        id="inicio"
        className="bg-cover bg-center h-screen w-full  justify-between grid grid-cols-2 p-10 rounded-xl"
        style={{ backgroundImage: `url(${Fundo1})` }}
       >
          <div className="pt-65">
            <h2 className="text-amber-50 font-bold text-6xl ">
              Repositório Digital da <span>Netline</span>
            </h2>
            <p className="text-[#ffffff] font-bold text-4xl">
              Conectando ideias, estruturando o futuro.{" "}
            </p>
            <br></br>
            <p className="text-2xl">
              {" "}
              <span className="text-[#f1d772] font-semibold">
                Bem-vindo ao repositório interno da Netline.{" "}
              </span>
            </p>
          </div>

          <div className="justify-center items-center flex">
            <img
              src={Principal}
              className="w-[90%] h-[82%] box-border object-cover rounded-2xl shadow-2xl  transform hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>
      </section>
      
      <section id="sobrenós">
        <div className="flex flex-col items-center p-44 bg-[#f7f7f7]" >
         
          <div className="justify-center" >
            <h1 className="text-5xl font-bold leading-4 text-center"><span>Sobre a Plataforma</span></h1>
            <br></br>
            <p className="text-center text-base font-normal mt-2 max-w-[65%}">
              O Repositório Digital da Netline nasceu da necessidade de centralizar, proteger e democratizar o acesso à informação essencial da nossa organização. Mais do que um banco de dados, esta plataforma é o coração do conhecimento da empresa — unificando a gestão de contratos ativos, o controle do nosso inventário de softwares e as diretrizes operacionais.

              Nosso objetivo é eliminar silos de informação, garantindo que cada colaborador tenha as ferramentas e os documentos necessários para tomar decisões rápidas, seguras e alinhadas com o futuro da Netline.
            </p>
          </div>
        </div>
        <div>
        </div>

      </section>
      <section id="suporte">
          <div className="flex flex-col items-center p-20">
             <h2 className="text-5xl font-bold leading-4 text-center p-8">Suporte</h2>
             <h1 className="text-2xl font-bold leading-4 text-center" >
               Contactos
             </h1>
             <p className="text-center text-base font-normal mt-2 max-w-[65%}">
                 Problemas ao submeter manuais ou dúvidas? Entre em contacto com o nosso suporte técnico. Estamos disponíveis para garantir que a tua experiência seja simples e rápida.
             </p>
          </div>
        <div>
            
        </div>

      </section>

      <footer></footer>
    </div>
  );
}

export default home;
