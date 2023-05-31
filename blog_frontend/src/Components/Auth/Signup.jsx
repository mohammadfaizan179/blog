import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const schema = Yup.object({
    "email": Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    "password": Yup.string()
        .min(8, "Password must contain 8 characters")
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    "password2": Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Email must match!")
})

const Signup = () => {
    const [errors, setErrors] = useState(null)

    const registerUser = async(values, resetForm) => {
        const url = "http://127.0.0.1:8000/api/auth/register/"
        await axios.post(url, values)
        .then((response)=>{
            alert("Your are registered successfully!")
            resetForm({values:""})
        })
        .catch((errors)=>{
            setErrors(errors.response.data.errors)
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 my-5'>

                    <Formik
                        initialValues={{
                            "email":"",
                            "password":"",
                            "password2":"",
                        }}
                        validationSchema={schema}
                        onSubmit={(values, {resetForm})=>{
                            registerUser(values, resetForm)
                        }}
                    >
                        <Form style={{width:"100%"}}>
                            <Card style={{ width: '30rem' }} className=' my-5 mx-auto'>
                                <Card.Header>
                                    <h3>Sign Up</h3>
                                </Card.Header>
                                <Card.Body>
                                    <div className='justfify-content-center'>
                                        <label htmlFor="email">Email: </label>
                                        <Field className="form-control" type='email' name='email' />
                                        <span style={{color:"red"}}><ErrorMessage name='email' /></span>
                                        <small style={{color:"red"}}>{errors && errors.email ? errors.email : ""}</small>
                                        <br />

                                        <label htmlFor="password">Password: </label>
                                        <Field className="form-control" type='password' name='password' />
                                        <span style={{color:"red"}}><ErrorMessage name='password' /></span>
                                        <small style={{color:"red"}}>{errors && errors.password ? errors.password : ""}</small>
                                        <br />

                                        <label htmlFor="password2">Confirm Password: </label>
                                        <Field className="form-control" type='password' name='password2' />
                                        <span style={{color:"red"}}><ErrorMessage name='password2' /></span>
                                        <small style={{color:"red"}}>{errors && errors.password2 ? errors.password2 : ""}</small>
                                        <br />
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex">
                                        <Button type="submit" variant="secondary"  className="mx-auto">Register</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Form>
                    </Formik>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup