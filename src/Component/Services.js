import React from 'react'
import { Card } from 'react-bootstrap';
import images1 from "./images/card-item-1.png"
import images2 from "./images/card-item-2.png"
import images3 from "./images/card-item-3.png"
import Button1 from './Button1';


function Services() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col text-center'>
                        <h1 className='fw-bolder'>Our Services</h1>
                        <p className='fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam diam, nec maximus sem eleifend pretium.</p>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-4'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img className='my-5 mx-auto' style={{ width: "80px" }} src={images1} />
                            <Card.Body>
                                <Card.Title className='text-center text-danger'>Orange</Card.Title>
                                <Card.Text className='text-center'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img className='my-5 mx-auto' style={{ width: "80px" }} src={images2} />
                            <Card.Body>
                                <Card.Title className='text-center text-danger'>Grapes</Card.Title>
                                <Card.Text className='text-center'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img className='my-5 mx-auto' style={{ width: "80px" }} src={images3} />
                            <Card.Body>
                                <Card.Title className='text-center text-danger'>Gauva</Card.Title>
                                <Card.Text className='text-center'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
         <div className='container'>
            <div className='row'>
                <div className='col-5'></div>
                <div className='col-3'>
                <Button1 style={{backgroundColor:"black",padding:"15px 20px 8px 20px",marginBottom:"20px"}}><h6>Read More</h6></Button1>
                </div>
                <div className='col-4'></div>
            </div>
         </div>
        </>
    )
}

export default Services