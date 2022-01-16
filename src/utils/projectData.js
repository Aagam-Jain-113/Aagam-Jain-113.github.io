import Aidzee from '../assets/aidzee.png'
import Invoice from '../assets/invoice.png'
import Speakable from '../assets/speakable.png'
import Whatsup from '../assets/whatsup.png'
import StyleClub from '../assets/styleclub.png'
import Rubex from '../assets/rubex.png'
import Trend from '../assets/trendpvc.png'

const data = {
    personalProjects:[
        {
            title: "Style Club",
            description: "An e-commerce website with user authentication and dashboard",
            tech: "Next.js, TailwindCSS, MongoDB",
            liveLink: "https://style-club.vercel.app/",
            githubLink: "https://github.com/Aagam-Jain-113/style-club",
            preview: StyleClub,
            color: "purple"
        },
        {
            title: "Invoice Generator",
            description: "An app where you can generate and store the invoice locally.",
            tech: "React.js, Firebase",
            liveLink: "https://aagam-jain-113.github.io/invoice-generator/",
            githubLink: "https://github.com/Aagam-Jain-113/invoice-generator",
            preview: Invoice,
            color: "blue"
        },
        {
            title: "Whatsup",
            description: "A clone of web version of whatsapp with firebase authentication",
            tech: "React.js, Firebase",
            liveLink: "https://whatsupchat.netlify.app/",
            githubLink: "https://github.com/Aagam-Jain-113/whatsapp-clone",
            preview: Whatsup,
            color: "green"
        },
        {
            title: "Aidzee",
            description: "A project to connect to your neighbours without.",
            tech: "HTML,CSS,JavaScript,Node.js",
            liveLink: "https://aidzee.netlify.app/",
            githubLink: "https://github.com/Aagam-Jain-113/AidZee",
            preview: Aidzee,
            color: "purple"
        },
        {
            title: "Speakable",
            description: "A web app for Dumb to record their hand gestures and convert to Sound.",
            tech: "JavaScript, Python, TensorFlow",
            liveLink: "https://speakableai.netlify.app/",
            githubLink: "https://github.com/Aagam-Jain-113/Speakable",
            preview: Speakable,
            color: "blue"
        }
    ],
    freelanceProjects: [
        {
            title: "Rubex",
            description: "Figma converted into React code.",
            tech: "React.js, TailwindCSS",
            liveLink: "https://rubexfreelance.netlify.app",
            githubLink: "https://github.com/Aagam-Jain-113/rubex",
            preview: Rubex,
            color: "purple"
        },
        {
            title: "Trend PVC",
            description: "A website created for a local businessman under Lemon8.",
            tech: "React.js, TailwindCSS",
            liveLink: "https://trendpvc.com/",
            githubLink: "https://github.com/lemon-8/trend-laminates/tree/react",
            preview: Trend,
            color: "blue"
        }
    ]
}

export default data;