import React, {useState} from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../images/photo.jpg';
import '../css/about.css'; 
import axios from 'axios';

const About = () => {
  // const [contacts, setContacts] = useState([]);   

  // axios.get('http://localhost:8080/contact').then(res=>{    //routes for get data
  //   setContacts(res.data.contacts);
  // })

  return (
    <div className='body'>
      <Nav />
      <br />
      <div className="page-header text-center" style={{ background: 'lightseagreen' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white txt">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-img">
                <img className="img" src={myImage} alt="About" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <h1 className="about-title">App For Find Tourist Guides</h1>
                <p className="about-text">
                  Welcome to our tourist guide website! We are a team of passionate and knowledgeable guides dedicated to
                  providing you with the best travel experiences.
                </p>
                <p className="about-text">
                  Our mission is to showcase the beauty and cultural richness of our destinations, ensuring you have an
                  unforgettable journey. Whether you're a history enthusiast, nature lover, or a foodie seeking culinary
                  adventures, we have tailored tours to cater to your interests.
                </p>
                <p className="about-text">
                  With years of experience, our guides are experts in the local history, landmarks, and hidden gems. We are
                  committed to delivering exceptional service and making your trip enjoyable and educational.
                </p>
                <p className="about-text">
                  Explore our diverse range of tours and discover the wonders of each destination. Join us and let us be
                  your guide in creating memories that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        {contacts.map((value, index)=>(
          <div style={{width : '100%', display : 'flex', justifyContent : 'center', flexDirection : 'column'}}>
            <h1>{value.name}</h1>
            <h5>{value.email}</h5>   // get data from database
            <p>{value.message}</p>
          </div>
        ))}
      </section> */}
      <br />
      <Footer />
    </div>
  );
};

export default About;
