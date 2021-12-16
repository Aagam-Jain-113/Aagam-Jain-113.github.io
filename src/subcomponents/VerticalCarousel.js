import React, { useRef } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import invoice from '../assets/Images/invoice.png'
import styleClub from '../assets/Images/styleclub.png';
import { Slide, Slider, CarouselProvider } from 'pure-react-carousel'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Left = styled.div`
width: 35%;
&>div{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
const Right = styled.div`
left: 35%;
width: 55%;
`

const Buttons = styled.button`
    position: absolute;
    left: 35%;
    top: 50%;
    z-index: 99;
    background: #000;
    color: #fff;
    cursor: pointer;
    padding: 1rem;
    border: none;
`

const Carousel = styled.div`
    width: 50%;
    position: relative;
`

const TextCarousel = styled.div`
display: none;
`
const Box = styled(motion.li)`
width: 25rem;
height: 50vh;
background: url(${props => props.background}) center center;
background-repeat: no-repeat;
color:${props => props.theme.text};
position: relative;
display: flex;
margin-right: 4rem;
border-radius: 0 50px 0 50px;
box-shadow: 0 0 30px rgba(0,0,0,0.5);
/* border: 1px solid ${props => props.theme.text}; */
transition: all 0.2s ease;
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
line-height: 24px;
`
const Tags = styled.div`
border-top: 2px solid ${props => props.theme.text};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
`

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
text-decoration: none;
cursor: pointer;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size: calc(1em + 0.5vw);
`

const Git = styled.a`
color: inherit;
cursor: pointer;
text-decoration: none;
fill:${props => props.theme.text};
`

const Disabled = styled.div`
    position: absolute;
    border-radius: 0 50px 0 50px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 1.5rem;
    display: none;
    transition: all 0.2s ease;
    ${Box}:hover &{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 2s ease-in;
    }
`

// Framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


function VerticalCarousel(props) {

    const [activeTextIndex, setActiveTextIndex] = React.useState(0);

    const { id, name, description, tags, demo, github, background } = props.data;

    function updateActiveText() {
        if (activeTextIndex < 4) {
            setActiveTextIndex((prev) => prev + 1);
        } else {
            setActiveTextIndex(0);
        }
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            updateActiveText();
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [activeTextIndex]);


    return (
        <Box key={id} variants={Item} background={background} style={{ "background": background }}>
            <Disabled>
                <Title>{name}</Title>
                <Description>
                    {description}
                </Description>
                <Tags>
                    {
                        tags.map((tag, id) => {
                            return <Tag key={id}>#{tag}</Tag>
                        })
                    }
                </Tags>
                <Footer>
                    <Link href={demo} target="_blank">
                        Visit
                    </Link>
                    <Git href={github} target="_blank">
                        <svg aria-hidden="true" width={30} height={30} focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </Git>
                </Footer>
            </Disabled>
        </Box>
        // <div className='slider-container relative overflow-hidden h-screen w-screen' ref={sliderContainer}>

        //     <Left className='h-screen absolute top-0 left-0' ref={slideLeft}>
        //         <div className="my-5 h-52 rounded-xl p-4 bg-white">
        //             <p className="text-2xl">Style Club</p>
        //             <p className="text-lg mt-1">An E-Commerce website with authentication system</p>
        //             <div className="flex mt-2 space-x-2">
        //                 <p className="bg-red-300 py-1 px-2 rounded-lg">Next.js</p>
        //                 <p className="bg-green-300 py-1 px-2 rounded-lg">TailwindCSS</p>
        //                 <p className="bg-yellow-300 py-1 px-2 rounded-lg">MongoDb</p>
        //             </div>
        //             <div className="w-full text-lg flex items-center space-x-3 mt-4 justify-center">
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">GitHub</a>
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">Live</a>
        //             </div>
        //         </div>
        //         <div className="h-52 my-5 rounded-xl p-4 bg-white">
        //             <p className="text-2xl">Invoice Generator</p>
        //             <p className="text-lg mt-1">A web app to create and store invoices locally</p>
        //             <div className="flex mt-2 space-x-2">
        //                 <p className="bg-red-300 py-1 px-2 rounded-lg">React.js</p>
        //                 <p className="bg-green-300 py-1 px-2 rounded-lg">Firebase</p>
        //             </div>
        //             <div className="w-full text-lg flex items-center space-x-3 mt-4 justify-center">
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">GitHub</a>
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">Live</a>
        //             </div>
        //         </div>
        //         <div className="h-52 my-5 rounded-xl p-4 bg-white">
        //             <p className="text-2xl">Invoice Generator</p>
        //             <p className="text-lg mt-1">A web app to create and store invoices locally</p>
        //             <div className="flex mt-2 space-x-2">
        //                 <p className="bg-red-300 py-1 px-2 rounded-lg">React.js</p>
        //                 <p className="bg-green-300 py-1 px-2 rounded-lg">Firebase</p>
        //             </div>
        //             <div className="w-full text-lg flex items-center space-x-3 mt-4 justify-center">
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">GitHub</a>
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">Live</a>
        //             </div>
        //         </div>
        //         <div className="h-52 my-5 rounded-xl p-4 bg-white">
        //             <p className="text-2xl">Style Club</p>
        //             <p className="text-lg mt-1">An E-Commerce website with authentication system</p>
        //             <div className="flex mt-2 space-x-2">
        //                 <p className="bg-red-300 py-1 px-2 rounded-lg">Next.js</p>
        //                 <p className="bg-green-300 py-1 px-2 rounded-lg">TailwindCSS</p>
        //                 <p className="bg-yellow-300 py-1 px-2 rounded-lg">MongoDb</p>
        //             </div>
        //             <div className="w-full text-lg flex items-center space-x-3 mt-4 justify-center">
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">GitHub</a>
        //                 <a href="/" className="bg-blue-600 text-white rounded-lg px-2 py-1">Live</a>
        //             </div>
        //         </div>
        //     </Left>
        //     <Right className='right-slide absolute h-full top-0' ref={slideRight}>
        //         <div className="border-8 rounded-xl border-white">
        //             <img src={invoice} alt="invoice" className="rounded-xl" />
        //         </div>
        //         <div className="border-8 rounded-xl border-white">
        //             <img src={invoice} alt="invoice" className="rounded-xl" />
        //         </div>
        //         <div className="border-8 rounded-xl border-white">
        //             <img src={invoice} alt="invoice" className="rounded-xl" />
        //         </div>
        //         <div className="border-8 rounded-xl border-white">
        //             <img src={invoice} alt="invoice" className="rounded-xl" />
        //         </div>
        //     </Right>

        //     <div className='action-buttons'>
        //         <Buttons onClick={() => changeSlide('down')} ref={downbutton} className='down-button transform -translate-x-full rounded-l-md'>
        //             <AiOutlineArrowUp size={20} />
        //         </Buttons>
        //         <Buttons onClick={() => changeSlide('down')} ref={upbutton} className='up-button transform -translate-y-full rounded-r-md'>
        //             <AiOutlineArrowDown size={20} />
        //         </Buttons>
        //     </div>
        // </div>
        // <div className='flex items-center pt-10'>
        //     <Carousel className={"styles.carousel"}>
        //         <div className={"styles.imageCarousel"}>
        //             <CarouselProvider
        //                 naturalSlideWidth={100}
        //                 naturalSlideHeight={100}
        //                 visibleSlides={1}
        //                 currentSlide={activeTextIndex}
        //                 totalSlides={5}
        //                 isPlaying
        //                 active
        //                 orientation={"vertical"}
        //                 interval={5000}
        //             >
        //                 <Slider>
        //                     <Slide index={0} className="styles.slide flex justify-center items-center">
        //                         <div className={"styles.imageSlide w-3/4 mx-auto mr-36 mt-24"}>
        //                             <img src={invoice} alt="" />
        //                         </div>
        //                     </Slide>
        //                     <Slide index={1} className="styles.slide flex justify-center items-center">
        //                         <div className={"styles.imageSlide w-3/4 mx-auto mr-36 mt-24"}>
        //                             <img src={styleClub} alt="" />
        //                         </div>
        //                     </Slide>
        //                     <Slide index={2} className="styles.slide flex justify-center items-center">
        //                         <div className={"styles.imageSlide w-3/4 mx-auto mr-36 mt-24"}>
        //                             <img src={invoice} alt="" />
        //                         </div>
        //                     </Slide>
        //                     <Slide index={3} className="styles.slide flex justify-center items-center">
        //                         <div className={"styles.imageSlide w-3/4 mx-auto mr-36 mt-24"}>
        //                             <img src={styleClub} alt="" />
        //                         </div>
        //                     </Slide>
        //                     <Slide index={4} className="styles.slide flex justify-center items-center">
        //                         <div className={"styles.imageSlide w-3/4 mx-auto mr-36 mt-24"}>
        //                             <img src={invoice} alt="" />
        //                         </div>
        //                     </Slide>
        //                 </Slider>
        //             </CarouselProvider>
        //         </div>

        //         <TextCarousel className={"styles.textCarousel"}>
        //             <CarouselProvider
        //                 naturalSlideWidth={100}
        //                 naturalSlideHeight={100}
        //                 visibleSlides={1}
        //                 currentSlide={activeTextIndex}
        //                 totalSlides={5}
        //                 isPlaying
        //                 interval={5000}
        //             >
        //                 <Slider>
        //                     <Slide index={0} className={"styles.slide"}>
        //                         <div className={"styles.textSlide"}>
        //                             <p>Learn LIVE from Top 1% Industry Experts</p>
        //                         </div>
        //                     </Slide>
        //                     <Slide index={1} className={"styles.slide"}>
        //                         <div className={"styles.textSlide"}>
        //                             <p>100% Internship and Placement Assistance</p>
        //                         </div>
        //                     </Slide>
        //                     <Slide index={2} className={"styles.slide"}>
        //                         <div className={"styles.textSlide"}>
        //                             <p>Live Industry Projects</p>
        //                         </div>
        //                     </Slide>
        //                     <Slide index={3} className={"styles.slide"}>
        //                         <div className={"styles.textSlide"}>
        //                             <p>Career Coaching & Intensive Soft-skill Training</p>
        //                         </div>
        //                     </Slide>
        //                     <Slide index={4} className={"styles.slide"}>
        //                         <div className={"textSlide"}>
        //                             <p>Strong Peer Network and 1-on-1 Mentorship</p>
        //                         </div>
        //                     </Slide>
        //                 </Slider>
        //             </CarouselProvider>
        //         </TextCarousel>
        //     </Carousel>
        // </div>
    )
}

export default VerticalCarousel
