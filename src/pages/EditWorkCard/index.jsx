import { useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import AsideMenu from "../../components/Aside";
import { api } from "../../services/api";
import { DashboardBackground, EditionArea } from "./styles";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GeneralButton from "../../components/Button";

export default function EditWorkCard({ authenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );
  const schema = yup.object().shape({
    techLevel: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /(Iniciante|Intermediário|Avançado)/,
        'O status deve corresponder aos seguintes: "Iniciante", "Intermediário" ou "Avançado".'
      ),
  });
  const params = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const actualtech = user.techs.find((item) => item.id === params.id);

  const onSubmitFunction = ({ techLevel }) => {
    api
      .put(
        `/users/techs/${params.id}`,
        {
          status: `${techLevel}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Status da tecnologia atualizado");
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
        <EditionArea>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Tecnologia: </h3>
            <h4>Atualize o nível de conhecimento da tecnologia</h4>

            <h2>{actualtech.title}</h2>

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
        </EditionArea>
      </article>
    </DashboardBackground>
  );
}
