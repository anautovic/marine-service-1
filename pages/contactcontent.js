
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import {FacebookIcon, LinkedinIcon,InstapaperIcon} from "react-share";
//import styles from '../styles/Home.module.css'
export default function Contactcontent (){
return(
    <div>

<Container className ="mb-4">

<div className= "contain">
        
          <h5 className= "text-center">  Tel: +33 749 449 619/ +239 991 17586</h5>
          <h5 className= "text-center"> Location: Rue morta, ao lado do BISTP Sao Tomé et principe</h5>
          <h5 className= "text-center"> Mail: info@macgregor-ms.com</h5>
          <h5 className= "text-center"> <a  href="https://www.facebook.com/MacGregorMarineServices/"><FacebookIcon size={40} round={true} /> </a> <a href="https://www.linkedin.com/in/macgregor-marine-services/"> <LinkedinIcon size={40} round={true} /></a><a href="https://www.instagram.com/macgregor_marineservices/"> <InstapaperIcon size={40} round={true} /></a></h5>
          <br></br>

<br></br>
          
          </div>


</Container>   </div>
)

}