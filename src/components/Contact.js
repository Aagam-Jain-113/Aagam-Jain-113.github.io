import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { PopupButton } from 'react-calendly'

function Contact() {
    return (
        <div className='min-h-screen mt-24' id="contact">
            <p className='text-3xl md:text-5xl text-center font-roboto text-green-600 font-semibold'>Contact</p>
            <div className='max-w-screen-lg px-10 font-poppins mx-auto'>
                <div className='bg-green-300 p-10 grid grid-cols-2 gap-10 mt-12 lg:mt-24 w-full rounded-lg shadow-2xl'>
                    <div className='col-span-2 md:col-span-1'>
                        <input type="text" className='w-full rounded-xl px-5 h-10 outline-none shadow-inner bg-green-400 text-white placeholder:text-white' placeholder='Name' />
                        <input type="email" className='w-full mt-4 rounded-xl px-5 h-10 outline-none shadow-inner bg-green-400 text-white placeholder:text-white' placeholder='Email' />
                        <textarea className='w-full rounded-xl mt-4 p-5 h-40 outline-none shadow-inner bg-green-400 text-white placeholder:text-white' placeholder='Your message here' />
                        <button className='text-white bg-green-600 rounded-lg w-32 mt-6 text-center py-2'>Submit</button>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='text-2xl'>Connect with me: </p>
                        <div className='flex space-x-4 text-2xl mt-4'>
                            <a href="https://github.com/Aagam-Jain-113/" aria-label="GitHub" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                                <BsGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/aagam-jain113/" aria-label="Linkedin" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                                <BsLinkedin />
                            </a>
                            <a href="mailto:aagamjain113@gmail.com" className="transform hover:scale-125">
                                <GoMail />
                            </a>
                            <a href="https://twitter.com/AagamJain113" aria-label="Twitter" target="_blank" className="transform hover:scale-125" rel="noreferrer">
                                <BsTwitter />
                            </a>
                        </div>
                        <PopupButton
                            url="https://calendly.com/aagamjain113?primary_color=36e7f7"
                            className="w-1/2 px-2 py-2 mt-12 text-white rounded-full bg-green-600 hover:bg-green-700"
                            text="Lets connect!"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
