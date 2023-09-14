import React from 'react'
import "./Contact.css"
import Button1 from './Button1';
import images1 from "./images/orange-dish.png"


function Contact() {
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-9'>
               <h1 className='fw-bold'>Contact Us</h1>
               <form action=''>
                <div class="mb-3">
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Name" className='input-field'/>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Phone Number" className='input-field' />
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" className='input-field' />
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Message" className='input-field' style={{marginTop:"10%"}}/><br />
                    <Button1 style={{backgroundColor:"#FF4500",border:"none",fontWeight:"bold",padding:"10px 35px",marginTop:"40px"}}>SEND</Button1>
                </div>
                </form> 
            </div>
            <div className='col-3'>
                <img src={images1} alt='' className='Lastimg'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact