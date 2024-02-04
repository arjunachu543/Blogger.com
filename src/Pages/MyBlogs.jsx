import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Add from '../Components/Add';
import Edit from '../Components/Edit';




function MyBlogs() {
   
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
            <Nav.Link href='/profile' style={{color:'red'}} >ACCOUNT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
            <div style={{marginTop:'60px'}}>
                <h3 className='m-3 p-3'>MY BLOGS</h3>
                <hr />
                <div className='text-center'>
                <Add></Add>
                </div>
               <div className='p-3'>
                    <Card cla>
                        <Card.Header as="h5">Project Title</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <div style={{textAlign:'end'}}>
                            <Edit></Edit>
                            <i className='fa-solid fa-trash text-danger fa-2x'style={{fontSize:'30px',marginLeft:'20px',marginRight:'10px'}}></i>
                            </div>
                        </Card.Body>
                    </Card>
               </div>
            </div>

        </>
    )
}

export default MyBlogs