// Hero
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    link: "https://www.linkedin.com/in/amit-sutradhar-103ab6293/",
    icon: <LinkedinLineIcon />,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100077445633356",
    icon: <FacebookCircleLineIcon />,
  },
  { link: "https://github.com/AmitSutradhar001", icon: <GithubLineIcon /> },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 60,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 10,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Internships",
    amount: 2,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and Recognition",
    amount: 5,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  " Hi, I'm Amit, a web developer & css designer. I blend the technical  skills of web development with the creative aspects of css design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 2,
    title: "Foundation and Basics",
    education:
      "High School Diploma: Focus on computer application, art courses.",
    experience: [
      "Basic HTML/CSS: Learn through online tutorials and courses.",
      "Personal Projects: Create simple personal websites.",
    ],
    start: 2017,
  },
  {
    year: 3,
    title: "Advanced Learning and Early Experience",
    education:
      "Associate's Degree in Bachelor of Computer Application: Enroll in a 3-year program covering computers and how it works.",
    experience: [
      "Online Courses and Certifications: Learn JavaScript, Databases and more.",
    ],
    start: 2019,
  },
  {
    year: 1,
    title: "Specialized Education and Real-World Application",
    education:
      "Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Next) and back-end technologies (Node.js, Express.js).",
    experience: [
      "Projects: Created many personal projects using the tech stack.",
    ],
    start: 2023,
  },
  {
    year: 1,
    title: "Building Expertise and Expanding Skills",
    education:
      "Certifications: Obtain certifications in advanced web technologies.",
    experience: [
      "Internship Position: Work as a web developer intern.",
      "Portfolio Development: Continuously update your portfolio with professional and personal projects.",
    ],
    start: 2024,
  },
];

// Skills
export const skillsData = [
  {
    name: "Figma",
    icon: "/skills/figma.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "ExpressJS",
    icon: "/skills/express.png",
  },
  {
    name: "ShadCN",
    icon: "/skills/shadcn.png",
  },
  {
    name: "JWT",
    icon: "/skills/jwt.png",
  },
  {
    name: "Vercel",
    icon: "/skills/vercel.png",
  },
  {
    name: "AceternityUI",
    icon: "/skills/aceternityui.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const projectsButton = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "TailwindCSS",
  "ReactJS",
  "TypeScript",
  "Shadcn",
  "Framer Motion",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "JWT",
  "AceternityUI",
  "MongoDB",
];

// Projects
export const projectsData = [
  {
    name: "Video Calling Web",
    desc: "A website for personal, group, and scheduled video calls.",
    url: "/projects/video-call.png",
    tech: ["NextJS", "TypeScript", "HTML", "TailwindCSS"],
  },
  {
    name: "A E-Commerce Website",
    desc: "A full-stack e-commerce website for buying and selling clothes for everyone. I’m currently working on this project.",
    url: "/projects/e-com.png",
    tech: ["NextJS", "TypeScript", "HTML", "TailwindCSS", "Shadcn", "Prisma"],
  },
  {
    name: "An Article Admin Dashboard",
    desc: "An admin dashboard UI built with Shadcn components, featuring filtering and tooltip functionality.",
    url: "/projects/sadcn-ui-dashbord.png",
    tech: ["ReactJS", "JavaScript", "HTML", "TailwindCSS", "Shadcn"],
  },
  {
    name: "AS Blogs",
    desc: "A full-stack blogging platform where users can create and share their blogs.",
    url: "/projects/as-blog.png",
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "CSS",
    ],
  },
  {
    name: "Collab",
    desc: "A freelance-style platform developed during my internship, where admins post tech-related problems and contributors solve them to earn rewards.",
    url: "/projects/collab.png",
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "CSS",
    ],
  },
  {
    name: "Foodies",
    desc: "A recipe-sharing website featuring food images, detailed recipes, and an option to post your own creations.",
    url: "/projects/foodies.png",
    tech: ["NextJS", "TypeScript", "HTML", "TailwindCSS", "MongoDB", "CSS"],
  },
  {
    name: "Code Homies UI",
    desc: "A complex and responsive UI design project built using ReactJS.",
    url: "/projects/code-homies-ui.png",
    tech: ["ReactJS", "JavaScript", "HTML", "TailwindCSS", "CSS"],
  },
  {
    name: "Music Classes UI",
    desc: "An online music class interface featuring a complex, modern design with full responsiveness.",
    url: "/projects/music-class.png",
    tech: ["NextJS", "TypeScript", "HTML", "AceternityUI", "CSS"],
  },
  {
    name: "Portfolio Website for Myself",
    desc: "A personal portfolio website showcasing my work, skills, and projects.",
    url: "/projects/portfolio.png",
    tech: ["NextJS", "TailwindCSS", "JavaScript", "Framer Motion"],
  },
  {
    name: "DashbordUI",
    desc: "A dashboard UI designed in ReactJS with advanced styling and layout techniques.",
    url: "/projects/dasbord-ui.png",
    tech: ["ReactJS", "JavaScript", "HTML", "TailwindCSS", "CSS"],
  },

  {
    name: "Quotes Generator",
    desc: "A random quote generator where users can save quotes they like or skip for new ones.",
    url: "/projects/r-quotes.png",
    tech: ["ReactJS", "JavaScript", "TailwindCSS"],
  },
  {
    name: "Task Management",
    desc: "A task management tool that allows users to add and organize their daily tasks efficiently.",
    url: "/projects/todo.png",
    tech: ["ReactJS", "TailwindCSS"],
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },

  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },

  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
