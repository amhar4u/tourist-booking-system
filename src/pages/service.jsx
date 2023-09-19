import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../css/service.css'

const Service = () => {
  return (
    <div className='body'>
        <Nav/>
        <br/>
        <div className="page-header bg text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="text-white txt">Service</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className="container mt-5">
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card className='card'>
              <Card.Body>
                <Card.Title className="gold">GOLD</Card.Title>
                <Card.Text>
                  <h4 className="section-title">Guide</h4>
                  <ul>
                    <li>Experienced and knowledgeable guide</li>
                    <li>Provides historical and cultural information</li>
                    <li>Assists with itinerary and navigation</li>
                  </ul>
                  <h4 className="section-title">Vehicle</h4>
                  <ul>
                    <li>Comfortable and air-conditioned vehicle</li>
                    <li>Spacious seating and legroom</li>
                    <li>Safe and reliable transportation</li>
                  </ul>
                  <h4 className="section-title">Restaurant</h4>
                  <ul>
                    <li>Wide variety of delicious cuisines</li>
                    <li>Cozy and welcoming ambiance</li>
                    <li>Attentive and friendly staff</li>
                  </ul>
                  <h4 className="section-title">Meals</h4>
                  <ul>
                    <li>Breakfast, lunch, and dinner provided</li>
                    <li>Options for vegetarian and special dietary requirements</li>
                    <li>High-quality ingredients and flavors</li>
                  </ul>
                </Card.Text>
                <div className="text-center">
                <Button href="/Booking" className="button" style={{ backgroundColor: 'lightseagreen',color:'white',borderColor:'lightseagreen'}}>
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card  className='card'>
              <Card.Body>
                <Card.Title className="silver">Silver</Card.Title>
                <Card.Text>
                  <h4 className="section-title">Guide</h4>
                  <ul>
                    <li>Experienced and knowledgeable guide</li>
                    <li>Provides historical and cultural information</li>
                    <li>Assists with itinerary and navigation</li>
                  </ul>
                  <h4 className="section-title">Vehicle</h4>
                  <ul>
                    <li>Comfortable and air-conditioned vehicle</li>
                    <li>Spacious seating and legroom</li>
                    <li>Safe and reliable transportation</li>
                  </ul>
                  <h4 className="section-title">Restaurant</h4>
                  <ul>
                    <li>Wide variety of delicious cuisines</li>
                    <li>Cozy and welcoming ambiance</li>
                    <li>Attentive and friendly staff</li>
                  </ul>
                </Card.Text>
                <div className="text-center">
                <Button href="/Booking" className="button" style={{ backgroundColor: 'lightseagreen',color:'white',borderColor:'lightseagreen'}}>
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <Card className='card'>
              <Card.Body>
                <Card.Title className="brownce">BROWNCE</Card.Title>
                <Card.Text>
                  <h4 className="section-title">Guide</h4>
                  <ul>
                    <li>Experienced and knowledgeable guide</li>
                    <li>Provides historical and cultural information</li>
                    <li>Assists with itinerary and navigation</li>
                  </ul>
                  <h4 className="section-title">Vehicle</h4>
                  <ul>
                    <li>Comfortable and air-conditioned vehicle</li>
                    <li>Spacious seating and legroom</li>
                    <li>Safe and reliable transportation</li>
                  </ul>
                </Card.Text>
                <div className="text-center">
                  <Button href="/Booking" className="button" style={{ backgroundColor: 'lightseagreen',color:'white',borderColor:'lightseagreen'}}>
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
        <br/>
        <Footer/>
    </div>
  )
}

export default Service

