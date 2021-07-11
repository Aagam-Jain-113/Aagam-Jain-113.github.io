import React, { useEffect, useRef } from "react";
import Head from 'next/head';

const index = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="grid grid-cols-8 p-4">
      <Head>
        <title>Aagam Jain</title>
        <meta name="description" content="Aagam Jain || Web Developer || Designer || Freelancer " />
        <link rel="icon" href="/ajremove1.png" />
      </Head>
      <ul className="col-span-8 text-justify lg:col-span-5">
        <li>I'm a Senior Year student pursuing Bachelor of Technology in Electronics and Communication from <span className="font-bold">BIT, Mesra.</span></li><br />
        <li>A <span className="font-bold">Designer</span> with passion for designing beautiful user experience designs.</li> <br />
        <li>A <span className="font-bold">Coder</span> who focuses on writing clean, elegant and efficient code.</li> <br />
        <li>My <span className="font-bold">Passion</span> is to solve smallest of the smallest problems that make a change.</li>
        <li>Looking forward for new <span className="font-bold">opportunites</span> to showcase myself.</li>
      </ul>
      <div className="col-span-8 lg:col-span-3">
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_jaejabqz.json"
          style={{ height: "300px" }}
          className="w-4/5 mx-auto"
        >
        </lottie-player>
      </div>
    </div>
  )
}

export default index;
