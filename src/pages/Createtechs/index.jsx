import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import AsideMenu from "../../components/Aside";
import { api } from "../../services/api";
import { DashboardBackground } from "./styles";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GeneralButton from "../../components/Button";

export default function Createtechs({ authenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const schema = yup.object().shape({
    techName: yup.string().required("Campo obrigatório"),
    techLevel: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /(Iniciante|Intermediário|Avançado)/,
        'O status deve corresponder aos seguintes: "Iniciante", "Intermediário" ou "Avançado".'
      ),
  });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ techName, techLevel }) => {
    api
      .post(
        "/users/techs",
        {
          title: `${techName}`,
          status: `${techLevel}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Nova Tecnologia Adicionada");
        history.push("/dashboard");
      })
      .catch((err) => toast.error(err.message));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DashboardBackground>
      <AsideMenu />
      <article>
        <div className="Newtech">
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Nova Tecnologia</h3>
            <h4>Adicione uma ao seu perfil seu novo aprendizado</h4>
            <Input
              register={register}
              name="techName"
              error={errors.techName?.message}
              label="Nome da tecnologia"
              placeholder="Ex: React"
            />
            <Input
              register={register}
              name="techLevel"
              error={errors.techLevel?.message}
              label="Nível de conhecimento"
              placeholder="ex: Iniciante"
            />

            <GeneralButton
              insideText={"Adicionar"}
              colorB={"#f5e094"}
              type="submit"
            ></GeneralButton>
          </form>
        </div>
      </article>
    </DashboardBackground>
  );
}
