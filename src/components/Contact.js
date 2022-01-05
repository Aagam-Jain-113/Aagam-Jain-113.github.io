import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
// import { PopupButton } from 'react-calendly'

function Contact() {
    return (
        <div className='max-w-screen-lg px-10 lg:px-0 mx-auto mt-12 lg:mt-24' id="contact">
            <hr className="h-0.5 bg-gray-300" />
            <div className='text-center text-2xl my-6'>
                <p>You can connect with me on any of the following platforms</p>
                <div className='flex space-x-8 justify-center text-2xl mt-4'>
                    <a href="https://github.com/Aagam-Jain-113/" aria-label="GitHub" target="_blank" className="transform hover:scale-125 duration-300" rel="noreferrer">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/aagam-jain113/" aria-label="Linkedin" target="_blank" className="transform hover:scale-125 duration-300" rel="noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="mailto:aagamjain113@gmail.com" className="transform hover:scale-125 duration-300">
                        <GoMail />
                    </a>
                    <a href="https://twitter.com/AagamJain113" aria-label="Twitter" target="_blank" className="transform hover:scale-125 duration-300" rel="noreferrer">
                        <BsTwitter />
                    </a>
                </div>
                <p className='text-gray-400 my-10 text-sm'>&#169; Aagam Jain 2022 </p>
                {/* <p className='mt-4 text-base '>or</p>
                <p className='mt-2'>We can have a one-on-one meeting over a cup of coffee</p>
                <PopupButton
                    url="https://calendly.com/aagamjain113?primary_color=36e7f7"
                    className="w-1/5 px-2 text-xl py-2 mt-6 text-white rounded-full bg-primary hover:bg-darker"
                    text="Lets connect!"
                /> */}
            </div>
        </div>
    )
}

export default Contact