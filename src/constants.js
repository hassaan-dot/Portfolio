// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/AngularIcons.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import reactnativeLogo from "./assets/tech_logo/reactnative.png"; // ✅ Fixed name

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import AngularIcon from "../assets/tech_logo/AngularIcons";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import canvaLogo from "./assets/tech_logo/canva.png";
import supabaseLogo from "./assets/tech_logo/supabase.svg";
import nestjsLogo from "./assets/tech_logo/nestjs.svg";
import digitaloceanLogo from "./assets/tech_logo/digitalocean.svg";
import vpsServerLogo from "./assets/tech_logo/vps-server.svg";
import kotlinLogo from "./assets/tech_logo/kotlin.svg";
import lda from "./assets/education_logo/LDA-Lahore.jpg";
import pgc from "./assets/education_logo/pgc.png";
import ucp from "./assets/education_logo/ucp.png";
// Experience Section Logo's
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import cozywearsLogo from "./assets/company_logo/cozy.png";
import granjur from "./assets/company_logo/granjur.png";
import ikGroup from "./assets/company_logo/ik_group.png";
import freelancer from "./assets/company_logo/freelancer_new.png";
// import upwork from "./assets/company_logo/upwork_new.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import img1 from "./assets/project_logo/1.png";
import img2 from "./assets/project_logo/2.png";
import img3 from "./assets/project_logo/3.png";
import img4 from "./assets/project_logo/4.png";
import chatbotApp from "./assets/project_logo/chatbotApp.png";
import Wechat from "./assets/project_logo/Wechat.png";
import CmsPortal from "./assets/project_logo/CmsPortal.png";
import GatherGram from "./assets/project_logo/GatherGram.png";
import textToHandwritten from "./assets/project_logo/textToHandwritten.png";
import racingApp from "./assets/project_logo/RacingApp.png";
// import rideXpress from "./assets/project_logo/RideXpress.png";

//Achievements Section Logo's
import ach1 from "./assets/achievements_logo/1.png";
import ach2 from "./assets/achievements_logo/2.png";
import ach3 from "./assets/achievements_logo/3.png";
import ach4 from "./assets/achievements_logo/4.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "React Native", logo: reactnativeLogo },
      { name: "Angular", logo: angularLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Nest JS", logo: nestjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Supabase", logo: supabaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", logo: typescriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "Kotlin", logo: kotlinLogo },
      { name: "C++", logo: cppLogo },
      { name: "C", logo: cLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
      { name: "Digital Ocean", logo: digitaloceanLogo },
      { name: "VPS Server", logo: vpsServerLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: granjur,
    role: "Mobile Application Developer",
    company: "Granjur Technology",
    date: "Aug 2024 - Jan 2025",
    desc: "Worked as a Mobile App Developer Intern (Front-End) at Granjur Technology, developing and maintaining front-end features for mobile applications. Designed responsive, user-friendly interfaces, converted UI/UX designs into functional app screens, and collaborated with back-end developers and designers. Participated in debugging, performance improvements, and delivering a smooth user experience.",
    skills: [
      "Mobile Development",
      "React Native",
      "UI/UX",
      "Front-End",
      "Debugging",
      "Team Collaboration",
    ],
  },
  {
    id: 1,
    company: "Freelancing",
    img: freelancer,
    role: "Full Stack Web Developer",
    date: "Mar 2025 - Present",
    desc: "Worked as a Freelance Full-Stack Web Developer on outsourced projects, designing, developing, and deploying complete web applications. Handled both front-end and back-end development, built responsive UIs, implemented server-side logic, integrated databases and APIs, and ensured performance, security, and scalability while collaborating with clients to deliver high-quality solutions on time.",
    skills: [
      "Full Stack Development",
      "React",
      "Node.js",
      "Express.js",
      "Databases",
      "REST APIs",
      "Deployment",
    ],
  },
  {
    id: 2,
    img: ikGroup,
    role: "Software Developer",
    company: "IK Group of companies",
    date: "Jan 2026 - Present",
    desc: "Responsible for developing and maintaining software applications, implementing new features, managing databases and integrations, troubleshooting technical issues, improving system performance, collaborating with team members, and ensuring smooth deployment and maintenance of applications.",
    skills: [
      "Software Development",
      "Full Stack Development",
      "Databases",
      "API Integration",
      "Mobile Development",
      "React Native",
      "Deployment",
    ],
  },
];
export const education = [
  {
    id: 0,
    img: lda,
    school: "LDA Model High Secondary School",
    location: "Lahore, Punjab, Pakistan",
    date: "2016 - 2018",
    degree: "Matriculation",
    affiliation: "Bise Lahore",
    grade: "A",
  },
  {
    id: 1,
    img: pgc,
    school: "Punjab Group Of Colleges",
    location: "Lahore, Punjab, Pakistan",
    date: "2018 - 2020",
    degree: "Intermediate",
    grade: "A",
  },
  {
    id: 2,
    img: ucp,
    school: "University Of Central Punjab",
    location: "Lahore, Punjab, Pakistan",
    date: "2021 - 2025",
    degree: "Bachelor's in Computer Sciences",
    grade: "3 GPA",
  },
];

export const projects = [
  {
    id: 1,
    title: "ChatBot App - iGuide",
    description:
      "A Python-based chatbot built using Streamlit and Groq API on Groq Cloud. Designed to provide interactive responses with a simple, user-friendly web interface.",
    image: chatbotApp,
    tags: ["Python", "Streamlit", "Groq API", "Groq Cloud"],
  },
  {
    id: 2,
    title: "Chatting App - Full stack",
    description:
      "A real-time communication platform built with React Native and Firebase. Features include user authentication, instant messaging, and media sharing in a sleek, responsive design. Push notifications implemented for message alerts.",
    image: Wechat,
    tags: ["React-Native", "Firebase", "Google Services", "Figma"],
  },
  {
    id: 3,
    title: "Racing WebApp - Full stack",
    description:
      "DB-driven Website with API sync for racing events. Features user registration, event scheduling, and live updates. Built with React for frontend and Node.js for backend.",
    image: racingApp,
    tags: ["React", "Node.js", "API", "PostgreSQL"],
    github: "https://github.com/hassaan-dot/raceApps",
    webapp: "http://157.230.96.126:5173/",
  },
  {
    id: 4,
    title: "GatherGram - CLI Project",
    description:
      "A command-line interface project focusing on frontend-only logic. Built to demonstrate structured UI flow and interaction patterns in a non-GUI environment.",
    image: GatherGram,
    tags: ["JavaScript", "CLI", "Frontend Logic"],
  },
  {
    id: 5,
    title: "Student Portal - Internship Project",
    description:
      "Developed as part of my internship, this portal manages student information, courses, and grades. Gained hands-on experience with database integration and role-based authentication.",
    image: CmsPortal,
    tags: ["Java", "MySQL", "Spring Boot", "Internship Project"],
  },
  {
    id: 6,
    title: "Text to Handwritten Converter",
    description:
      "A unique project that converts typed digital text into realistic handwritten-style notes. Inspired by scenarios where students often try to make typed work look handwritten.",
    image: textToHandwritten,
    tags: ["JavaScript", "React Native", "API", "CSS"],
  },
  // {
  //   id: 7,
  //   title: "GamesScout Marketplace - FYP",
  //   description:
  //     "Final year project as a Full-Stack Developer with group members, developing GAMESCOUT Marketplace, a web-based platform. Contributed to front-end and back-end development, including responsive UIs, core application logic, database and API integration, and secure, efficient performance.",
  //   image: img1,
  //   tags: ["Full Stack", "React", "Node.js", "Marketplace"],
  //   github: "https://github.com/hassaan-dot/Game_Scout_MarketPlace_FYP",
  // },
  // {
  //   id: 8,
  //   title: "bGate Crypto Website",
  //   description:
  //     "Worked on the BGate website, implementing dynamic content management features, improving website functionality, and developing admin panel capabilities to manage website content.",
  //   image: img2,
  //   tags: ["Web Development", "Admin Panel", "CMS", "Backend Integration"],
  //   webapp: "https://www.bgate.uk/",
  // },
];

export const achievements = [
  {
    id: 1,
    title: "National Hackathon Finalist",
    image: ach1,
    description:
      "Finalist of CodeFest, Nepal's biggest hackathon, representing Bagmati Province with project 'Sahayatri'",
  },
  {
    id: 2,
    title: "IT Mela Winner",
    image: ach2,
    description:
      "Won first position in project competition during IT Mela organized by Aryan School of Engineering and Management.",
  },
  {
    id: 4,
    title: " Winner – House Model Competition by Skill Sewa",
    image: ach4,
    description:
      "Secured first place with a commercial hotel model featuring IoT and Bluetooth-based LED lighting, showcasing smart, energy-efficient design and modern tech integration.",
  },
  {
    id: 3,
    title: "IT Club President",
    image: ach3,
    description:
      "Serving as the President of the IT Club at Aryan School of Engineering and Management, leading training, events, and student development.",
  },
];
