import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AsideMenu from "../../components/Aside";
import TechCard from "../../components/TechCard";
import { api } from "../../services/api";
import { DashboardBackground, BothCardsArea, TechCardsArea, WorkCardsArea } from "./styles";

export default function Dashboard({ authenticated }) {
  const history =useHistory();
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [techCards, setTechCards] = useState(user.techs);
  // const [workCards] = useState(user.works);


  const LoadTechs= () => {
    api
    .get(`/users/${user.id}`, ).then((response) => {
      const theRightGuy = response.data;
      setTechCards(theRightGuy.techs);
    })
    .catch((err) => toast.error("Erro na requisição, atualize a página"))
  }


  const DeleteTech = (idx) => {
    api
    .delete(`/users/techs/${idx}`, )
    .then((response) => {
        toast.success("Tecnologia deletada.")
    })
    .catch((err) => toast.error("Erro ao deletar, tente novamente"))
  }

  const LogOut = () =>{
    localStorage.clear();
    history.push("/")
  }

  useEffect(()=> LoadTechs(), [])

  console.log(techCards);
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <DashboardBackground>
      <AsideMenu LogOut={LogOut}/>
      <article>
        <div className="bio">
          <h2>{user.name}</h2>
          <h4>{user.bio}</h4>
          <h4>{user.course_module}</h4>
          <h4>{user.contact}</h4>
          <h4>{user.email}</h4>
        </div>

        <BothCardsArea>
        <TechCardsArea>
            <h3>Tecnologias</h3>
          {techCards?.map((subItem) => (
              <TechCard tech={subItem} DeleteTech={DeleteTech}/>
            
          ))}
        </TechCardsArea>
        {/* <WorkCardsArea>
        <h3>Trabalhos</h3>
          {workCards?.map((subItem) => (
              <TechCard tech={subItem} DeleteTech={DeleteTech}/>
            
          ))}
        </WorkCardsArea> */}
        </BothCardsArea>
      </article>
    </DashboardBackground>
  );
}

// {"id":"fdfe5b5b-233d-4cfc-9b91-21ec1d7f5efa",
// "name":"Usuario Sete",
// "email":"usuariosete@email.com",
// "course_module":"Primeiro módulo (Introdução ao Frontend)",
// "bio":"sdsd",
// "contact":"/sss",
// "techs":[],
// "works":[],
// "created_at":"2021-10-01T17:49:15.044Z",
// "updated_at":"2021-10-01T17:49:15.044Z",
// "avatar_url":null}
