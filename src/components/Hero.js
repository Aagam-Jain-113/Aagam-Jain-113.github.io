import React from 'react'
import Typewriter from 'typewriter-effect'

function Hero() {
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    })
    return (
        <div>
            <div className="text-2xl lg:text-5xl py-20 px-10 lg:px-0 w-full">
                <div className='max-w-screen-lg mx-auto'>
                    <div className='grid grid-cols-2 items-center justify-center'>
                        <div className='col-span-2 sm:col-span-1'>
                            <p>Hi,</p>
                            <p>I'm <span className='text-4xl lg:text-6xl mt-4 font-medium text-green-800'>Aagam Jain,</span></p>
                            <p className='mt-4'>
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Designer', 'Freelancer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                        </div>
                        <div className='col-span-2 mt-6 sm:mt-0 sm:col-span-1'>
                            <lottie-player
                                id="firstLottie"
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets6.lottiefiles.com/packages/lf20_1LhsaB.json"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
