



import React, {useEffect, useState, useRef} from 'react'
import styled, {css} from 'styled-components'

import {IoMdArrowRoundForward}from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

//import slides from '../data/SliderImage'



const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
@media (max-width: 768px) {
    height: 70vh ;
  }
`;
const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    height: 70vh ;
  }


&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradiant(0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100% );
    @media (max-width: 768px) {
    height: 70vh ;
  }
}
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
opacity:0.9;
@media (max-width: 768px) {
    height: 100vh ;
    object-fit: fill;
  }
`;
const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;
h1 {
    font-size: clamp(2rem, 9vw, 3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 1rem;
}
h3 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 1rem;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

}

`;






const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #cd853f;
    transform: scale(1.05);
}
`;
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;



const slides = [
        {
            title: 'Luxury in Bali, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501280/macgregor/cor_cayk1j.jpg',
            alt:'House '
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501281/macgregor/marine-service_5_z9stbq.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501279/macgregor/remorqueur_jzrwhc.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501278/macgregor/barge_gfywac.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501278/macgregor/cor1_ntq1ra.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501279/macgregor/marine-service_3_du8taf.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501279/macgregor/marine-service_3_du8taf.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501278/macgregor/barq_bnjk5e.jpg',
            alt:'traning'
        },
        {
            title: 'House in Las vegas, Nevada',
            price: '$80000',
            path:'/homes',
            label: 'View homes',
            image: 'https://res.cloudinary.com/wil/image/upload/v1629501280/macgregor/marine-service_1_et4xdm.jpg',
            alt:'traning'
        },
    
       
    ];






const Hero = () => {
    
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null);
    useEffect(() => {
        const nextSlide= () => {
            setCurrent(current => (current === length - 1 ? 0 : current +1));

        };
        timeout.current = setTimeout(nextSlide, 3000);
        return function() {
           if (timeout.current){
               clearTimeout(timeout.current);
           } 
        };
    }, [current, length]
  );
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1);
  //console.log(current);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
   // console.log(current);
    };
    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }

    return (
        
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index)=>{
                return(
                    <HeroSlide key ={index}>
                        {index === current &&(
                        <HeroSlider>
                            <HeroImage src={slide.image} alt= {slide.alt}  />
                                
                            
                        </HeroSlider>
                   )}
                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick= {prevSlide} />
                <NextArrow onClick= {nextSlide} />
            </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
} 


export default Hero
