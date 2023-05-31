import React, { createContext, useEffect, useState } from 'react';
import MyNavbar from './Components/Navbar';
import Footer from './Components/Footer';
import "./style.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Category from './Components/Category';
import PageNotFound from './Components/PageNotFound';
import BlogDetail from './Components/BlogDetail';
import ContactUs from './Components/ContactUs';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Blog from './Components/Blog';
import Dashboard from './Components/Dashboard';
import CategoryBlogs from './Components/CategoryBlogs';
import BlogEdit from './Components/BlogEdit';
import axios from 'axios';
import { getToken } from './services';
import PrivateRoutes from './utils/PrivateRoutes';

export const myContext = createContext()


const App = () => {
  const [store, setStore] = useState({
    "categories" : [],
    "blogs" : [],
    "userBlogs" : [],
    // "getBlogs": getBlogs,
    // "getUserBlogs": getUserBlogs
  })
  const {access} = getToken()

  const getCategories = () => {
    axios.get('http://127.0.0.1:8000/api/category/list/')
    .then((response)=>{
      setStore(values => ({ ...values, ["categories"] : response.data }))
    })
    .catch((errors)=>{
        console.log("errors...", errors)
    })
  }

  const getBlogs = () => {
    axios.get('http://127.0.0.1:8000/api/blog/')
    .then((response)=>{
      setStore(values => ({ ...values, ['blogs'] : response.data }))
    })
    .catch((errors)=>{
        console.log("errors...", errors)
    })
  }

  const getUserBlogs = () => {
    const url = 'http://127.0.0.1:8000/api/blog/'
    const {access} = getToken()
    axios.get(url, {
      headers: {
        'authorization': `Bearer ${access}`
      }
    })
    .then((response)=>{
      setStore(values => ({ ...values, ['userBlogs'] : response.data }))
    })
    .catch((errors)=>{
        console.log("errors...", errors)
    })
  }

  useEffect(()=>{
    getCategories();
    getBlogs();
    getUserBlogs()
  }, [])

  return (
    <>
      <myContext.Provider value={store}>
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blogs' element={<Blog />} />
          <Route exact path='/blog/:id' element={<BlogDetail />} />
          <Route exact path='/categories' element={<Category />} />
          <Route exact path='/category/:category' element={<CategoryBlogs />} />
          <Route exact path='/contact-us' element={<ContactUs />} />
          <Route exact path='/sign-up' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/edit-blog/:id' element={<BlogEdit />} />
          </Route>
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
      </myContext.Provider>
    </>
  )
}

export default App