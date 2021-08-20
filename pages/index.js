
import styles from '../styles/Home.module.css'
//import Body from 'next/body'
import Head from 'next/head'
import { NextSeo } from 'next-seo';
//import {Animated} from "react-animated-css";
//import {Navbar, Nav, NavDropdown, Form, FormControl, 
//} from 'react-bootstrap';
import { Row, Col, Card, Container, Button, img,Carousel } from 'react-bootstrap';
import Header from  './components/shared/header'
import Footer from  './components/shared/footer'
export default function Home() {
   return (
    <div>
       <Head>
      <title>Mac Gregor Marine service</title>
      <link rel="icon" href="/favicon.PNG" />
      
    </Head>
    <NextSeo
      title="MacGregor Marine service "
      description="est une entreprise spécialisée dans les services maritimes et l’affrètement dans le golfe de guinée. Nous offrons une solution pour chaque type d’opération."
      canonical="https://marine-service.vercel.app/"
      openGraph={{
        url: 'https://marine-service.vercel.app',
        title: 'MacGregor Marine services',
        description: 'une entreprise spécialisée dans les services maritimes et l’affrètement dans le golfe de guinée.',
        images: [
          {
            url: 'https://marine-service.vercel.app/barge.jpg',
            width: 800,
            height: 600,
            alt: 'barge macgregor',
          },
          {
            url: 'https://marine-service.vercel.app/remorqueur.jpg',
            width: 900,
            height: 800,
            alt: 'Og Remorqueur Macgregor marine service',
          },
          { url: 'https://marine-service.vercel.app/macgregor logo.png' },
          { url: 'https://marine-service.vercel.app/paysage.png' },
        ],
        site_name: 'Macgregor marine service',
      }}
   
   
   
   />
   <div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v8.0" nonce="RMqTbJvu"></script>      

      
     
     <div className="container mt-5">
      <Row>
    <Col sm={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">MacGregor Marine Services</h2>
    <p className="card-text mb-auto justify">
    Est une entreprise spécialisée dans les services maritimes et l’affrètement dans le golfe de guinée.
Constituée d’une équipe de professionnel à votre écoute. Nous vous offrons une solution adaptée et sur
mesure pour chaque type d’opération. 
      </p>

      </div>
      </div>
    </Col>
    <Col sm={6}>
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="Damen.jpg"  alt= "Damen barque" />
  </Card>

       
      
    </Col>
    <br>
    </br>
  </Row>



  <Row className= "mt-5">
    <Col sm={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">Zone d'activité </h2>
    <p className="card-text mb-auto justify">
    Afin de répondre aux contraintes de lieu, nous vous proposons des solutions à chaque projet, à travers des
            études de faisabilité logistique et des plans d’exécution.
      </p>
      </div>
      </div>
    </Col>
    <Col sm={6}>
    
     <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="zone d'activité.PNG" />
  </Card>

    

       </Col>
    <br>
    </br>
  </Row>

 


      </div>
<Footer />


      

      <style jsx>{
        `.mb-2{
          color: #002e5d;
          
        }
        `
      }

      </style>
</div>
  )
}
