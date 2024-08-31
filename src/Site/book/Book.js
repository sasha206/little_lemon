import React from 'react'; 
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'; 

import "./book.css";


const Book = () => {
  
  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required('Write first name'),
    last_name: Yup.string()
      .required('Write last name'),
    date: Yup.date()
      .required('Choose date')
      .min(new Date(), 'The date cannot be in the past'),
    time: Yup.string().required('Choose time'),
    guests: Yup.number()
      .required('Enter the number of guests')
      .min(1, 'The number of guests must be at least 1')
      .max(20, 'Maximum number of guests - 10'),
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const onSubmit = (values) => {
    console.log('The form has been sent with the following data:', values);
    alert('Reservation sent successfully!');
  };

  return (
    <div className='book'>
      <div className="bookContainer">
        <header>
          <h1> To book a reservation, please fill-out this form</h1>
        </header>
        <div className='formContainer'>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='formField'>        
            <label htmlFor="first_name">First name:</label>
            <br/>
            <Field className="fieldForm" type="text" id="first_name" name="first_name" />
            <ErrorMessage name="first_name" component="div" className="error" />    
          </div>

          <div className='formField'>           
            <label htmlFor="last_name">Last name:</label>
            <br/>
            <Field className="fieldForm" type="text" id="last_name" name="last_name" />
            <ErrorMessage name="last_name" component="div" className="error" /> 
          </div>

          <div className='formField'>
            <label htmlFor="date">Date:</label>
            <br/>
            <Field className="fieldForm" type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div className='formField'>
            <label htmlFor="time">Time:</label>
            <br/>
            <Field className="fieldForm" type="time" id="time" name="time" />
            <ErrorMessage name="time" component="div" className="error" />
          </div>

          <div className='formField'>
            <label htmlFor="guests">Number of guests:</label>
            <br/>
            <Field className="fieldForm" type="number" id="guests" name="guests" min="1" max="20" />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>

          <div className='formField'>           
            <label htmlFor="occasion">Occasion:</label>
            <br/>
            <Field className="fieldForm" type="textarea" id="occasion" name="occasion" />
          </div>

          <div className='formField'>
            <button type="submit" disabled={isSubmitting}>
              Book
            </button>
          </div>

        </Form>
      )}
    </Formik>
        </div>
      </div>
    </div>
  );
};

export default Book;
