
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
//import styles from '../styles/Home.module.css'
export default function Contactcontent (){
return(
    <div>
<Container>
    <Row className="mt-5">
<Image src="brochure1.PNG"style={{ width: '30rem' }} />
   </Row>
   <Row className="mb-2">
   <Image src="brochure2.PNG"style={{ width: '30rem' }} />
   </Row>
</Container>   </div>
)

}