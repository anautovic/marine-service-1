import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {FacebookIcon, LinkedinIcon,InstapaperIcon} from "react-share";
//import Map from './components/shared/Map'
import ReactMapGL from 'react-map-gl';
import { GeoAlt,TelephoneFill,EnvelopeFill } from 'react-bootstrap-icons';

//import styles from '../styles/Home.module.css'

        class Contactcontent extends Component {
            state = {
              viewport: {
                width: '300px',
                height: '300px',
                latitude: 0.335362,
                longitude: 6.729528,
                zoom: 5
              }
            };
        render() {
return(
    <div>
<Container className ="mb-4">

<div className= "contain">
        
          <h5 className= "text-center">  Tel: +33 749 449 619/ +239 991 17586</h5>
          <h5 className= "text-center"> Location: Rue morta, ao lado do BISTP Sao Tomé et principe</h5>
          <h5 className= "text-center"> Mail: info@macgregor-ms.com</h5>
          <h5 className= "text-center"> <a  href="https://www.facebook.com/MacGregorMarineServices/"><FacebookIcon size={40} round={true} /> </a> <a href="https://www.linkedin.com/in/macgregor-marine-services/"> <LinkedinIcon size={40} round={true} /></a><a href="https://www.instagram.com/macgregor_marineservices/"> <InstapaperIcon size={40} round={true} /></a></h5>
          <br></br>
<div className= "reseau">
         
         </div>
<br></br>
          
          </div>
    <Row className="mt-5">
        <Col md={6}>

        <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYW5hdXRvdmljIiwiYSI6ImNrZXFzbXJ0NjFxbWEzMm84NGZpN3oxenEifQ.VQ8T705qpdRfnpmyeqASVg"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
      
       
    </Col>
    <Col md={6} >
    <iframe className="embed-responsive-item" frameborder="0"src='https://forms.zohopublic.com/macgregor/form/ContactForm/formperma/wL4iCFBIsbzEy-9AQPkzHY86nNXjOnhyrKJTNE7lqhY'></iframe>
    
    </Col>
    </Row>
    
  
</Container>  
<style jsx> {
    `iframe{
        height:700px;
        width:100%;
        border:none;
    }
    .contain{
margin-top: 5px;
width:100%;
height:200px;
color: #0070f3;

    }
    .reseau{
      margin-bottom:5px;
      margin-top:4px;
      text-align: center;
    }`
}
    </style>
     </div>
)

        }}
        export default Contactcontent;