import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Form, Button,Col,Row } from 'react-bootstrap';
import axios from 'axios';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../css/contact.css'



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:8080/contact", {
      name : name,
      email : email,
      message : message,
    }).then(res=>{
      alert(res.data.result);
      setName("");
      setEmail("");
      setMessage("");
    })
  };

  return (
    <div className='body'>
        <Nav/>
        <br/>
        <div className="page-header bg text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="text-white txt">Contact</h1>
            </Col>
          </Row>
        </Container>
      </div>
        <div className="center">
        <Container className='form_container'>
        <h1 className='re'>Review</h1>
        <Form className='form' onSubmit={handleSubmit}>
          <Form.Group className='input' controlId="name">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='input' controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='input' controlId="message">
          <Form.Control
            as="textarea"
            rows={4} 
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
          <center>
          <Button  className='button' variant="custom" type="submit">
            Submit
          </Button>
          </center>
        </Form>
      </Container>

      <Container className="details">
       <center> <h1 className="title">Contact Us</h1></center>
          <p className='data'>Name: Pronto Tours</p>
          <p className='data'>Email: prontotours@gmail.com</p>
          <p className='data'>Contact No: 0776657107</p>
          <p className='data'>Opening Time: 7 days, 24 hours</p>
      </Container>

    </div>
      <br/>
        <Footer/>
    </div>
  )
}

export default Contact

