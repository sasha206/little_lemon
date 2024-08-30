import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from "../theme/ThemeContext";
import "./contact.css";

const Contact = () => {
  const { darkTheme } = useContext(ThemeContext);
  const textColor = darkTheme ? '#ffffff' : '#000000';


  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    enquiry: Yup.string().required('Required'),
    message: Yup.string()
      .min(25, 'Must be at least 25 characters')
      .required('Required'),
  });

  const simulateServerResponse = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve() : reject();
      }, 2000); 
    });
  };

  return (
    <div className={`contacts ${darkTheme ? 'contacts-dark' : 'contacts-light'}`} id="sectionContacts">
      <div className={`contact ${darkTheme ? 'contact-dark' : 'contact-light'}`}>
        <div className="titleContact" style={{ color: textColor }}>
          <h1>Contact me</h1>
        </div>
        <div className="form">
          <Formik
            initialValues={{ name: '', email: '', enquiry: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setLoading(true);
              setAlert(null); 
              
              simulateServerResponse()
                .then(() => {
                  setLoading(false);
                  setAlert({
                    type: 'success',
                    message: `All good! Thanks for your submission ${values.name}, we will get back to you shortly!`
                  });
                  resetForm(); 
                })
                .catch(() => {
                  setLoading(false);
                  setAlert({
                    type: 'error',
                    message: 'Oops! Something went wrong, please try again later.'
                  });
                })
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label htmlFor="name" style={{ color: textColor }}>Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="email" style={{ color: textColor }}>Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="enquiry" style={{ color: textColor }}>Type of enquiry</label>
                  <Field as="select" name="enquiry">
                    <option value="">Select option</option>
                    <option value="freelance">Freelance</option>
                    <option value="job">Job</option>
                    <option value="support">Support</option>
                  </Field>
                  <ErrorMessage name="enquiry" component="div" className="error" />
                </div>
                <div>
                  <label htmlFor="message" style={{ color: textColor }}>Your message</label>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>
                <button type="submit" disabled={isSubmitting || loading}>
                  {loading ? 'Loading...' : 'Submit'}
                </button>
                {alert && (
                  <div className={`alert ${alert.type === 'error' ? 'alert-error' : 'alert-success'}`}>
                    <strong>{alert.type === 'error' ? 'Oops!' : 'All good!'}</strong> {alert.message}
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
