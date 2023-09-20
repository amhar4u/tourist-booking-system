import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button,Col,Row } from 'react-bootstrap';
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../css/booking.css'
import axios from 'axios';


const Booking = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const[amount,setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/booking",{
      name : name,
      email : email,
      phone :phone,
      selectedPackage:selectedPackage,
      amount:amount,
  }).then (res=>{
      alert(res.data.result);
      setName("");
      setEmail("");
      setEmail("");
      setSelectedPackage("");
      setAmount("");
    
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
              <h1 className="text-white txt">Booking</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
      <br/>
      <div className="center">
        <Container className='form_container'>
        <Form className='form needs-validation' onSubmit={handleSubmit}>
          <Form.Group className='input was-validated' controlId="name">
            <Form.Control 
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your name
            </div>
          </Form.Group>

          <Form.Group className='input was-validated' controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <div className="invalid-feedback">
              Please enter your email
            </div>
          </Form.Group>

          <Form.Group className='input was-validated' controlId="phone">
            <Form.Control
              type="text"
              placeholder="Enter your phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your Contact no
            </div>
          </Form.Group>

          <Form.Group className='input was-validated' controlId="package">

          <Form.Control
            as="select"
            value={selectedPackage}
            onChange={(e)=> setSelectedPackage(e.target.value)}
            required
          >
            <option value="">Select a package</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="brownce">Brownce</option>
          </Form.Control>
          <div className="invalid-feedback">
              Please Select your package
            </div>
        </Form.Group>

        <Form.Group className='input was-validated' controlId="budget">
          <Form.Control
            type="text"
            placeholder="Enter your Budget amount"
            value={selectedPackage === 'gold' ? amount=== '1000' : selectedPackage === 'silver' ? amount==='500' : selectedPackage === 'brownce' ? amount==='250' : ''}
            readOnly
            required
          />
           <div className="invalid-feedback">
              Please Select your amount
            </div>
        </Form.Group>

          <center>
          <Button  className='button' variant="custom" type="submit" style={{color:'white'}}>
            Submit
          </Button>
          </center>
        </Form>
      </Container>
      </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default Booking

