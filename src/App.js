import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Your firstName is required.'),
    lastName: Yup.string()
        .required('Your lastName is required.'),
    email: Yup.string()
        .email('Invalid email')
        .required('Your Email is required'),
    password: Yup.string()
        .required("Strong Password Required.")
        .min(8, 'Too Short!')
        .max(14, 'Too Long!'),
    confirmPassword: Yup.string()
        .required("Password not match")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    cvv: Yup.string()
        .required("CVV code required.")
        .min(4,'To Short!')
        .max(4,'To Long!'),
    paymentMethod: Yup.string()
        .required("Option required.")
});

const App = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                cvv: '',
                paymentMethod:'',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div style={{ marginTop: '30px' }}>
                        <label>First Name:</label>
                        <br />
                        <Field name="firstName" style={{ marginTop: '5px' }} />
                        {errors.firstName && touched.firstName ? (
                            <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.firstName}</div>
                        ) : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <label>Last Name:</label>
                        <br />
                        <Field name="lastName" style={{ marginTop: '5px' }} />
                        {errors.lastName && touched.lastName ? (
                            <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.lastName}</div>
                        ) : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <label>Email:</label>
                        <br />
                        <Field name="email" type="email" style={{ marginTop: '5px' }} />
                        {errors.email && touched.email ? <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.email}</div> : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <label>Password:</label>
                        <br />
                        <Field name="password" type="password" style={{ marginTop: '5px' }} />
                        {errors.password && touched.password ? <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.password}</div> : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <label>Confirm Password:</label>
                        <br />
                        <Field name="confirmPassword" type="password" style={{ marginTop: '5px' }} />
                        {errors.confirmPassword && touched.confirmPassword ? <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.confirmPassword}</div> : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <Field name="paymentMethod" value="Paypal" type="radio" style={{ marginTop: '5px',marginRight:'10px' }} />
                        <label>Paypal</label>
                        {errors.paymentMethod && touched.paymentMethod ? <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.paymentMethod}</div> : null}
                    </div>
                    <br />
                    <div style={{ marginTop: '5px' }}>
                        <label>CVV:</label>
                        <br />
                        <Field name="cvv" type="text" style={{ marginTop: '5px' }} />
                        {errors.cvv && touched.cvv ? <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.cvv}</div> : null}
                    </div>
                    <br />
                    <button type="submit" style={{ marginTop: '30px' }}>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default App;