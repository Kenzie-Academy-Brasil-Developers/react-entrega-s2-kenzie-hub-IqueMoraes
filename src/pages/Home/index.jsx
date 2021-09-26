import { useHistory } from "react-router-dom";
import GeneralButton from "../../components/Button/index";
import { Container, DivButtons } from "./styles";
import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";

export default function Home() {
  const history = useHistory();

  const handleHistory = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      {/* <figure> */}
      <img src={FundoPlaneta} alt="planeta em rosa ao fundo" />
      {/* </figure> */}
      <h1>Kenzie Hub</h1>
      <div>
        <p>
          Kenziehub é um hub de portfólios de programadores da Kenzie Academy!
        </p>
        <p>
          Compartilhe com outros desenvolvedores as tecnologias que aprendeu e
          as que está estudando no momento. Fortaleça as redes de conhecimento
          de forma simples.
        </p>
      </div>
      <hr />
      <DivButtons>
        <div>
          <h3>Novo na rede?</h3>
          <GeneralButton
            insideText={"Abra sua conta"}
            colorB={"#F5AC94"}
            onClick={() => handleHistory("/signup")}
          />
        </div>
        <div>
          <h3>Já possui uma conta?</h3>
          <GeneralButton
            insideText={"Entrar"}
            colorB={"#F5AC94"}
            onClick={() => handleHistory("/login")}
          />
        </div>
      </DivButtons>
    </Container>
  );
}
