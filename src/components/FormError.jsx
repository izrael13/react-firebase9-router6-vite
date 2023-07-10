const FormError = ({error}) => {
  return <>{error && <p className="text-red-600">{error.message}</p>}</>;
};
export default FormError;
