import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  // gearXpert,
  // project2,
  // project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,

  
  trailerApp,
  flavorFleet,
  RAGSystem,
  shopsphere,
  munchify,
} from '../assets';

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Fahiye proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fahiye does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Fahiye optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  // {
  //   name: "Tekisky Mart",
  //   description:
  //     "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "tailwind", color: "white-text-gradient" },
  //     { name: "node", color: "pink-text-gradient" },
  //     { name: "mongodb", color: "green-text-gradient" },
  //   ],
  //   image: project2,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "GearXpert",
  //   description:
  //     "GearXpert is your ultimate destination for premium auto parts and accessories. Whether you're an automobile enthusiast or a professional, find everything you need to upgrade and repair.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "emailJs", color: "green-text-gradient" },
  //     { name: "Gsap", color: "pink-text-gradient" },
  //   ],
  //   image: gearXpert,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "GoGroove-Ecommerce",
  //   description:
  //     "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance and simplify your lifestyle—all in one place!",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "express", color: "white-text-gradient" },
  //     { name: "node", color: "green-text-gradient" },
  //     { name: "mongodb", color: "green-text-gradient" },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Trailer App",
    description:
      "A simple web application that showcases movie trailers. Users can browse and click on movie thumbnails to watch embedded YouTube trailers with a clean and responsive layout.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "white-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: trailerApp,
    source_code_link: "https://github.com/fahiyemuhammad/Phase-1-project",
  },
  {
    name: "ShopSphere",
    description:
      "A React-based e-commerce platform with login/signup, product browsing, cart functionality, and a user profile page. Built using React, context API, and mock backend using JSON server.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "white-text-gradient" },
      { name: "json-server", color: "green-text-gradient" },
    ],
    image: shopsphere,
    source_code_link: "https://github.com/fahiyemuhammad/Phase-2-Project",
  },
  {
    name: "Munchify",
    description:
      "A full-stack food delivery app with user authentication, menu browsing, order placement, and email confirmations. Built with Flask, PostgreSQL, JWT, and Flask-Mail.",
    tags: [
      { name: "flask", color: "pink-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
      { name: "jwt", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
    ],
    image: munchify,
    source_code_link: "https://github.com/fahiyemuhammad/Phase-4-Project-Munchify_Food_Delivery_Appy",
  },
  {
    name: "Flavor-Fleet",
    description:
      "FlavorFlow is a dual-interface food ordering platform featuring a React frontend for customers and admins, powered entirely by n8n workflow automation for the backend.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "white-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "react", color: "blue-text-gradient"},
      { name: "n8n", color: "white-text-gradient"},
    ],
    image: flavorFleet,
    source_code_link: "https://github.com/fahiyemuhammad/FlavorFleet-FoodDeliveryApp.git",
  },
   {
    name: "RAG System",
    description:
      "AgenticRAG is a conversational AI assistant built on a Retrieval-Augmented Generation (RAG) pipeline, utilizing LangChain, ChromaDB, and a multi-LLM backend to provide context-aware, domain-specific answers grounded in a custom knowledge base.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "AI", color: "white-text-gradient" },
      { name: "AI-Agent", color: "yellow-text-gradient" },
      { name: "Langchain", color: "blue-text-gradient"},
    ],
    image: RAGSystem,
    source_code_link: "https://github.com/fahiyemuhammad/Agentic-AI-RAG-System.git",
  },
];

export { services, technologies, experiences, testimonials, projects};
