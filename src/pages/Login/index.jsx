import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";
import { Container, DivForm, AnimationContainer } from "./styles";
import Input from "../../components/Input";
import GeneralButton from "../../components/Button";
import { useHistory, Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import {
  FaUserAlt,
  FaEnvelope,
  FaCertificate,
  FaLock,
  FaLinkedin,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        toast.success("Login efetuado!");
        const { token } = response.data;
        localStorage.clear();
        localStorage.setItem("@KenzieHub:token", JSON.stringify.token);
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Login ou senha incorreto"));
  };

  return (
    <Container>
      <img src={FundoPlaneta} alt="fundo planeta rosa"></img>
      <DivForm>
        <AnimationContainer>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="email"
              error={errors.email?.message}
              label="E-mail"
              placeholder="Seu melhor e-mail"
              icon={FaEnvelope}
            />

            <Input
              register={register}
              name="password"
              error={errors.password?.message}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              icon={FaLock}
            />

            <div>
              <GeneralButton
                insideText={"Entrar"}
                colorB={"#f5e094"}
                type="submit"
              ></GeneralButton>
              <p>
                Não possui um cadastro? <Link to="/signup">Cadastrar</Link>
              </p>
            </div>
          </form>
          <GeneralButton
            insideText={"Retornar"}
            colorB={"#f5e094"}
            onClick={() => history.push("/")}
          />
        </AnimationContainer>
      </DivForm>
    </Container>
  );
}
