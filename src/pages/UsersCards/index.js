import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import GeneralButton from "../../components/Button";
import PopUpUsers from "../../components/PopUpUsers";
import { useHistory } from "react-router-dom";
import { BackgroundUsersCards } from "./style";
import FundoPlaneta from "../../assets/images/FundoPlaneta.svg";

export default function UsersCards() {
  const [kenzieUsers, setKenzieUser] = useState([]);
  const [page, setPage] = useState(1);
  const [disabledButtonUp, setDisabledButtonUp] = useState(false);
  const [disabledButtonDown, setDisabledButtonDown] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/users?perPage=15&page=${page}`)
      .then((response) => {
        setKenzieUser(response.data);
      })
      .catch((_) => toast.error("Tente novamente mais tarde"));

    api
      .get(`/users?perPage=15&page=${page + 1}`)
      .then((response) => {
        if (response.data === []) {
          setDisabledButtonUp(true);
        }
        setDisabledButtonDown(false);
      })
      .catch((_) => toast.error("Tente novamente mais tarde"));

    api
      .get(`/users?perPage=15&page=${page - 1}`)
      .then((response) => {
        if (response.data === []) {
          setDisabledButtonDown(true);
        }
        setDisabledButtonUp(false);
      })
      .catch((_) => setDisabledButtonDown(true));
  }, [page]);

  const handlePageUp = () => setPage(page + 1);
  const handlePageDown = () => setPage(page - 1);

  return (
    <BackgroundUsersCards>
      <img src={FundoPlaneta} alt="planeta em rosa ao fundo" />

      <div>{kenzieUsers && <PopUpUsers usersCards={kenzieUsers} />}</div>
      <div className="pageButtons">
        <GeneralButton
          insideText={"<<"}
          colorB={"#f5e094"}
          onClick={handlePageDown}
          disabledButton={disabledButtonDown}
        />
        <GeneralButton
          insideText={">>"}
          colorB={"#f5e094"}
          onClick={handlePageUp}
          disabledButton={disabledButtonUp}
        />
      </div>
      <div className="returnButton">
        <GeneralButton
          insideText={"Retornar"}
          colorB={"#f5e094"}
          onClick={() => history.push("/")}
        />
      </div>
    </BackgroundUsersCards>
  );
}
