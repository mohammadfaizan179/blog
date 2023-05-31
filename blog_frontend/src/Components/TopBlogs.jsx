import React, { useContext } from 'react'
import Slider from "react-slick";
import BlogCard from './BlogCard';
import TopBlogsPrevArrow from './TopBlogsPrevArrow';
import TopBlogsNextArrow from './TopBlogsNextArrow';
import { myContext } from '../App'

const TopBlogs = () => {
    const {blogs} = useContext(myContext)

    const settings = {
        infinite: true,
        slidesToShow: 3,
        dots: false,
        speed: 500,
        initialSlide: 0,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <TopBlogsNextArrow />,
        prevArrow: <TopBlogsPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <h2 className='text-center mb-4'>Top Blogs</h2>
                    <Slider {...settings} className='px-5'>

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

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default TopBlogs