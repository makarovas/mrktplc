import React from "react";
import RegisterForm from "./Registration/RegisterForm";
import { call } from "../api/authentication";
const Register = () => {
  const handleSubmit = (values) => call(values);

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
