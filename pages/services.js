import Header from  './components/shared/header'
import Footer from  './components/shared/footer'
import Servicelist from './servicelist'
import {Container, Row} from 'react-bootstrap';
export default function Services(){
    const w3 = {
        float:"left", width:"100 %"
    };
  /*  const w3cardcontainer = {min-height: "460px",box-shadow: "0 2px 5px 0 rgba(0,0,0,0.16) 0 2px 10px 0 rgba(0,0,0,0.12)"
};*/
    return(
        <div>
        <Header />

        <Servicelist />
       
<Row><div className="w3-row-padding w3-center w3-margin-top">
<div style ={w3} >
  
</div>
</div>
</Row>


     <style jsx>{`
     img{
        left: 1%;
        max-width: 100%;
        max-height: 19rem;
        margin-bottom: 2rem;
        position: absolute;
     }
    `}</style>
    
       
       <Footer />
            
        </div>
    )
} 