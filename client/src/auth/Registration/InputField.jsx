import React from "react";
import { Form, Field, ErrorMessage } from "formik";

export const InputField = ({ errors, touched, name }) => (
  <div className="row mt-2">
    <label htmlFor={name} className="form-label p-0">
      First name
    </label>
    <Field name={name} className="form-control" />
    {errors[name] && touched[name] ? (
      <div style={{ color: "red" }}>{errors[name]}</div>
    ) : null}
  </div>
);
