import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError
  } = useForm();

  const onSubmit = async({email, password}) =>{
    try {
        await registerUser(email, password);
        console.log("usuario creado");
        navigate("/");
      } catch (error) {
        console.log(error.code);

        switch(error.code){
            case 'auth/email-already-in-use':
                setError("email", {message:"Email ya esta en uso"})
                break;
            default:
                console.log("error en el servidor: "+error.code);
        }
            
      }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required: { value: true, message: "Campo obligatorio" },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email no valido",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength: { value: 6, message: "Minimo 6 carateres" },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "Escribe algo";
                else true;
              },
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Ingrese password 2"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
