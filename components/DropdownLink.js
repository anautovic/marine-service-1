import Link from 'next/link'
import styled from 'styled-components'

const DropdownLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)
export default styled(DropdownLink)`
display: flex;
align-items: center;
justify-content: center;
color: blue;
font-size: 18px;
line-height: 1.6em;
text-decoration: none;
list-style: none;
color: #fff;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
  text-decoration:center;
    color: whitesmoke;
};

`;