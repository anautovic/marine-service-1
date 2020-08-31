import Header from  './components/shared/header'
import Footer from  './components/shared/footer'
import Particuliercontent from './particuliercontent'
import {Container, Row} from 'react-bootstrap';
export default function Particuliers(){
    return(
        <div>
        <Header />
        <Container >
            <Row className="mt-3">
            <Particuliercontent />
            </Row>
        </Container>
        <Footer />

        </div>
    )
} 