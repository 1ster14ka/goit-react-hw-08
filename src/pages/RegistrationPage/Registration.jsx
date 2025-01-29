import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectorsAuth";

const Registration = () => {
  const user = useSelector(selectUser);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
    console.log(user);
  };

  return (
    <div>
      <h2>Regist</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="">Email</label>
          <Field type="email" name="email" />
          <label htmlFor="">Password</label>
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
