import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import * as Yup from 'yup';
import { signup } from '../../store/actions';
import './auth.scss';

const SignUp: React.FC = (props: any) => {
    const { processing } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    let text = 'CONTINUE';
    if (processing) {
        text = 'Please wait...';
    }
    const logvalidationSchema = Yup.object().shape({
        matriculation_number: Yup.string()
            .min(10, 'Invalid matriculation_number')
            .required('Provide your matriculation_number please'),
        email: Yup.string().email('Hey,just letting you know that your email is quite weird').required('Provide your email please'),
        password: Yup.string()
            .min(9, 'Password must be 9 characters or longer')
            .required('Provide a password please')
    });

    const handleSubmit = async (values: any, { setSubmitting, setErrors }: any) => {
        try {
            await dispatch(signup(values))
            return props.history.push(`/dashboard/overview`);
        } catch (err) {
            console.log('log err', err);
            console.log(err.message);
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className='page_content'>
                <div className='page_content_container'>
                    <div className='page_content_container2'>
                        <Formik
                            initialValues={{
                                matriculation_number: '',
                                email: '',
                                password: ''
                            }}
                            validationSchema={logvalidationSchema}
                            onSubmit={handleSubmit}
                            render={formProps => {
                                return (
                                    <Form className="form">
                                        <h2>Sign Up</h2>
                                        <p>Join the community,Sign up and move on to your dashboard</p>
                                        <div className="input-container">
                                            <Field type="text" name="matriculation_number" placeholder="Matriculation_Number" />
                                            <ErrorMessage name="matriculation_number" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className="input-container">
                                            <Field type="text" name="email" placeholder="Email" />
                                            <ErrorMessage name="email" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className="input-container">
                                            <Field type="password" name="password" placeholder="Password" />
                                            <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className="input-container btn_container">
                                            <button disabled={formProps.isSubmitting}>{text}</button>
                                            <p>Already have an account?<Link to='/auth/login'>Click here to sign in</Link></p>
                                        </div>
                                    </Form>
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
