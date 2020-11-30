import {Navbar, Nav, NavDropdown, Form, FormControl, Button, img,Carousel} from 'react-bootstrap';
import Link from 'next/link'
import { Download } from 'react-bootstrap-icons';
const AppLink = ({children, className, href}) =>
<Link href={href}>
  <a className= {className}>{children}</a>
</Link>
export default function Header() { 
    return (
        <>
<Navbar bg="white"  expand="lg">
  <Navbar.Brand href="#home">
  <img
        src="/macgregor logo.png"
        width="250"
        height="60"
        className="d-inline-block align-top"
        alt="MacGregor Marine logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className= "basic-navbar-nav" />
  <Navbar.Collapse className="basic-navbar-nav">
    <Nav className="mr-auto">
      <AppLink href="/"><a className="nav-link mr-3 ">Accueil</a></AppLink>
      <AppLink href="/services"><a className="nav-link mr-3 ">Services et marchés</a></AppLink>
      <AppLink href="/particuliers"> <a className="nav-link mr-3 ">Partenaires</a></AppLink>
      <AppLink href="/contact"> <a className="nav-link mr-3 ">Contact</a></AppLink>
      <NavDropdown title="Brochure" id="basic-nav-dropdown">
        <NavDropdown.Item variant="outline-success" href="Brochure Macgregor FR.pdf" download><Download color="green" size={20} /> Brochure_Fr</NavDropdown.Item>
        <NavDropdown.Item variant="outline-success" href="Macgregor Marine Services Brochure EN.pdf" download><Download color="green" size={20} /> Brochure_En</NavDropdown.Item>
        <NavDropdown.Item variant="outline-success" href="Brochure Portugais.pdf" download><Download color="green" size={20} /> Brochure_Portugais </NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="remorqueur.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="he1.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="cor1.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="marine-service (3).jpeg"
      width="55"
      height="600"
      alt="mer golfe guinée 3"
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="marine-service (9).jpeg"
      width="75"
      height="550"
      alt="mer golfe guinée 6"
    />
<Carousel.Caption>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="barge.jpg"
      width="100"
      height="400"
      alt="Barge"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<style jsx>{
        `.nav-link{
          color: #eaeaea;
          
        }
        Navbar{
          background-color: #ffffff;
        }
.basic-navbar-nav{
  color: #eaeaea;
}
# basic-navbar-nav{
  color: #eaeaea;
}
        `
      }

      </style>


</>
 )
}
