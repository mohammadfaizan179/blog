import React, { useState, useEffect, useContext } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import "../Styles/blog-detail.css"
import axios from 'axios';
import { countWords, getDate } from '../utils';
import { getToken } from '../services';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { myContext } from '../App'
import BlogWrite from './BlogWrite';

const BlogDetail = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const [show, setShow] = useState(false);
    // const { getUserBlogs } = useContext(myContext)

    const url = `http://127.0.0.1:8000/api/blog/${id}/`
    const {access} = getToken()
    const navigate = useNavigate();

    const getBlog = async() => {
        await axios.get(url)
        .then((response)=>{
            setBlog(response.data)
        })
        .catch((errors)=>{
            console.log("errors...", errors)
        })
    }

    const deleteBlog = async() => {
        await axios.delete(url, {
            headers: {
                'authorization': `Bearer ${access}`,
            }
        })
        .then((response)=>{
            navigate('/dashboard')
            handleClose()
        })
        .catch((errors)=>{
            console.log("errors...", errors)
        })
    }

    if(blog.created_at){
        const dateObj = getDate(blog.created_at)
        var date = dateObj.getDate();
        var month = dateObj.getMonth();
        var year = dateObj.getFullYear();
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        getBlog();
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={blog.image} alt="Category" style={{width:"100%", height:"400px"}} />
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-sm-9'>
                        <br />
                        <h3>Title: {blog.title}</h3>
                        <h6>Author : {blog.author_fn} {blog.author_ln}</h6>
                        <h6>Category : {blog.category_label}</h6>
                        <h6>Date : { blog.created_at ? (<>{date} - {month} - {year}</>) : ""}</h6>
                        <h6>Words : { blog.description && countWords(blog.description) }</h6>
                        <br />
                        <h5>Description: </h5>
                        <p className='paragraph' style={{paddingRight:"10rem"}}>{blog.description}</p>
                    </div>
                </div>
                {
                    access &&
                    <div className='mb-5'>
                        <button className='btn btn-primary'>Edit</button>
                        <button className='btn btn-danger mx-3' onClick={handleShow}>Delete</button>
                    </div>
                }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Blog</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this blog. This action can't be undo</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={()=> deleteBlog()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BlogDetail