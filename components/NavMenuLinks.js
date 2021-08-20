import Link from 'next/link'
import styled from 'styled-components'

const NavMenuLinks = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(NavMenuLinks)`
color: #dee1ec;
display: flex;
align-items: center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration: none;
font-size:1.1rem;

&:hover {
  text-decoration:none;
				color: #dee1ec;
				box-shadow: 0 2px 0 0 currentcolor;
		transition: all .4s ease-in-out;
}
`