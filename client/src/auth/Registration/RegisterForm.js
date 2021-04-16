import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignupSchema from "./SignupSchema";
import { INITIAL_VALUES } from "./InitialValues";
import { InputField } from "./InputField";

const RegisterForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <div className="container">
          <div className="col-md-8 col-md-offset-3">
            <div className="form-group">
              <Form>
                {/* <InputField /> */}
                <div className="row mt-2">
                  <label htmlFor="firstName" className="form-label p-0">
                    First name
                  </label>
                  <Field name="firstName" className="form-control" />
                  {errors.firstName && touched.firstName ? (
                    <div style={{ color: "red" }}>{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="row mt-2">
                  <label htmlFor="lastName" className="form-label p-0">
                    Last name
                  </label>
                  <Field name="lastName" className="form-control" />
                  {errors.lastName && touched.lastName ? (
                    <div style={{ color: "red" }}>{errors.lastName}</div>
                  ) : null}
                  {/* <ErrorMessage name="lastName" /> */}
                </div>
                <div className="row mt-2">
                  <label htmlFor="email" className="form-label p-0">
                    Email
                  </label>
                  <Field name="email" type="email" className="form-control" />
                  {errors.email && touched.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </div>
                <div className="row mt-2">
                  <label htmlFor="password" className="form-label p-0">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </div>
                <div className=" mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 "
                    // disabled={!touched}
                    // style={{ backgroundColor: touched ? "#000" : "#FFF" }}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
