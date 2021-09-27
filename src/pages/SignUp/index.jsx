import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";
import { Container, Background, DivForm } from "./styles";
import Input from "../../components/Input";

import {
  FaUserAltSlash,
  FaEnvelope,
  FaGithubSquare,
  FaCertificate,
  FaLock,
} from "react-icons/fa";

export default function SignUp() {
  return (
    <Container>
      <img src={FundoPlaneta} alt="fundo planeta rosa"></img>
      <Background></Background>
      <DivForm>
        <h1>formu</h1>

        <Input
          register={register}
          name="name"
          error={errors.name?.message}
          label="Nome"
          placeholder="Seu nome"
          icon={FaUserAltSlash}
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
          name="githubUser"
          error={errors.name?.message}
          label="Conta GitHub"
          placeholder="Seu usuário na plataforma"
          icon={FaGithubSquare}
        />
        <Input
          register={register}
          name="experience"
          error={errors.name?.message}
          label="Conhecimento geral"
          placeholder="Seu nível de conhecimento atual"
          icon={FaGithubSquare}
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

        <Button type="submit">Enviar</Button>
      </DivForm>
    </Container>
  );
}
