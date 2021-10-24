import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';

const ProjectFrame = ({ app_name, app_desc, project__link, git__link }) => {
    return (
        <div>
            <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-black opacity-100 bg-opacity-70"></div>
            <div className="absolute w-full px-4 text-center transition-all duration-500 ease-in-out -translate-x-1/2 -translate-y-1/2 opacity-100 left-1/2 top-1/2">
                <p className="mx-auto mb-4 text-xl font-semibold leading-none tracking-tighter uppercase text-blue lg:text-2xl title-font">{app_name}</p>
                <p className="mb-4 text-xs font-semibold text-white lg:px-12 lg:text-lg title-font"> {app_desc} </p>
                <div className="flex justify-center">
                    <button className="w-5/12 px-2 py-1 mx-2 text-white rounded-full lg:w-1/12 bg-blue-light hover:bg-blue-darker" aria-label="Live Preview"><a href={project__link} target="_blank" rel="noreferrer"> Live </a></button>
                    <button className="w-7/12 px-2 py-1 text-white rounded-full lg:w-1/6 bg-blue-light hover:bg-blue-darker" aria-label="GitHub"><a href={git__link} target="_blank" rel="noreferrer"> GitHub Repo</a></button>
                </div>
            </div>
        </div>
    )
}

const Projects = () => (
    <div>
        <Head>
            <title>Aagam Jain - Projects</title>
            <meta name="description" content="Aagam Jain || Web Developer || Designer || Freelancer " />
            <link rel="icon" href="/ajremove1.png" />
        </Head>
        <Carousel autoPlay showIndicators={false}  >
            <div>
                <img alt="Website Preview" src="/styleclub.png" />
                <ProjectFrame app_name="Style Club" app_desc="An e-commerce shopping website." project__link="https://style-club.vercel.app" git__link="https://github.com/Aagam-Jain-113/style-club" />
            </div>
            <div>
                <img alt="Website Preview" src="/invoice.png" />
                <ProjectFrame app_name="Invoice Generator" app_desc="A web-app in which you can generate your Invoices within a few minutes." project__link="https://aagam-jain-113.github.io/invoice-generator" git__link="https://github.com/Aagam-Jain-113/invoice-generator" />
            </div>
            <div>
                <img alt="Website Preview" src="/whatsup.png" />
                <ProjectFrame app_name="Whatsup Chat" app_desc="A clone-app of whatsapp." project__link="https://whatsupchat.netlify.app/" git__link="https://github.com/Aagam-Jain-113/whatsapp-clone" />
            </div>
            <div>
                <img alt="Website Preview" src="/aidzee.png" />
                <ProjectFrame app_name="Aidzee" app_desc="A virtual portal where anyone can post (just like FB Groups), changes according to your location (just like Tinder & Uber) and connect with others using AidZee Cord(just like Discord)" project__link="http://aidzee.netlify.app/" git__link="https://github.com/Aagam-Jain-113/AidZee" />
            </div>
            <div>
                <img alt="Website Preview" src="/speakable.png" />
                <ProjectFrame app_name="Speakable" app_desc="A web-app where a person with speech disability can record their hand gestures, which convert them to Speech" project__link="http://speakableai.netlify.app" git__link="https://github.com/Aagam-Jain-113/Speakable" />
            </div>
            <div>
                <img alt="Website Preview" src="/bustnews.png" />
                <ProjectFrame app_name="Bust News" app_desc="A web-app where you can find what is real and what is fake. Just visit the website and search for the news you have seen or heard and you will get instant Truth because you deserve nothing but the Truth." project__link="http://bustnews.herokuapp.com/" git__link="https://github.com/Aagam-Jain-113/Fake-News-Detection" />
            </div>
            <div>
                <img alt="Website Preview" src="/swasth.png" />
                <ProjectFrame app_name="Swasth AIO" app_desc="A user-friendly portal which is 100% transparent and all your medical issues solved in a 'Single Trusted' website" project__link="https://swasthaio.netlify.app/" git__link="https://github.com/Aagam-Jain-113/SwasthAIO" />
            </div>
            <div>
                <img alt="Website Preview" src="/wikimoji.png" />
                <ProjectFrame app_name="Wiki Moji" app_desc="Find meaning of your emojis here" project__link="https://wiki-moji.netlify.app/" git__link="https://github.com/Aagam-Jain-113/wiki_moji" />
            </div>
        </Carousel>
    </div>
);

export default Projects;

