import React, { useState} from "react";
import Button from "../components/button";
import Fundo1 from "../assets/fundo.jpg";
import { useForm,Watch } from "react-hook-form";


type DadosDoForm = {
  nome: string;
  email: string;
  telefone: string;
  pofissao: string;
  senha: string;
  confirmaSenha: string;
  nivelAcesso: "colaborador" | "administrador";
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DadosDoForm>({mode: "onChange"});

  const salvarCadastro = (dados: DadosDoForm) => {
    console.log("Dados tipados com sucesso:", dados);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Fundo1})` }}
    >
      <div className="w-1/4 h-auto flex flex-col items-center justify-center bg-gray-50  rounded-2xl ">
        <form onSubmit={handleSubmit(salvarCadastro)} >
          <div className="flex flex-col gap-4 text-center mt-10">
            <h2 className="text-3xl text-shadow-mist-600 font-bold">
              <span>Repositorio Interno da Netline</span>
            </h2>
            <h1> Faça o seu cadastro</h1>
          </div>
          <div>
            <p>Nome Completo</p>
            <input
              type="text"
              placeholder="Elisa Cesario Nhamuanzo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              {...register("nome", {
                required: "Campo vazio.Preencha este campo!",
              })}
            />
            {errors.nome && (
              <span className="text-red-500 text-sm">
                {errors.nome.message}
              </span>
            )}
          </div>

          <br />
          <div>
            <p>E-mail</p>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              {...register("email", {
                required: "Campo vazio.Preencha este campo!",
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <br />
          <div>
            <p>Número</p>
            <input
              type="tel"
              placeholder="(+258) 845-377-999"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              {...register("telefone", {
                required: "Campo vazio.Preencha este campo!",
              })}
            />
            {errors.telefone && (
              <span className="text-red-500 text-sm">
                {errors.telefone.message}
              </span>
            )}
          </div>
          <br />
          <div>
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite a sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              {...register("senha", {
                required: "Campo vazio. Preencha este campo!",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres!",
                },
              })}
            />
             {errors.senha && (
              <span className="text-red-500 text-sm">
                {errors.senha.message}
              </span>
            )}
          </div>
          <br />
          <div>
            <p>Confirme a sua senha</p>
            <input
              type="password"
              placeholder="Digite a sua senha novamente"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              {...register("confirmaSenha", {
                required: "Por favor, confirme a sua senha!",
                validate :(valorDoCampo) =>{
                  if(valorDoCampo === ("senha")){
                    return true;

                    }else {
                      return "As sehas nao coincidem!";

                    }
                  }
                
              })}
            />
          </div>
          <br />
          <div className="mb-4">
            <p className="block text-gray-700 font-medium mb-1">
              Nível de Acesso
            </p>
            <select
              aria-label="Selecionar tipo de usuário "
              className="w-full px-4 py-2 border border-gray-300 rounded-md "
            >
              <option value="colaborador">Colaborador</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
          <br></br>

          <div className="text-center">
            <Button title="Cadastrar" onClickButton={() => {}} />
          </div>

          <div className="signup-link text-center mt-4 mb-15 ">
            <a href="./" className="text-blue-600">
              Voltar a pagina inicial
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
