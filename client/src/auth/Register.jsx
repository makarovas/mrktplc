import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignupSchema from "./Registration/SignupSchema";
import { INITIAL_VALUES } from "./Registration/InitialValues";
import RegisterForm from "./Registration/RegisterForm";

const Register = () => {
  const handleSubmit = (values) => {
    console.table(values);
  };

  return (
    <div>
      <div className="container-fluid bg-secondary p-5 text-center">
        Register Form
      </div>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
