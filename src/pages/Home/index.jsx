import { useHistory } from "react-router-dom";
import GeneralButton from "../../components/Button/index";
import { Container, DivButtons } from "./styles";
import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";
import ScrollBox from "../../components/ScrollBox";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export default function Home() {
  const [kenzieUsers, setKenzieUser] = useState({});
  const [page, setPage] = useState(1);

  const history = useHistory();

  const handlePageUp = () => (page < 27 ? setPage(page + 1) : setPage(page));
  const handlePageDown = () => (page > 1 ? setPage(page - 1) : setPage(page));

  const handleHistory = (path) => {
    return history.push(path);
  };

  useEffect(() => {
    api
      .get(`/users?perPage=15&page=${page}`)
      .then((response) => {
        setKenzieUser(response);
      })
      .catch((_) => toast.error("Tente novamente mais tarde"));
  }, []);

  return (
    <Container>
      <img src={FundoPlaneta} alt="planeta em rosa ao fundo" />
      <h1>Kenzie Hub</h1>
      <div className="capa">
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
        <div>
          <GeneralButton
            insideText={"<<"}
            colorB={"#f5e094"}
            onClick={() => handlePageDown()}
          />
          <GeneralButton
            insideText={">>"}
            colorB={"#f5e094"}
            onClick={() => handlePageUp()}
          />

          <ScrollBox>
            <table>
              {/* <thead>
                <tr>
                  <th>Nome</th>
                  <th>Módulo</th>
                  <th>Tecnologias</th>
                </tr>
              </thead>
              <tbody> */}
              {kenzieUsers.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.course_module}</td>
                  <td>{item.course_module}</td>
                  <td>
                    {item.techs.map(
                      (tec, index) =>
                        `${index + 1}:${tec.title}-${tec.status}, `
                    )}
                  </td>
                </tr>
              ))}
              {/* </tbody> */}
            </table>
          </ScrollBox>
        </div>
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
