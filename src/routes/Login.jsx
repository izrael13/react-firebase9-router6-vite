import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");
  const {loginUser} = useContext(UserContext);
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form: ", email, password);
    try {
      await loginUser(email, password);
      console.log("sesion iniciada");
      navegate("/")
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h1>Loginn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
