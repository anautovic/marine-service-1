import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
    
}

html {
    box-sizing: border-box;
    font-size: 1rem;
    overflow-x:hidden;
    

    @media only screen and (max-width: 1200px){
        font-size: 1rem;
    }
    @media only screen and (min-width: 1980px){
        font-size: 1rem;
    }
}
body{
    font-family: ' Montserrat', sans-serif;  
    //line-height: 1.6em;
    font-size: 1rem;
    background: #F9F9F9;
    color: #333;
    

}
a {
  color: inherit;
  text-decoration: none;
}
`



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        </Layout>
    </>
  )
}
