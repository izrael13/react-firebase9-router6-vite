import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, singOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogout = async() => {
    try {
        await singOutUser()
    } catch (error) {
        console.log(error.code);
    }
  };

  return (
    <>
      <div>
        {user ? (
            <>
            <NavLink to="/">Inicio</NavLink>
            <button onClick={handleClickLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login |</NavLink>
            <NavLink to="/register">Register |</NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
