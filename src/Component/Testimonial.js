import React from 'react'
import images1 from "./images/client.png"

function Testimonial() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col text-center my-4'>
                     <h1 className='fs-2 fw-bold'>Testimonial</h1>
                     <h6 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium.</h6>
                     <img src={images1} alt='' className='mt-5'/>
                     <h4 className='fs-3'>Johnhex</h4>
                     <h6 className='mt-3 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium. Phasellus feugiat fringilla luctus. Sed blandit, sem et gravida eleifend, mauris sapien porttitor dui, ac gravida nisi odio et risus. Suspendisse accumsan eros eu sem laoreet, id pellentesque dui semper. Duis lorem leo, maximus non eros accumsan, iaculis vehicula mi. Suspendisse mauris mi, facilisis ut neque ut, tincidunt</h6>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonial