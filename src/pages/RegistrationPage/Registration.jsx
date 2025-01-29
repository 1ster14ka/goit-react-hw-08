import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectorsAuth";
import { registration } from "../../redux/auth/authOps";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  console.log(user);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(registration(values));
    // navigate("/");
    // console.log(values);
    console.log(user);
  };

  return (
    <div>
      <h2>Regist</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
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
