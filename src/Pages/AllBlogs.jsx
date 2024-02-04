import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import BlogCard from '../Components/BlogCard';



function AllBlogs() {
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
    <div style={{marginTop:'100px'}} className='container-fluid w-100'>
        <div className='ps-3 pe-3'>
        <h3>TRAVEL BLOGS</h3>
        <hr />
        <Row>  
            <Col lg={3}>
                <BlogCard></BlogCard>
            </Col>  
        </Row>
        <p className='text-center'>View All Blogs</p>
        </div>
        <div className='ps-3 pe-3 mt-5'>
        <h3>FILM BLOGS</h3>
        <hr />
        <Row>
            <Col lg={3}>
                <BlogCard></BlogCard>
            </Col>
        </Row>
        <p className='text-center'>View All Blogs</p>

        </div>
        <div className='ps-3 pe-3 mt-5'>
        <h3>TECHNICAL BLOGS</h3>
        <hr />
        <Row>
            <Col lg={3}>
                <BlogCard></BlogCard>
            </Col>
        </Row>
        <p className='text-center'>View All Blogs</p>

        </div>
        
    </div>
    </>
  )
}

export default AllBlogs