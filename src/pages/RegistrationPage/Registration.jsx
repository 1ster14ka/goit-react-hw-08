import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectorsAuth";
import { registration } from "../../redux/auth/authOps";
import { useNavigate } from "react-router-dom";
import css from "./Registration.module.css";

const Registration = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();

    try {
      dispatch(registration(values)).unwrap().then(navigate("/"));
    } catch (error) {
      console.log(error.message);
    }
    // console.log(values);
    // console.log(user);
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

export default Registration;
