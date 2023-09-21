import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../css/booking.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/admin', {
        username: username,
        password: password,
      });

      if (response.data.result === 'success') {
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);

        // Navigate to the admin page
        navigate('/dashboard');
      } else {
        // Display an error message
        alert(response.data.message);
      }

      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
  };

    return (
        <div className='body'>
            <Nav/>
            <br/>
            <div className="page-header bg text-center">
            <Container>
              <Row>
                <Col>
                  <h1 className="text-white txt">Login Here</h1>
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
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  username is required
                </div>
              </Form.Group>
    
              <Form.Group className='input was-validated' controlId="email">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                 <div className="invalid-feedback">
                  password is required
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


 export default Login