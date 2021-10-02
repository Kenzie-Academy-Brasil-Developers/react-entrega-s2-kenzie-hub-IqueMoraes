import { useHistory, Redirect } from "react-router-dom";
import GeneralButton from "../../components/Button/index";
import { Container, DivButtons, DivShowUsers } from "./styles";
import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";

export default function Home({authenticated}) {
  const history = useHistory();

  const handleHistory = (path) => {
    return history.push(path);
  };

  if(authenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <img src={FundoPlaneta} alt="planeta em rosa ao fundo" />
      <h1>Kenzie Hub</h1>
      <div className="capa">
        <div className="capaTexto">
          <p>
            Kenziehub é um hub de portfólios de programadores da Kenzie Academy!
          </p>
          <p>
            Compartilhe com outros desenvolvedores as tecnologias que aprendeu e
            as que está estudando no momento. Fortaleça as redes de conhecimento
            de forma simples.
          </p>
        </div>
        <DivShowUsers>
          <h4>
            Veja os desenvolvedores que estão na rede e as tecnologias
            aprendidas.
          </h4>
          <GeneralButton
            insideText={"Mostrar usuários"}
            colorB={"#f5e094"}
            onClick={() => handleHistory("/userscards")}
          />
        </DivShowUsers>
      </div>
      <hr />
      <DivButtons>
        <div>
          <h3>Novo na rede?</h3>
          <GeneralButton
            insideText={"Abra sua conta"}
            colorB={"#f5e094"}
            onClick={() => handleHistory("/signup")}
          />
        </div>
        <div>
          <h3>Já possui uma conta?</h3>
          <GeneralButton
            insideText={"Entrar"}
            colorB={"#f5e094"}
            onClick={() => handleHistory("/login")}
          />
        </div>
      </DivButtons>
    </Container>
  );
}
