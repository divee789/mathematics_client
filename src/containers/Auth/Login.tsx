import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../store/actions";

import image1 from "../../assets/images/shubham-sharan-Z-fq3wBVfMU-unsplash.jpg";
import "./auth.scss";

const LogIn = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const styles = {
    padding: "1rem",
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
  };

  const logInValidationSchema = Yup.object().shape({
    matriculation_number: Yup.string()
      .min(10, "Invalid matriculation_number")
      .required("Provide your matriculation_number please"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Provide a password please"),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, setErrors }: any,
  ) => {
    try {
      setLoading(true);
      await dispatch(login(values));
      setLoading(false);
      return props.history.push(`/dashboard/overview`);
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page_content">
        <div className="page_content_item">
          <Formik
            initialValues={{
              matriculation_number: ("" as unknown) as string,
              password: "",
            }}
            validationSchema={logInValidationSchema}
            onSubmit={handleSubmit}
            render={(formProps) => {
              return (
                <>
                  {error && (
                    <p
                      style={styles}
                      className="error_message"
                      onClick={() => setError(null)}
                    >
                      {error}
                    </p>
                  )}
                  <Form className="form">
                    <h2>Welcome Back</h2>
                    <p>
                      Welcome back, please log in to your account to access your
                      dashboard
                    </p>
                    <div className="input-container">
                      <Field
                        type="text"
                        name="matriculation_number"
                        placeholder="Matriculation Number"
                      />
                      <ErrorMessage
                        name="matriculation_number"
                        render={(msg) => <div className="error">{msg}</div>}
                      />
                    </div>
                    <div className="input-container">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        render={(msg) => <div className="error">{msg}</div>}
                      />
                    </div>
                    <div className="input-container btn_container">
                      <button disabled={formProps.isSubmitting}>
                        {loading ? "Please wait.." : "PROCEED"}
                      </button>
                      <p>
                        Can't remember your password?{" "}
                        <Link to="/password_reset_request">Reset</Link>
                      </p>
                      <p>
                        Don't have an account?{" "}
                        <Link to="/auth/signup">Click here to register</Link>
                      </p>
                    </div>
                  </Form>
                </>
              );
            }}
          />
        </div>
        <div className="page_content_item2">
          <img src={image1} alt="classroom" />
        </div>
      </div>
    </>
  );
};

export default withRouter(LogIn);
