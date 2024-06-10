import { meta, shopify, starbucks, tesla, bstar } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    track,
    camera
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "BStar Solutions",
        icon: bstar,
        iconBg: "#accbe1",
        date: "Jun 2022 – Jul 2022",
        points: [
            "Using React.js to develop and maintain web applications.",
            "Responsible for displaying a list of complaints and users.",
            "Implementation of filter and pagination functionalities.",
            "Integration of an export-to-Excel function.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "BStar Solutions",
        icon: bstar,
        iconBg: "#fbc3bc",
        date: "Aug 2022 – Feb 2023",
        points: [
            "Developed APIs related to editing user information using Nest.js.",
            "Implemented authentication APIs for user management.",
            "Created permission-related APIs using Nest.js with a microservices architecture.",
            "Transferred the Nest.js microservices to Java for collaboration with another team within the project.",
            "Implemented an API for editing user information that requires OTP (One-Time Password) for added security.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/long-zest',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-commerce website full-stack',
        description: ' With this website, I have done all functions such as authentication, authorization, ordering, shopping cart, commenting, product and order management on both frontend and backend.',
        link: 'https://github.com/long-zest',
    },
    {
        iconUrl: camera,
        theme: 'btn-back-green',
        name: 'Full Stack Website for sharing videos and images',
        description: 'With this project, I have done all the functions such as authentication, authorization, required functions, video and image management, scoring system for posted content, tier system for people to apply, exchange points into a function of the system, the function of contacting the admin, in addition, the project also integrates an algorithm to suggest content for users through the scoring system.',
        link: 'https://github.com/long-zest',
    },
    {
        iconUrl: track,
        theme: 'btn-back-blue',
        name: 'Covid-tracker Api',
        description: 'Combine chartjs and get api from disease.sh tracking people get covid and people cured and show it on one map.',
        link: 'https://github.com/long-zest',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Range Bound API',
        description: ' In this project we need to provide upperbound, lowerbound, and then the value that we want to check, then the system will check whether that element is in the range we provide or not. Projects have several types of ranges and it can also check different types of values like a number, string, date, and decimal number.',
        link: 'https://github.com/long-zest',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Nextjs Portfolio app',
        description: 'This portfolio project serves dual purposes: showcasing my skills and serving as a learning platform. Utilizing Next.js and Chakra UI for the foundational UI components, the app seamlessly integrates advanced 3D animations powered by Three.js and React Three Fiber.',
        link: 'https://github.com/long-zest',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Memories app',
        description: 'Just a basic project used to store memories, it is like a note app but it can upload images, using Reactjs for frontend and Nodejs for backend with database Mongodb have Aws for upload images.',
        link: 'https://github.com/long-zest',
    }
];