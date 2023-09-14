import React from 'react'
import Button1 from './Button1';
import images1 from "./images/grapes.png"
import images2 from "./images/orange.png"
import images3 from "./images/gauva.png"

function Fruits() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col text-center'>
                        <h1 className='fw-bolder'>Fresh Fruits</h1>
                        <p className='fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium.</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-8'>
                        <h5 className='fs-3 fw-bold mb-4'>Best Fresh Orange</h5>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium. Phasellus feugiat fringilla luctus. Sed blandit, sem et gravida eleifend, mauris sapien porttitor dui, ac gravida nisi odio et risus. Suspendisse accumsan eros eu sem laoreet, id pellentesque dui semper.</p>
                        <Button1 style={{ backgroundColor: "black",padding:"12px 25px 12px 25px" }} >Buy Now</Button1>
                    </div>
                    <div className='col'>
                        <img src={images2} alt='' className='ms-2 h-75'/>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-8'>
                        <h5 className='fs-3 fw-bold mb-4'>Best Fresh Grapes</h5>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium. Phasellus feugiat fringilla luctus. Sed blandit, sem et gravida eleifend, mauris sapien porttitor dui, ac gravida nisi odio et risus. Suspendisse accumsan eros eu sem laoreet, id pellentesque dui semper.</p>
                        <Button1 style={{ backgroundColor: "black",padding:"12px 25px 12px 25px" }} >Buy Now</Button1>
                    </div>
                    <div className='col'>
                        <img src={images1} alt='' className='ms-5'/>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-8'>
                        <h5 className='fs-3 fw-bold mb-4'>Best Fresh Gauva</h5>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium. Phasellus feugiat fringilla luctus. Sed blandit, sem et gravida eleifend, mauris sapien porttitor dui, ac gravida nisi odio et risus. Suspendisse accumsan eros eu sem laoreet, id pellentesque dui semper.</p>
                        <Button1 style={{ backgroundColor: "black",padding:"12px 25px 12px 25px"}} >Buy Now</Button1>
                    </div>
                    <div className='col'>
                        <img src={images3} alt='' className='h-75 ms-3'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fruits