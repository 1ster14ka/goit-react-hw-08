import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import iziToast from "izitoast";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const ErrorSchema = Yup.object().shape({
    name: Yup.string().min(3, "Short name").max(50, "Long name"),
    number: Yup.string().min(3, "Short number").max(15, "Long number"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  function handleSubmit(values, actions) {
    if (!values.name || !values.number) {
      iziToast.show({
        title: "Error",
        message: "Please fill in all fields",
        position: "topCenter",
        color: "red",
      });
      return;
    }

    actions.resetForm();
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    console.log(newContact);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ErrorSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" type="text" id={nameId} className={css.formInput} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          name="number"
          type="text"
          id={numberId}
          className={css.formInput}
        />
        {/* <ErrorMessage name="number" component="span" /> */}
        <button className={css.formBtn} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
