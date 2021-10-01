import { Redirect } from "react-router";

export default function Dashboard({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Olá, mundo</h1>
    </div>
  );
}
