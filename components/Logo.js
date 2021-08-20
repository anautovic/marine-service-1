import Link from 'next/link'
import styled from 'styled-components'

const Logo = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(Logo)`
color: black;
display: flex;
align-items: center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration: none;
font-size:2.32rem;
font-style: italic;
`