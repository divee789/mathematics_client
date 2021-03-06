import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';

import Button from '../../Button'
import './index.scss'


const Contact: React.FC = (props: any) => {

    const contactValidationSchema = Yup.object().shape({
        first_name: Yup.string().required('Provide your first name please'),
        last_name: Yup.string().required('Provide your last name please'),
        email: Yup.string().email('Hey,just letting you know that your email is quite weird').required('Provide your email please'),
        phone_number: Yup.number().required('Please provide a contact number'),
        message: Yup.string().required('Please state your issue or message in the appropriate field')
    })

    const handleSubmit = (values: any, { setSubmitting, setErrors }: any) => {
        alert('hello')
        console.log('values', values)
        setSubmitting(false)
        return
    }

    return (
        <>
            <section className='contact_form_section'>
                <div className='bg'></div>
                <h1>Have a challenge?</h1>
                <h1>Let's get in touch now</h1>

                <div className="contact_form">
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            phone_number: '',
                            message: '',
                        }}
                        validationSchema={contactValidationSchema}
                        onSubmit={handleSubmit}
                        render={formProps => {
                            return (
                                <>
                                    <Form className='form'>
                                        <div className="input_container">
                                            <div className='ff'>
                                                <div className='label'>First Name</div>
                                                <Field type='text' name='first_name' placeholder='First Name' />
                                                <ErrorMessage name="first_name" render={msg => <div className="error">{msg}</div>} />
                                            </div>
                                            <div className='ll'>
                                                <div className='label'>Last Name</div>
                                                <Field type='text' name='last_name' placeholder='Last Name' />
                                                <ErrorMessage name="last_name" render={msg => <div className="error">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="inc">
                                            <div className='label'>Your Email Address</div>
                                            <Field type='email' name='email' placeholder='email' />
                                            <ErrorMessage name="email" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className="inc">
                                            <div className='label'>Your Phone Number</div>
                                            <Field type='number'
                                                pattern="[0-9]*" name='phone_number' placeholder='08024110355' />
                                            <ErrorMessage name="phone_number" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className="inc">
                                            <div className='label'>Your Message</div>
                                            <Field name="message" as="textarea" placeholder='Please, provide a short description of your challenge here' />
                                            <ErrorMessage name="message" render={msg => <div className="error">{msg}</div>} />
                                        </div>
                                        <div className='btn'>
                                            <Button type='submit' className={'btn_submit'} disabled={formProps.isSubmitting} colored>Submit</Button>
                                        </div>
                                    </Form>
                                </>
                            )
                        }}
                    />
                </div>
            </section>
            {/* <img src={image3} alt="people" className='form-image' /> */}

        </>
    )
}

export default withRouter(Contact)
