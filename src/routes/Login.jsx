import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
const navegate = useNavigate()
  const handleClickLogin = () => {
    setUser(true)
    navegate("/")
  }

  return (
    <>
      <h1>Loginn</h1>
      <h2>{user ? "En linea" : "offline"}</h2>
      <button onClick={handleClickLogin}>Acceder</button>
    </>
  );
};

export default Login;
