import project1 from './src/assets/projects/project-1.png'
import project2 from './src/assets/projects/project-2.png'
import project3 from './src/assets/projects/project-3.jpg'



export const HERO_NAME = "Rakesh M";
export const HERO_CONTENT = `I am a passionate full stack developer with 2 years of experience in building responsive and scalable web applications. My expertise lies in front-end and back-end technologies, including React.js, Node.js, MongoDB, HTML, and CSS. I strive to create seamless user experiences and efficient web solutions.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with 2 years of experience in crafting dynamic and responsive web applications. My primary tech stack includes React.js for frontend development, Node.js for backend logic, MongoDB for database management, and HTML/CSS for creating user-friendly interfaces. I have a keen interest in optimizing performance and enhancing user engagement through modern web technologies.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "MERN Stack Intern",
    company: "Better Tomorrow",
    description: `A three-week internship provided extensive learning on the MERN stack, covering full-cycle web development: frontend (React), backend (Node.js), and database management (MongoDB). The focus was on ensuring smooth integration across all layers to develop functional web applications.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
];

export const PROJECTS = [
  {
    title: "Bookify - Bookstore Management",
    year: "2024",
    image:project1,
    description:
      "Developed a MERN stack application to streamline book inventory, customer orders, and sales tracking. The system included features for managing and uploading book details, improving overall efficiency.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "DailyNews - React News App",
    year: "2024",
    image:project2,
    description:
      "Developed 'DailyNews,' a React-based application leveraging the NewsAPI for real-time news fetching, showcasing API integration and frontend development skills.",
    technologies: ["React.js", "TailwindCSS", "RTK (Redux Toolkit)"],
    api: "newsdata.io",
  },
  {
    title: "ShopEase - E-Commerce",
    year: "2024",
    image:project3,
    description:
      "Shop Ease is an e-commerce project designed to offer a smooth shopping experience. The current focus is on completing user authentication, with plans to add more features soon to improve convenience and overall user functionality.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const CONTACT = {
  email: "rakeshm888p@gmail.com",
};
