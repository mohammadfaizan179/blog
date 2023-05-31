import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { myContext } from '../App'

const Category = () => {
    const {categories} = useContext(myContext)

    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <h1 className='mt-3 mb-5'>All Categories</h1>
                    {
                        categories.map((category)=>(
                            <div key={category.id} className='col-sm-12 col-md-6 col-lg-4 text-center'>
                                <NavLink to={`/category/${category.id}`} style={{textDecoration:"none", color:"#000"}}>
                                    <img src={category.image} alt="work-1" width={150} height={150} style={{borderRadius:"100%"}} />
                                    <h4 className='mb-5 mt-2'>{category.title}</h4>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Category