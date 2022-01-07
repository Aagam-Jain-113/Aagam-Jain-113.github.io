import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { PopupButton } from 'react-calendly'

function Contact() {
    return (
        <div className='max-w-screen-lg px-10 lg:px-0 mx-auto mt-12 lg:mt-24' id="contact">
            <hr className="h-0.5 bg-gray-300" />
            <div className='text-center text-2xl my-6'>
                <PopupButton
                    url="https://calendly.com/aagamjain113?primary_color=36e7f7"
                    className="w-full p-2 md:w-5/12 text-xl mt-6 text-white rounded-full bg-primary hover:bg-gray-700"
                    text="Lets meet over a cup of coffee ☕!"
                />
                <p className='my-3 text-base'>or</p>
                <p>You can connect with me on:</p>
                <div className='flex space-x-8 justify-center text-2xl mt-4'>
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
                <p className='text-gray-400 my-6 text-sm'>&#169; Aagam Jain 2022 </p>
            </div>
        </div>
    )
}

export default Contact