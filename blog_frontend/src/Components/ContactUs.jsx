import React from 'react'
import contactUsImg from "../Assets/Images/Contact-Us.jpg"
import "../Styles/contactUs.css"
import { FaPhoneAlt, FaFax, FaMailBulk} from "react-icons/fa";

const Contactus = () => {
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <img src={contactUsImg} alt="Category" style={{width:"100%", height:"450px"}} />
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row text-center my-4'>
                <br />
                <h2 className='text-center'>Contact Us</h2>
                <hr />
                <div className='col-sm-4'>
                    <div>
                        <div className='contactIcon'>
                            <FaPhoneAlt />
                        </div>
                        <p className='mt-2'>1-900-227-1013</p> 
                    </div>
                </div> 
                <div className='col-sm-4'>
                    <div>
                        <div className='contactIcon'>
                            <FaFax />
                        </div>
                        <p className='mt-2'>1-850-2016911</p> 
                    </div>
                </div> 
                <div className='col-sm-4'>
                    <div>
                        <div className='contactIcon'>
                            <FaMailBulk />
                        </div>
                        <p className='mt-2'>blog@gmail.com</p> 
                    </div>
                </div> 
            </div>
            <div className='row my-5'>
                <div className='container'>
                    <form action="" className='mb-5'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div class="form-group">
                                    <label for="first_name">First Name</label>
                                    <input type="text" class="form-control" id="first_name" name='first_name' />
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div class="form-group">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" class="form-control" id="last_name" name='last_name' />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name='email' />
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" id="phone" name='phone' />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea type="textarea" rows={4} class="form-control" id="message" name='message' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus

