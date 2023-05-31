import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { setToken } from '../../services';
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [errors, setErrors] = useState(null)
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const schema = Yup.object({
        "email": Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        "password": Yup.string()
            .min(8, "Password must contain 8 characters")
            .required("Password is required")
    })
    const loginUser = async(values, resetForm) => {
        const url = "http://127.0.0.1:8000/api/auth/login/"
        await axios.post(url, values)
        .then((response)=>{
            console.log("success...", response.data)
            setShow(false)
            resetForm({values:""}) 
            setToken(response.data.token)
            navigate("/dashboard")
        })
        .catch((errors)=>{
            console.log("errors...", errors.response.data.errors)
            setShow(true)
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
                                "email": "",
                                "password": "",
                            }}
                            validationSchema={schema}
                            onSubmit={(values, {resetForm})=>{
                                loginUser(values, resetForm)
                            }}
                        >
                            <Form>
                                <Card style={{ width: '30rem' }} className=' my-5 mx-auto'>
                                    <Card.Header>
                                        <h3>Login</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className='justfify-content-center'>
                                                {
                                                    errors && errors.non_field_errors 
                                                    ?(
                                                        show &&
                                                        <Alert key="danger" variant='danger' onClose={() => setShow(false)} dismissible>
                                                            {errors.non_field_errors }
                                                        </Alert>
                                                    )
                                                    : ""
                                                }
                                            <label htmlFor="email">Email: </label>
                                            <Field className="form-control" type='email' name='email' placeholder="Enter email" />
                                            <span style={{color:"red"}}><ErrorMessage name='email' /></span>
                                            <small style={{color:"red"}}>{errors && errors.email ? errors.email : ""}</small>
                                            <br />

                                            <label htmlFor="password">Password: </label>
                                            <Field className="form-control" type='password' name='password' placeholder="Enter password" />
                                            <span style={{color:"red"}}><ErrorMessage name='password' /></span>
                                            <small style={{color:"red"}}>{errors && errors.password ? errors.password : ""}</small>
                                            <br />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex">
                                            <Button type='submit' variant="secondary"  className="mx-auto">Login</Button>
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

export default Login