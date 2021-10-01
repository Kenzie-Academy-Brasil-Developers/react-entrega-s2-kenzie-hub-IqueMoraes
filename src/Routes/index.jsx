import { Switch, Route } from "react-router-dom";
import UsersCards from "../pages/UsersCards";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard";

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
        <Home />
      </Route>
      <Route path="/userscards">
        <UsersCards />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
        </Route>
      <Route path="/editcard">edição de cards</Route>
    </Switch>
  );
}
