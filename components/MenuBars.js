import React from 'react'
import {bool, func} from 'prop-types'

const MenuBars = ({open, setOpen}) => {
    return (
        <div onClick={() => setOpen(!open)} open={open}>
            
        </div>
    )
}

export default MenuBars  = styled(FaBars)`
display:none;
@media screen and (max-width:768px){
    display:block;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    color: cyan;
    transform: translate(-50%, 25%);
     
}
`
div.propTypes = {
    open:bool.isRequired,
    setOpen: bool.isRequired,
}