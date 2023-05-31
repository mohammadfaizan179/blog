import React from 'react'
import MyCarousel from './Carousal';
import Work from './Work';
import TopBlogs from './TopBlogs';
import TopCategories from './TopCategories';

const Home = () => {
  return (
    <div>
        <MyCarousel />
        <Work />
        <TopBlogs />
        <TopCategories />
    </div>
  )
}

export default Home