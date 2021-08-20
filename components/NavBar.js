import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components';
//import styled  from 'styled-components';
import {useRouter} from 'next/router'
import {FaBars}  from 'react-icons/fa';
import {menuData} from '../data/MenuData'
import NavMenuLinks from './NavMenuLinks'
import Logo from './Logo'
import Button from './Button'


const Nav = styled.nav`
height:70px;
display: flex;
justify-content:space-between; 
padding: 1rem 2rem;
z-index:100;
position: fixed;
width:100%;
${props => props.defil && css`
background-color:transparent;`};
background: ${({navbar}) =>(navbar? '#282861': 'transparent')} ;
`;




const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width:768px){
    display:block;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    color: white;
    //transform: translate(-50%, 25%);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;


    :first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(0deg)' : 'rotate(45)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(0px)' : 'translateX(20)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(0deg)' : 'rotate(-45)'};
    }

    
}
`
const NavMenu = styled.div`
display: flex;
align-items: center; 
margin-right: 5px;
font-size: 1.2rem;
&:hover {
    font-weight: bold;
   
    text-decoration:none;
    color:#CD853F
}

@media screen and  (max-width: 768px) {
    display: none
}

`


const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right:24px;
@media screen and (max-width:768px){
    display:none;
}
`;





const NavBar  = ({toggle}) => {

    const [navbar, setNavbar]= useState(false);

    const changeBackground = ()=> {
        if (window.scrollY >= 80) {
            setNavbar(true);

        }else{
            setNavbar(false);
        }
         
    };
    useEffect(() =>{
        window.addEventListener('scroll', changeBackground);
    })
    

    const router = useRouter()
    const isActive = (r) => {
        if (r === router.pathname)
        return " active"; 
        else {
            return ""
        }
    }
    return (
    
       <>
       
           {/*  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href= "/">
                <a className="navbar-brand" href="#">JB</a>
                </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
          <Link href="/cart">
          <a className={"nav-link" + isActive('/cart')}><i className="fas fa-shopping-cart" aria-hidden="true"></i> Cart</a>
          </Link>
        
      </li>

      <li className="nav-item ">
          <Link href="/signin">
          <a className={"nav-link" + isActive('/signin')}><i className="fas fa-user" aria-hidden="true"></i> Sign In</a>
          </Link>
        
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        UserName
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Logout</a>
          
        </div>
    </li>
    </ul>
  </div>
</nav>*/}
<Nav navbar= {navbar}>
        <Logo href="/"  forwardedAs="/">
        <img
        src="/macgregor logo.png"
        width="240"
        height="60"
        
        alt="Gjites_bati_logo"
      />
        </Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
         {menuData.map((item, index) =>(
             <NavMenuLinks href = {item.link}
             key={index} forwardedAs={item.link}  className={"nav-link" + isActive('{item.link}')} download>{item.title} 
                 
             </NavMenuLinks>
         )
          )} 
          </NavMenu>
          <NavBtn>
                <Button href='/contact' primary= 'true'>
                Contact us
                </Button>
            </NavBtn>
            </Nav>
        

     



  </>
  
    )
}

export default NavBar
