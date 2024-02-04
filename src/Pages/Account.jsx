import React from 'react'
import profileImg from '../assets/profile.png'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import BlogCard from '../Components/BlogCard';


function Account() {
  return (
    <>
    <Navbar style={{position:"fixed",width:"100%",top:"0",zIndex:"2"}} expand="lg" className="bg-black border-bottom" >
      <Container>
        <Navbar.Brand style={{color:'red'}} >BLOGGER.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><input type="text" style={{width:'500px',marginRight:'150px'}} placeholder='Search Blogs' className='' /></Nav.Link>
            <Nav.Link  style={{color:'red'}} >HOME</Nav.Link>
            <Nav.Link href='/myblogs' style={{color:'red'}} >MY BLOGS</Nav.Link>
            <Nav.Link style={{color:'red'}} >ACCOUNT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Row className='ms-5'>
            <Col lg={5}  >
            <div className=' ms-5' style={{marginTop:'100px'}}>
                
                <Card style={{ width: '100%' ,borderRadius:'10px'}}>
                <h5 className='text-center'>PROFILE</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='text-center'>
                            <img src={profileImg} alt="" height={'170px'} width={'30%'} />
                        </ListGroup.Item>
                        <ListGroup.Item>Username</ListGroup.Item>
                        <ListGroup.Item>Email</ListGroup.Item>
                        <ListGroup.Item>Personal Website</ListGroup.Item>
                        <ListGroup.Item className='text-center'>
                            <button className='btn btn-warning form-control'>UPDATE PROFILE</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <br />
                <Card style={{ width: '100%' ,borderRadius:'10px'}}>
                <h5 className='text-center'>OVERVIEW</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item>TOTAL NUMBER OF BLOGS</ListGroup.Item>
                        <ListGroup.Item>FOLLOWERS</ListGroup.Item>
                        <ListGroup.Item>FAVOURITESx</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            
            </Col>
            {/* <Col lg={1}></Col> */}
            <Col  lg={6} className='mt-4'>
            <div className=' ms-3' style={{marginTop:'100px'}}>
                <Card style={{ width: '100%' ,borderRadius:'10px'}}>
                <h5 className='text-center'>FAVOURITES</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col lg={6}><BlogCard></BlogCard></Col>
                            </Row>
                        </ListGroup.Item>
                        <br /> <br />
                        <ListGroup.Item>
                            <button className='btn btn-warning form-control'>VIEW ALL FAVOURITES</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Account