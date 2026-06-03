import React from "react";
import Button from "../components/button";
import Fundo1 from "../assets/fundo.jpg";
import logoNetline from "../assets/netline.jpg";

export default function Login() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Fundo1})` }}
    >
      
      <div className="w-1/4 h-2/4 flex flex-col items-center justify-center bg-gray-50 rounded-2xl">
        <form>
          <div className=" flex justify-center items-center">
          <img
            src={logoNetline}
            alt="Logotipo Netline"
            className="w-1/5 "
          />
        </div>
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl text-shadow-mist-600 font-bold">
              <span>Repositorio Interno da Netline</span>
            </h2>
            <h1 className="text-2xl font-bold"> Acesse o sistema</h1>
          </div>

          <div>
            <p>E-mail</p>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite a sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <br></br>

          <div className="text-center">
            <Button title="Entrar" onClickButton={() => {}} />
          </div>

          <div className="signup-link text-center mt-4">
            <p className="text-gray-600">Não tem uma conta?</p>
            <a href="./cadastro" className="text-blue-700">
              Regista-te
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
