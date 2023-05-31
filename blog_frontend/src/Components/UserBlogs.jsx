import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { myContext } from '../App'
import styles from "../Styles/dashboard.module.css"

const UserBlogs = ({setWriteBlog}) => {
    const {userBlogs} = useContext(myContext)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between flex-row'>
                        <h1 className={`mb-4 ${styles.all_blog}`}>My Blogs</h1>
                        <div>
                            <button className='btn btn-primary' onClick={()=>{setWriteBlog(true)}}>Write Blog</button>
                        </div>
                    </div>
                    {
                        userBlogs.map((blog)=>(
                            <div key={blog.id} className='col-sm-12 col-lg-6'>
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

export default UserBlogs