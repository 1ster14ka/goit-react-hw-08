import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";

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
    actions.resetForm();
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
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
        <ErrorMessage name="number" component="span" />
        <button className={css.formBtn} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
