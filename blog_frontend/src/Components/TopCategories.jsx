import React, { useContext } from 'react'
import { myContext } from '../App'
import { NavLink } from 'react-router-dom'

const TopCategories = () => {
    const {categories} = useContext(myContext)

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center mb-4'>Top Categories</h2>
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
    )
}

export default TopCategories