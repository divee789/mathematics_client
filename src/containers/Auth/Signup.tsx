import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as Yup from "yup";
import { signup } from "../../store/actions";
import "./auth.scss";

const SignUp: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    padding: "1rem",
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
  };

  const signUpValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("Provide your first name please"),
    last_name: Yup.string().required("Provide your last name please"),
    level: Yup.string().required("Provide your current level please"),
    department: Yup.string().required("Provide your department please"),
    matriculation_number: Yup.string()
      .min(10, "Invalid matriculation_number")
      .required("Provide your matriculation_number please"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Provide a password please")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, setErrors }: any,
  ) => {
    try {
      setLoading(true);
      values.level = Number(values.level);
      await dispatch(signup(values));
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
        <div className="page_content_container">
          <div className="page_content_container2">
            <Formik
              initialValues={{
                matriculation_number: "",
                password: "",
                first_name: "",
                last_name: "",
                level: "",
                department: "",
              }}
              validationSchema={signUpValidationSchema}
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
                      <h2>Sign Up</h2>
                      <p>
                        Join the community,Sign up and move on to your dashboard
                      </p>
                      <div className="input-container-dual">
                        <div>
                          <Field
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                          />
                          <ErrorMessage
                            name="first_name"
                            render={(msg) => <div className="error">{msg}</div>}
                          />
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                          />
                          <ErrorMessage
                            name="last_name"
                            render={(msg) => <div className="error">{msg}</div>}
                          />
                        </div>
                      </div>
                      <div className="input-container-dual">
                        <div>
                          <select
                            name="level"
                            onChange={formProps.handleChange}
                            value={formProps.values.level}
                          >
                            <option
                              value=""
                              label="Select your current level"
                            />
                            <option value="400" label="400" />
                            <option value="300" label="300" />
                            <option value="200" label="200" />
                            <option value="100" label="100" />
                          </select>
                          <ErrorMessage
                            name="level"
                            render={(msg) => <div className="error">{msg}</div>}
                          />
                        </div>
                        <div>
                          <select
                            name="department"
                            value={formProps.values.department}
                            onChange={formProps.handleChange}
                          >
                            <option value="" label="Select your department" />
                            <option
                              value="Pure mathematics"
                              label="Pure mathematics"
                            />
                            <option
                              value="Applied Mathematics"
                              label="Applied Mathematics"
                            />
                            <option
                              value="Pure and Applied"
                              label="Pure and Applied"
                            />
                          </select>
                          <ErrorMessage
                            name="department"
                            render={(msg) => <div className="error">{msg}</div>}
                          />
                        </div>
                      </div>
                      <div className="input-container">
                        <Field
                          type="text"
                          name="matriculation_number"
                          placeholder="Matriculation_Number"
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
                          Already have an account?
                          <Link to="/auth/login">Click here to sign in</Link>
                        </p>
                      </div>
                    </Form>
                  </>
                );
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignUp);
