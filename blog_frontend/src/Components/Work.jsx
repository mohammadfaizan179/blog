import React from 'react'
import work_1 from '../Assets/Images/work1.png';
import work_2 from '../Assets/Images/work2.png';
import work_3 from '../Assets/Images/work3.png';
import "../Styles/work.css"

const Work = () => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <h2 className='text-center my-5'>How It Works</h2>
                <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
                    <div className='work-img-box'>
                        <img src={work_1} alt="work-1" />
                    </div>
                    <h4 className='my-4'>Fully Responsive</h4>
                    <div>Deserunt nobis possimus aut, blanditiis iusto esse quas similique hic incidunt debitis temporibus deleniti ex praesentium recusandae eos, ad eligendi delectus vero omnis id! Tenetur eaque quod sed cumque?</div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
                    <div className='work-img-box'>
                        <img src={work_2} alt="work-2" />
                    </div>
                    <h4 className='my-4'>Well Documented</h4>
                    <div>Deserunt nobis possimus aut, blanditiis iusto esse quas similique hic incidunt debitis temporibus deleniti ex praesentium recusandae eos, ad eligendi delectus vero omnis id! Tenetur eaque quod sed cumque?</div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
                    <div className='work-img-box'>
                        <img src={work_3} alt="work-3" />
                    </div>
                    <h4 className='my-4'>Easy To Use</h4>
                    <div>Deserunt nobis possimus aut, blanditiis iusto esse quas similique hic incidunt debitis temporibus deleniti ex praesentium recusandae eos, ad eligendi delectus vero omnis id! Tenetur eaque quod sed cumque?</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work;