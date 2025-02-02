import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import css from "./Registration.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(registration(values)).unwrap();
      actions.resetForm();

      navigate("/");
    } catch (error) {}
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>Regist</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.formLabel}>Name</label>
          <Field type="text" name="name" className={css.formInput} />
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

export default RegistrationForm;
