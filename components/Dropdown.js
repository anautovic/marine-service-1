import styled from 'styled-components'
import DropdownLink from './DropdownLink'
import Button from './Button'
import {menuData}  from '../data/MenuData';
import {FaTimes} from 'react-icons/fa'
const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0096FF;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;
const Icon = styled.div`
position:  absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
const CloseIcon = styled(FaTimes)`
color: #000d1a;
:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;


const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
};
`;
const BtnWrap = styled.div`
display: flex;
justify-content: center;
`;



const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen= {isOpen} onClick={toggle}>
            <Icon  onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) =>(
                        <DropdownLink href = {item.link} key= {index} download>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary= 'true' round='true' big='true' href= '/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown