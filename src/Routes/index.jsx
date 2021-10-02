import { Switch, Route } from "react-router-dom";
import UsersCards from "../pages/UsersCards";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard";
import Createtechs from "../pages/Createtechs";
import EditTechCard from "../pages/EditTechCard";
import CreateWorks from "../pages/CreateWorks";
import EditWorkCard from "../pages/EditWorkCard";

export default function Routes() {
const [authenticated, setAuthenticated] = useState(false);


useEffect(()=> {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
if(token){
  return setAuthenticated(true)
}

}, [authenticated])

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated}/>
      </Route>
      <Route path="/userscards">
        <UsersCards authenticated={authenticated}/>
      </Route>
      <Route path="/signup">
        <SignUp authenticated={authenticated}/>
      </Route>
      <Route path="/login">
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard  authenticated={authenticated}/>
        </Route>
        <Route path="/createtechs">
        <Createtechs  authenticated={authenticated}/>
        </Route>
      <Route path="/editcard/:id">
        <EditTechCard authenticated={authenticated}/>
      </Route>
      {/* <Route path="/createworks">
        <CreateWorks  authenticated={authenticated}/>
        </Route>
      <Route path="/editwork/:id">
        <EditWorkCard authenticated={authenticated}/>
      </Route> */}

    </Switch>
  );
}
