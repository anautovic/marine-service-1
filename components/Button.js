import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ as, children, className, href }) => (
    <Link href={href} as={as} passHref>
      <a className={className}>{children}</a>
    </Link>
  )

export default styled(Button)`
background:${({primary}) => (primary ? '#282861':'#CD853F')};
white-space:nowrap;
outline:none;
border:none;
min-width:50px;
max-width:200px;
cursor: pointer;
text-decoration: none;
transition:0.3s;
display: flex;
justify-content:center;
align-items:center;
padding: ${({big}) =>(big? '16px 40px': '14px 24px')} ;
color: ${({primary}) =>(primary? '#fff': '#282861')} ;
font-size: ${({big}) =>(big? '20px': '14px')} ;
&:hover {
    transform: translateY(-2px);
    color:#fff;
    text-decoration: none;
}
`