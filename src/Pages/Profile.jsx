import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Collapse, Row } from 'react-bootstrap';
import profileImg from '../assets/profile1.png'
import BlogCard from '../Components/BlogCard';
import { Avatar } from '@mui/material';



function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Navbar style={{position:"fixed",width:"100%",top:"0",zIndex:"2"}} expand="lg" className="bg-black border-bottom" >
      <Container>
        <Navbar.Brand style={{color:'red'}} >BLOGGER.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><input type="text" style={{width:'500px',marginRight:'150px'}} placeholder='Search Blogs' className='form-control' /></Nav.Link>
            <Nav.Link href='/allblogs'  style={{color:'red'}} >HOME</Nav.Link>
            <Nav.Link href='/myblogs' style={{color:'red'}} >MY BLOGS</Nav.Link>
            <Nav.Link style={{color:'red'}} >ACCOUNT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div style={{marginTop:'100px'}}>
        <h3 className='text-center'>AUTHOR NAME</h3>
        <br />
    <Row className='align-items-center'>
            <Col lg={6} md={4} className='text-center'>
            <label>
            <Avatar className='' style={{alignContent:'end',height:'200px',width:'200px'}} alt="Remy Sharp" src={profileImg} />
            </label>
            </Col>
            <Col lg={6} md={12} >
              <h5  className='text-primary' >TOTAL BLOGS:</h5>
              <h5  className='text-primary' >FOLLOWERS:</h5>
              <h5  className='text-primary' >PERSONAL WEBSITE:</h5>
            </Col>
          </Row>
          <br />
          <div className='p-3'><button  onClick={()=>setOpen(!open)} className='btn btn-warning form-control'>VIEW ALL BLOGS <i className='fa-solid fa-caret-down'></i></button></div>

          <Collapse in={open}>
            <div className="text-center p-3" id="example-collapse-text">
                    <BlogCard></BlogCard>
            </div>
        </Collapse>
    </div>
    </>
  )
}

export default Profile