import React from "react";
import { Form, Field, ErrorMessage } from "formik";

export const InputField = ({ errors, touched, name }) => {
  return (
    <div className="row mt-2">
      <label htmlFor={name} className="form-label p-0">
        First name
      </label>
      <Field name={name} className="form-control" />
      {errors.firstName && touched.firstName ? (
        <div style={{ color: "red" }}>{errors.firstName}</div>
      ) : null}
    </div>
  );
};
