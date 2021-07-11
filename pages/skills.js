import Head from 'next/head';
import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiC, SiNextDotJs, SiNodeDotJs, SiTailwindcss, SiJquery, SiFlask, SiFirebase, SiGithub, SiVisualstudiocode } from "react-icons/si";
const Skills = () => {
    return (
        <div className="p-4">
            <Head>
                <title>Aagam Jain - Skills</title>
                <meta name="description" content="Aagam Jain || Web Developer || Designer || Freelancer " />
                <link rel="icon" href="/ajremove1.png" />
            </Head>
            <div className="flex leading-7">
                <h1 className="flex text-lg font-bold">
                    Programming Languages
                </h1>
                <div className="flex flex-wrap items-center leading-7 dark:text-black">
                    <div className="flex items-center px-2 mb-4 ml-2 bg-blue-300 rounded-2xl">
                        <SiJavascript size={17} />
                        <p className="ml-2">JavaScript</p>
                    </div>
                    <div className="flex items-center px-2 mb-4 ml-2 bg-blue-300 rounded-2xl">
                        <SiHtml5 size={17} />
                        <p className="ml-2">HTML</p>
                    </div>
                    <div className="flex items-center px-2 mb-4 ml-2 bg-blue-300 rounded-2xl">
                        <SiCss3 size={17} />
                        <p>CSS</p>
                    </div>
                    <div className="flex items-center px-2 mb-4 ml-2 bg-blue-300 rounded-2xl">
                        <SiPython size={17} />
                        <p className="ml-2">Python</p>
                    </div>
                    <div className="flex items-center px-2 mb-4 ml-2 bg-blue-300 rounded-2xl">
                        <SiC size={17} />
                        <p className="ml-2">C</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
                <h1 className="flex mr-4 text-lg font-bold">
                    Frameworks
                </h1>
                <div className="flex flex-wrap items-center leading-7 dark:text-black">
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiReact size={17} />
                        <p className="ml-2">React.js</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiNextDotJs size={17} />
                        <p className="ml-2">Next.js</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiTailwindcss size={17} />
                        <p className="ml-2">TailwindCSS</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 x-2 v w-fitcontent rounded-2xl">
                        <SiNodeDotJs size={17} />
                        <p className="ml-2">NodeJS</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiJquery size={17} />
                        <p className="ml-2">jQuery</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiFlask size={17} />
                        <p className="ml-2">Flask</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-4">
                <h1 className="flex mr-4 text-lg font-bold">
                    Tools
                </h1>
                <div className="flex flex-wrap items-center leading-7 dark:text-black">
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiFirebase size={17} />
                        <p className="ml-2">Firebase</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 x-2 v w-fitcontent rounded-2xl">
                        <SiGithub size={17} />
                        <p className="ml-2">GitHub</p>
                    </div>
                    <div className="flex flex-wrap items-center px-2 mb-4 ml-2 bg-blue-300 w-fitcontent rounded-2xl">
                        <SiVisualstudiocode size={17} />
                        <p className="ml-2">Visual Studio Code</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
