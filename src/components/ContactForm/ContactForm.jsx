import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { number } from "yup";
const initialValues = {
  name: "",
  number: "",
  message: "",
};
const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="phone" name="number" id={numberFieldId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
