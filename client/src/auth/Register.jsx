import React from "react";
import RegisterForm from "./Registration/RegisterForm";
import { call } from "../api/authentication";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ history }) => (
    <main>
      <h1 className="container-fluid bg-secondary p-5 text-center">
        Register Form
      </h1>
      <RegisterForm handleSubmit={(values) => {
    call({values, history})}} />
    </main>
  );

export default Register;
