import { Aside, UList } from "./style";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function AsideMenu() {
    const history = useHistory();
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  return (
    <Aside>
      <h3>{user.name}</h3>
      <UList>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/createtechs">Lançar tecnologia</Link>
        </li>
        {/* <li>
          <Link to="/edittechs">Editar tecnologias</Link>
        </li> */}
        <li>
          <Link to="/editprofile">Editar perfil</Link>
        </li>
        <li>
          <Link onClick={() => {
              localStorage.clear();
            history.push("/")}} to="/">
            Logout
          </Link>
        </li>
      </UList>
    </Aside>
  );
}
