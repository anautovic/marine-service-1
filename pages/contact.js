import Header from  './components/shared/header'
import Footer from  './components/shared/footer'
import Contactcontent from './contactcontent'
import {Container } from 'react-bootstrap';
export default function  Contact (){
    return(
        <div>
<Header />
<div className="col">
    <Contactcontent />
    </div>
<Footer />

       </div>
    )
}