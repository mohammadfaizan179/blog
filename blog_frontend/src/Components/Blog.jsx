import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { myContext } from '../App'

const Blog = () => {
    const {blogs} = useContext(myContext)
    console.log("blogs...", blogs)
    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <h1 className='mt-3 mb-4'>All Blogs</h1>
                    {
                        blogs.map((blog)=>(
                            <div key={blog.id} className='col-sm-4'>
                                <BlogCard 
                                    title={blog.title}
                                    image={blog.image}
                                    description={blog.description}
                                    id={blog.id}
                                    category_label={blog.category_label}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Blog