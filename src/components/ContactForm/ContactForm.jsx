import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'

import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
    username: Yup.string().trim().min(3, "Min 3 chars!").max(50, "Too Long!").required("Is required!"),
    userphone: Yup.string().trim().min(9, "Min 7-digit number with hyphens!").max(9, "Too Long!").required("Is required!"),
});

export default function ContactForm({ onAdd }) {

    const handleSubmit = (values, { resetForm }) => {
        onAdd({
            id: nanoid(),
            name: values.username,
            number: values.userphone
        });
        resetForm(); 
    }

    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <Formik 
            initialValues={{
                username: "",
                userphone: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
          <Form className={css.form}>
            <div className={css.formWrap}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="username" id={nameFieldId} />
                <ErrorMessage name="username" component="p" className={css.error} />
            </div>

            <div className={css.formWrap}>
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="userphone" id={numberFieldId} />
                <ErrorMessage name="userphone" component="p" className={css.error} />
            </div>

            <button type="submit" className={css.btnAdd}>Add contact</button>
          </Form>
        </Formik>
    );
}