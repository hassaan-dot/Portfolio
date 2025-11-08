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
import lda from "./assets/education_logo/LDA-Lahore.jpg";
import pgc from "./assets/education_logo/pgc.png";
import ucp from "./assets/education_logo/ucp.png";
// Experience Section Logo's
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import cozywearsLogo from "./assets/company_logo/cozy.png";
// import granjur from "./assets/company_logo/granjur.png";
import freelancer from "./assets/company_logo/freelancer.png";
import upwork from "./assets/company_logo/upwork.png";

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
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
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
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "granjur",
    role: "Nobel Intern",
    company: "Granjur Technology",
    date: "Aug 2024 - dec 2025",
    desc: "Participating in the Nobel Internship Program focused on developing leadership, communication, and project management skills. Engaging in workshops on web design, digital marketing, and teamwork to build well-rounded professional capabilities. Collaborating with peers to design impactful community projects while enhancing problem-solving and creative thinking abilities.",
    skills: [
      "Leadership",
      "Mobile Design",
      "Redux",
      "Communication",
      "Project Management",
      "Pitch and Presentation",
      "Teamwork",
    ],
  },
  {
    id: 1,
    company: "Freelancer.com",
    img: freelancer,
    role: "Full Stack Developer",
    date: "Nov 2024 - Present",
    desc: "Working as a freelance developer on diverse client projects, delivering full-stack solutions with a focus on responsive design, performance, and user-friendly experiences.",
    skills: [
      "Full Stack Development",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "REST APIs",
    ],
  },
  {
    id: 2,
    company: "Upwork",
    img: upwork,
    role: "Frontend Developer",
    date: "Nov 2024 - Present",
    desc: "Collaborating with clients on freelance projects to build responsive, high-performance web applications. Focused on creating modern UI/UX with clean, maintainable code.",
    skills: [
      "Frontend Development",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX",
      "Responsive Design",
    ],
  },
];
export const education = [
  {
    id: 0,
    img: lda,
    school: "LDA MODEL HIGH SCHOOL ",
    location: "Lahore, Punjab, Pakistan",
    date: "2017 - 2018",
    degree: "Matruculation in Computer Science",
    affiliation: "Bise Lahore",
    grade: "A",
    // desc: "Currently pursuing a Bachelor of Information Technology (BIT) degree with a focus on software development, data structures, networking, and database management. Actively involved in projects and internships that strengthen practical skills and industry readiness.",
  },
  {
    id: 1,
    img: pgc,
    school: "Punjab Group Of Colleges",
    location: "Lahore, Punjab, Pakistan",
    date: "2019 - 2021",
    degree: "Intermediate in Computer Science",
    grade: "A",
    // desc: "Completed high secondary education with a focus on management and computer science subjects, building a solid foundation in business concepts and IT fundamentals including basic programming, database concepts, and office applications.",
  },
  {
    id: 2,
    img: ucp,
    school: " University Of Central Punjab",
    location: "Lahore, Punjab, Pakistan",
    date: "Graduated BSCS (2021-2025)",
    degree: "Bachelor in Computer Science",
    grade: "3 GPA",
    // desc: "Successfully completed Secondary Education Examination (SEE) with strong academic performance. Developed interest in computer science and mathematics during this period, laying the groundwork for future IT studies.",
  },
];

export const projects = [
  {
    id: 0,
    title: "ChatBot App - iGuide",
    description:
      "A Python-based chatbot built using Streamlit and Groq API on Groq Cloud. Designed to provide interactive responses with a simple, user-friendly web interface.",
    image: chatbotApp,
    tags: ["Python", "Streamlit", "Groq API", "Groq Cloud"],
    github: "https://github.com/yourgithubusername/chatbot-iguide",
    webapp: "https://iguide.yourdomain.com",
  },
  {
    id: 8,
    title: "Chatting App - Full stack",
    description:
      "A real-time communication platform built with Reactnative and Firebase. Features include user authentication, instant messaging, and media sharing in a sleek, responsive design.Push notifications implemented for message alerts.",
    image: Wechat,
    tags: ["React-Native", "Fiebase", "Google Services", "Figma"],
    // github: "https://github.com/yourgithubusername/chatbot-iguide",
    // webapp: "https://iguide.yourdomain.com",
  },
  {
    id: 1,
    title: "GatherGram - CLI Project",
    description:
      "A command-line interface project focusing on frontend-only logic. Built to demonstrate structured UI flow and interaction patterns in a non-GUI environment.",
    image: GatherGram,
    tags: ["JavaScript", "CLI", "Frontend Logic"],
    github: "https://github.com/yourgithubusername/gathergram",
    webapp: "",
  },
  {
    id: 2,
    title: "Student Portal - Internship Project",
    description:
      "Developed as part of my internship, this portal manages student information, courses, and grades. Gained hands-on experience with database integration and role-based authentication.",
    image: CmsPortal,
    tags: ["Java", "MySQL", "Spring Boot", "Internship Project"],
    github: "https://github.com/yourgithubusername/student-portal",
    webapp: "",
  },
  {
    id: 3,
    title: "Text to Handwritten Converter",
    description:
      "A unique project that converts typed digital text into realistic handwritten-style notes. Inspired by scenarios where students often try to make typed work look handwritten.",
    image: textToHandwritten,
    tags: ["JavaScript", "React Native", "API", "CSS"],
    github: "https://github.com/yourgithubusername/text-to-handwritten",
    webapp: "",
  },
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
