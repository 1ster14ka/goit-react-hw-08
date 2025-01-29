import { Field, Form, Formik } from "formik";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>Email</label>
          <Field type="email" name="email" />
          <label>Password</label>
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
