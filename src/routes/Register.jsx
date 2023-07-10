import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/errorresFirebase";
import FormError from "../components/FormError";
import { formValidate } from "../utils/formaValidate";
import FormInput from "../components/FormInput";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError("firebase", {
        message: erroresFirebase(error.code),
      });
    }
  };

  return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
            <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
        ></FormInput>
        <FormError error={errors.password} />

        <FormInput
          type="password"
          placeholder="Ingrese password 2"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
        ></FormInput>
        <FormError error={errors.repassword} />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
