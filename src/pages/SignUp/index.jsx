import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";
import { Container, Background, DivForm } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <img src={FundoPlaneta} alt="fundo planeta rosa"></img>
      <Background></Background>
      <DivForm>
        <h1>formu</h1>
      </DivForm>
    </Container>
  );
}
