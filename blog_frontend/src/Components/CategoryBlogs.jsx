import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import BlogCard from './BlogCard'
import axios from 'axios';


const CategoryBlogs = () => {
    const {category} = useParams()
    const [categoryBlogs, setCategoryBlogs] = useState({})

    const getCategoryBlogs = () => {
        axios.get(`http://127.0.0.1:8000/api/category/${category}/blogs/`)
        .then((response)=>{
            // console.log("res...", response.data)
            setCategoryBlogs(response.data)
        })
        .catch((errors)=>{
            console.log("errors...", errors)
        })
      }
      useEffect(()=>{
        getCategoryBlogs();
      }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={categoryBlogs.image} alt="Category" style={{width:"100%", height:"400px"}} />
                        <br /><br />
                        <h3>Category : {categoryBlogs.title}</h3>
                    </div>
                </div>
                <div className='row my-4'>
                    {
                        categoryBlogs.category_blogs &&
                        categoryBlogs.category_blogs.length > 0 ?
                            categoryBlogs.category_blogs.map((blog)=>(
                                <div key={blog.id} className='col-sm-12 col-md-6 col-lg-4'>
                                    <BlogCard 
                                        title={blog.title}
                                        image={blog.image}
                                        description={blog.description}
                                        id={blog.id}
                                        category_label={blog.category_label}
                                    />
                                </div>
                            ))
                            :(
                                <h4 className='text-center mt-3 mb-5'>No Blog Found In This Category</h4>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryBlogs