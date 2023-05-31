import React from 'react';
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className='container-fluid footer' 
        // style={{position:"relative", left:0, right:0, bottom:0}}
    >
        <div className='row text-center text-muted'>
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <h3 className='my-4'>Resources</h3>
                <p>Help & Support</p>
                <p>Reviews</p>
                <p>Resources</p>
                <p>Comunity</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <h3 className='my-4'>Company</h3>
                <p>Why</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
                <h3 className='my-4'>Follow us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Instagram</p>
            </div>
        </div>
    </div>
  )
}

export default Footer