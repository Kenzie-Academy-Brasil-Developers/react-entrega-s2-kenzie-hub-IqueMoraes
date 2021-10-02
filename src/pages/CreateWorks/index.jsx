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

export default function CreateWorks({ authenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const schema = yup.object().shape({
    workTitle: yup.string().required("Campo obrigatório"),
    workDescription: yup
      .string()
      .required("Campo obrigatório"),
      workUrl:  yup
      .string(),

  });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ workTitle, workDescription, workUrl }) => {
    api
      .post(
        "/users/works",
        {
            "title": `${workTitle}`,
            "description": `${workDescription}`,
            "deploy_url": `${workUrl}`
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Novo trabalho adicionado");
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
        <div className="NewWork">
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Nova Tecnologia</h3>
            <h4>Adicione uma ao seu perfil seu novo aprendizado</h4>
            <Input
              register={register}
              name="techName"
              error={errors.techName?.message}
              label="Título do trabalho"
              placeholder="Ex: Portfólio"
            />
            <Input
              register={register}
              name="techLevel"
              error={errors.techLevel?.message}
              label="Descrição breve do trabalho"
              placeholder="ex: Minha primeira página com javascript puro"
            />
            <Input
              register={register}
              name="techLevel"
              error={errors.techLevel?.message}
              label="Enderço HTTP"
              placeholder="ex: https://kenziehub.com"
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
