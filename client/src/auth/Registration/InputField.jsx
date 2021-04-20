import React from "react";
import { Form, Field, ErrorMessage } from "formik";

export const InputField = ({ errors, touched, name, labelName }) => (
  <div className="row mt-2">
    <label htmlFor={name} className="form-label p-0">
      {labelName}
    </label>
    <Field name={name} className="form-control" />
    {errors[name] && touched[name] ? (
      <div style={{ color: "red" }}>{errors[name]}</div>
    ) : null}
  </div>
);
