import React from 'react'
import home from '../assets/homeImg.png'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    
    <div style={{height:'100vh'}}>
        <Row style={{marginTop:'40px',width:'100%'}} >
            <Col lg={6} style={{marginTop:'8%',marginLeft:'50px'}}>
                <h2 className='text-danger'>BLOGGER.com</h2>
                
                <h3 className='text-primary mb-4'>WELCOME TO THE WORLD OF THOUGHTS</h3>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking</h5>
                <Link to={'/login'}><button className='btn btn-danger mt-3'>Get Started <i className='fa-solid fa-arrow-right ms-1 mt-2'></i></button></Link>
            </Col>
            <Col lg={5}>
                <img src={home} alt="" height={'500px'} width={'700px'} />
            </Col>
        </Row>
    </div>
    <h3 className='text-center'>EXPLORE</h3>
    
        <div className='container-fluid w-100 bg-white '>
            <Row className='mt-5' style={{marginLeft:'120px'}} >
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>TRAVEL BLOGS</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>FILM BLOGS</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>TECH BLOGS</Card.Title>
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            <div className='text-center mt-5 mb-5'>
                <Link style={{textDecoration:'none'}}><h6 className='text-black'>VIEW ALL BLOGS</h6></Link>
            </div>     
        </div>

    
    
    </>
  )
}

export default Home