import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Row } from 'react-bootstrap';
import editImg from '../assets/edit.png'




function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn btn-primary'>+ CREATE NEW BLOG </button>
    <Modal
                
                centered
                size='xl'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                scrollable
            >
                <Modal.Header closeButton>
                    <h4>CREATE YOUR BLOG</h4>
                </Modal.Header>
                <Modal.Body>
                    <Row >
                        <Col className='text-center' lg={6}>
                            <img className='text-white' src={editImg} alt="" height={'200px'} width={'50%'} style={{borderRadius:'10px'}}/>
                        </Col>
                        <Col lg={6}>
                            <h4 className='mt-5'>ADD COVER IMAGE:</h4>
                            <input type="file"  />
                       </Col>
                    </Row>
                    <br />
                <input className='form-control' type="text" placeholder='ENTER TITLE FOR YOUR BLOG'  />
                <br />
                <form className='form-control' >
                    <label>
                        SELECT CATEGORY:
                        <select style={{border:'none'}} className='ms-2'>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </label>
                </form>
                <br />
                <div><textarea className='form-control' name="" id="" cols="136" rows="10" placeholder='ENTER YOUR THOUGHTS'></textarea></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleClose} variant="primary">SAVE</Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Add