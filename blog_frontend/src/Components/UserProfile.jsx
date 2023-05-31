import React, { useState, useEffect } from 'react'
import work1 from '../Assets/Images/carousal-1.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { getToken } from '../services';


const UserProfile = () => {
    const [userProfile, setUserProfile] = useState({})
    const [errors, setErrors] = useState(null)
    const [show, setShow] = useState(true);

    const schema = Yup.object({
        "password": Yup.string()
            .required("This field is required"),
        "password2": Yup.string()
            .required("This field is required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    })

    const getUserDetails = async() => {
        const {access, refresh} = getToken()
        const url = "http://127.0.0.1:8000/api/auth/profile/"
        const config = {
            headers: { Authorization: `Bearer ${access}` }
        };
        await axios.get(url, config)
        .then((response)=>{
            setUserProfile(response.data)
        })
        .catch((errors)=>{
            console.log(errors)
        })
    }

    const changePassword = async(values, resetForm) => {
        alert("hi")
        const url = "http://127.0.0.1:8000/api/auth/changepassword/"
        const {access, refresh} = getToken()
        const config = {
            headers: { Authorization: `Bearer ${access}` }
        };
        await axios.post(url, values, config)
        .then((response)=>{
            console.log("success...", response.data)
            setShow(false)
            resetForm({values:""})
        })
        .catch((errors)=>{
            setShow(true)
            setErrors(errors.response.data.errors)
        })
    }



    useEffect(() => {
        getUserDetails()
    }, [])
    
    return (
        <div className='container'>
            <div className='row'>
                <h2>Profile Details</h2>

                <div className='mb-4'>
                    <img src={userProfile.image && userProfile.image} alt="profile" width={100} height={100} style={{borderRadius:"100%"}} />
                </div>
                    <div className='col-sm-12 col-md-6'><h5>Email :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.email ? userProfile.email : "N/A"}</h5></div>

                    <div className='col-sm-12 col-md-6'><h5>First Name :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.first_name ? userProfile.first_name : "N/A"}</h5></div>
                    
                    <div className='col-sm-12 col-md-6'><h5>Last Name :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.last_name ? userProfile.last_name : "N/A"}</h5></div>

                    <div className='col-sm-12 col-md-6'><h5>Gender :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.gender ? userProfile.gender : "N/A"}</h5></div>

                    <div className='col-sm-12 col-md-6'><h5>Age :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.age ? userProfile.age : "N/A"}</h5></div>

                    <div className='col-sm-12 col-md-6'><h5>Country :</h5></div>
                    <div className='col-sm-12 col-md-6'><h5>{userProfile.country ? userProfile.country : "N/A"}</h5></div>
                <h3 className='mt-5 mb-3'>Change Password</h3>

                    <Formik
                        initialValues={{
                            "password": "",
                            "password2": "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values, {resetForm})=>{
                            changePassword(values, resetForm)
                        }}
                    >
                        <Form className='border p-3'>
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

                            <label htmlFor="password">Old Password: </label>
                            <Field className="form-control" type='password' name='password' placeholder="Enter password" />
                            <span style={{color:"red"}}><ErrorMessage name='password' /></span>
                            <small style={{color:"red"}}>{errors && errors.password ? errors.password : ""}</small>
                            <br />

                            <label htmlFor="password2">New Password: </label>
                            <Field className="form-control" type='password' name='password2' placeholder="Enter password" />
                            <span style={{color:"red"}}><ErrorMessage name='password2' /></span>
                            <small style={{color:"red"}}>{errors && errors.password2 ? errors.password2 : ""}</small>
                            <br />

                            <div className="d-flex">
                                <button type='submit' className="btn btn-primary mx-auto"> Change Password</button>
                            </div>

                        </Form>
                    </Formik>
            </div>
        </div>
    )
}

export default UserProfile