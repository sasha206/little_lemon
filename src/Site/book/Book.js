import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from "../theme/ThemeContext";
import "./book.css";

const Book = () => {
  return (
    <div className='book'>
      <h1> To book a reservation, please fill-out this 
      form</h1>
    </div>
  );
};

export default Book;
