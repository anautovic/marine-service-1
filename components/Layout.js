import React, {useState} from 'react'
import NavBar from './NavBar'
import Dropdown from './Dropdown' 
import Hero from './Hero'


const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)}
    return (
        <div>
            <NavBar toggle= {toggle}  isOpen= {isOpen} />
    <Dropdown isOpen= {isOpen} toggle={toggle} />
    <Hero />
            {children}
           
        </div>
    )
}

export default Layout
