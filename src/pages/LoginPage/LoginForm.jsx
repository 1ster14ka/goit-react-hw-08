import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import css from "../RegistrationPage/Registration.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(login(values)).unwrap();
      actions.resetForm();

      navigate("/contacts");
    } catch (error) {}
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.formLabel}>Email</label>
          <Field type="email" name="email" className={css.formInput} />
          <label className={css.formLabel}>Password</label>
          <Field type="password" name="password" className={css.formInput} />
          <button type="submit" className={css.formButton}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
