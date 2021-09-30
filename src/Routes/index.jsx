import { Switch, Route } from "react-router-dom";
import UsersCards from "../pages/UsersCards";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

export default function Routes() {
  
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
      <Route path="/login">login</Route>
      <Route path="/dashboard">dashboard</Route>
      <Route path="/editcard">edição de cards</Route>
    </Switch>
  );
}
