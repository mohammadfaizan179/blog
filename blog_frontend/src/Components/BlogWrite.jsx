import React, { useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { getToken } from '../services';
import { myContext } from '../App'

const BlogWrite = ({ setWriteBlog }) => {
    const [errors, setErrors] = useState(null)
    const [show, setShow] = useState(true);
    const {categories} = useContext(myContext)

    const schema = Yup.object({
        "category": Yup.number()
            .required("This field is required"),
        "title": Yup.string()
            .required("This field is required"),
        "description": Yup.string()
            .required("This field is required"),
        "image": Yup.string()
            .required("This field is required"),
    })

    const addBlog = async(values, resetForm) => {
        const {access} = getToken()
        console.log("values...", values)
        console.log("access...", access)
        const url = "http://127.0.0.1:8000/api/blog/"
        let form_data = new FormData();
        form_data.append('title', values.title);
        form_data.append('description', values.description);
        form_data.append('category', values.category);
        form_data.append('image', values.image);

        await axios.post(url,form_data, {
            headers: {
                'authorization': `Bearer ${access}`,
                "Content-Type": "multipart/form-data",
            }
        })
        .then((response)=>{
            console.log("success...", response.data)
            setShow(false)
            resetForm({values:""})
            setWriteBlog(false)
        })
        .catch((errors)=>{
            console.log("errors...1", errors)
            setShow(true)
            setErrors(errors.response.data.errors)
        })
    }

    const handleImageChange = (event, setFieldValue) => {
        setFieldValue('image', event.target.files[0])
    }

    return (
        <>
            <h3 className='mb-3'>Write Blog</h3>

            <div className='border'>
            <Formik
                initialValues={{
                    "category": 0,
                    "title": "",
                    "description": "",
                    "image": "",
                }}
                validationSchema={schema}
                onSubmit={(values, {resetForm})=>{
                    addBlog(values, resetForm)
                }}
            >
            {({ setFieldValue }) => (
                <Form className='container p-3'>
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

                    <label htmlFor="category">Category: </label>
                    <Field as='select' className="form-control" name='category' type='number' placeholder="Enter category" >
                        <option value="" >Select Category</option>
                        {
                            categories.map((category)=>(
                                <option key={category.id} value={category.id}>{category.title}</option>
                            ))
                        }
                    </Field>
                    <span style={{color:"red"}}><ErrorMessage name='category' /></span>
                    <small style={{color:"red"}}>{errors && errors.category ? errors.category : ""}</small>
                    <br />

                    <label htmlFor="title">Title: </label>
                    <Field className="form-control" type='text' name='title' placeholder="Enter title" />
                    <span style={{color:"red"}}><ErrorMessage name='title' /></span>
                    <small style={{color:"red"}}>{errors && errors.title ? errors.title : ""}</small>
                    <br />

                    <label htmlFor="description">Description: </label>
                    <Field className="form-control" component="textarea" rows="4" name='description' placeholder="Enter description" />
                    <span style={{color:"red"}}><ErrorMessage name='description' /></span>
                    <small style={{color:"red"}}>{errors && errors.description ? errors.description : ""}</small>
                    <br />

                    <label htmlFor="image">Thumbnail: </label>
                    <input className="form-control" type='file' name='image' onChange={(e) => handleImageChange(e, setFieldValue)} />
                    <span style={{color:"red"}}><ErrorMessage name='image' /></span>
                    <small style={{color:"red"}}>{errors && errors.image ? errors.image : ""}</small>
                    <br />

                    <div className="d-flex">
                        <button type='submit' className="btn btn-primary">Add Blog</button>
                    </div>

                </Form>
            )}
            </Formik>
            </div>
        </>
    )
}

export default BlogWrite