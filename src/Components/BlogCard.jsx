import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import landingImg from '../assets/BlandingImg.jpg'
import { Avatar } from '@mui/material';
import profileImg from '../assets/profile.png'
import { Link } from 'react-router-dom';
import blog from '../assets/BLOG.jpeg'

function BlogCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog} height={'150px'} />
                <Card.Body>
                    <Card.Title>BLOG TITLE</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={handleShow} variant="primary">READ BLOG</Button>
                </Card.Body>
            </Card>

            <Modal
                
                centered
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                scrollable
            >
             
                    <Modal.Header  closeButton>
                        
                            <Modal.Title>
                               <p> Blog Title </p>
                               <Link to={'/aprofile'} style={{textDecoration:'none'}}>
                                   <div className='d-flex'>
                                   <Avatar className='' style={{alignContent:'end'}} alt="Remy Sharp" src={profileImg} />
                                   <h5 className='ms-1'>author name</h5>
                                   </div>
                               </Link>
                            </Modal.Title>
                            
                            
                       
                    </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={landingImg} width={'100%'} height={'300px'} alt="" />
                    </div>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi id debitis sunt hic autem dolor, cupiditate, alias accusantium quia eius quisquam commodi rem! Officiis, in! Asperiores numquam adipisci iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates esse impedit eos consequatur aliquid pariatur quae autem maiores aut, incidunt ratione dolorum numquam rerum, beatae sit? Quas, natus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa id consequuntur, pariatur vel quisquam laudantium voluptates sequi nesciunt voluptas consectetur totam ratione aspernatur architecto tempore error fugit deserunt velit.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Add to Favourites</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BlogCard