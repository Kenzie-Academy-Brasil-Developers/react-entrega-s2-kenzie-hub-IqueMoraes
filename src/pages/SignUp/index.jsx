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

export default function SignUp({authenticated}) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /(Primeiro módulo \(Introdução ao Frontend\)|Segundo módulo \(Frontend Avançado\)|Terceiro módulo \(Introdução ao Backend\)|Quarto módulo \(Backend Avançados\))/,
        'O módulo deve corresponder ao nome completo: "Primeiro módulo (Introdução ao Frontend)", "Segundo módulo (Frontend Avançado)", "Terceiro módulo (Introdução ao Backend)", "Quarto módulo (Backend Avançado)".'
      ),
    password: yup
      .string()
      .min(6, "mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
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

  const onSubmitFunction = ({
    name,
    email,
    bio,
    contact,
    course_module,
    password,
  }) => {
    const user = { name, email, bio, contact, course_module, password };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Cadastrado com sucesso!");

        return history.push("/login");
      })
      .catch((err) => console.log(err.message));
  };

  if(authenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <img src={FundoPlaneta} alt="fundo planeta rosa"></img>
      <DivForm>
        <AnimationContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="name"
              error={errors.name?.message}
              label="Nome"
              placeholder="Seu nome"
              icon={FaUserAlt}
            />
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
              name="bio"
              error={errors.bio?.message}
              label="Mini biografia"
              placeholder="Uma breve descrição sobre você"
              icon={FaLinkedin}
            />
            <Input
              register={register}
              name="contact"
              error={errors.contact?.message}
              label="Contato"
              placeholder="Seu usuário na plataforma Linkedin"
              icon={FaLinkedin}
            />

            <Input
              register={register}
              name="course_module"
              error={errors.course_module?.message}
              label="Módulo atual"
              placeholder="Seu módulo no curso Kenzie Academy BR"
              icon={FaCertificate}
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
            <Input
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
              icon={FaLock}
            />
            <div>
              <GeneralButton
                insideText={"Cadastrar"}
                colorB={"#f5e094"}
                type="submit"
              ></GeneralButton>
              <p>
                Já possui um cadastro? <Link to="/login">Acessar conta</Link>
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
