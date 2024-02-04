import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import authImage from '../assets/auth.png'


function Authentication({insideRegister}) {
  return (
    <>
        <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
            <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-arrow-left'></i>Back To Home</Link>
            <div className="card shadow p-5 bg-primary">
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <img src={authImage} alt="" width={'100%'} height={'350px'} />
                    </Col>
                    <Col lg={6}>
                        <h1 className='fw-bolder text-light mt-2'>BLOGGER.com</h1>
                        <h5 className='fw-bolder text-light mt-2'>Sign {insideRegister?'Up':'In'} To your Account</h5>
                        <Form>
                        {
                            insideRegister&&
                            <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="uName" placeholder="Enter Username" />
                            </Form.Group>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        {
                            insideRegister?
                            <div>
                                <button  className='btn btn-light mb-2'>Register</button>
                                <p className='text-black'>Already have an account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
                            </div>:
                            <div>
                                <button className='btn btn-light mb-2'>Login</button>
                                <p className='text-black'>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
                            </div>
                        }
                        </Form>
                    </Col>

                </Row>

            </div>
        </div>
        {/* <ToastContainer autoclose={3000} theme='colored'/> */}
    </div>
    </>
  )
}

export default Authentication