import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Aagam Jain</title>
        <meta name="description" content="Aagam Jain || Web Developer || Designer || Freelancer " />
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 my-16 lg:px-40 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp;
