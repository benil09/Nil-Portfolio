import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Nilkamal Priyadarshi, a passionate Electronics and Communication Engineering student at IIIT Ranchi with a strong inclination toward technology and innovation. Alongside my academic pursuits, I am a proficient full-stack developer skilled in technologies like MongoDB, React, Node.js, and Express.js. I have a solid foundation in Java and am actively honing my Data Structures and Algorithms (DSA) skills to enhance my problem-solving abilities.

In addition to development, I am a creative and detail-oriented UI/UX designer, dedicated to crafting intuitive and visually appealing user experiences. My expertise spans designing and building efficient, user-friendly applications, ensuring seamless interaction between functionality and aesthetics.


Driven by a zeal to create impactful solutions, I have worked on diverse projects, including smart systems, responsive web applications, and collaborative platforms. I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving tech landscape.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "B.Tech.",
    company: "Electronics And Communication Engineering",
    description: `I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) from the Indian Institute of Information Technology (IIIT), Ranchi. My academic journey equips me with a strong foundation in electronic systems, communication technologies, and cutting-edge innovations, preparing me for impactful contributions in the field.`,
    technologies:[]
    
  },
  {
    year: "2022 - 2023",
    role: "Drop Year ",
    company: "JEE Prepration",
    description: `From 2022 to 2023, I dedicated myself to preparing for the Joint Entrance Examination (JEE) and achieved a commendable 96 percentile in the JEE Mains, demonstrating strong analytical and problem-solving skills essential for engineering disciplines.`,
    technologies: [],
  },
  {
    year: "2020 - 2022",
    role: "High Schooling",
    company: "Sun Shine Resedential Public School",
    description: `I pursued my higher secondary education at Sun Shine Residential Public School, Maner, where I focused on developing a strong academic foundation. I successfully achieved 85% in my Intermediate examinations, showcasing my dedication, consistency, and ability to perform well in a structured and challenging academic environment.`,
    technologies: [],
  },
  {
    year: "till 2020",
    role: "Matriculation",
    company: "Satyam International",
    description: `I completed my matriculation from Satyam International School, where I laid a strong foundation for my academic journey. I achieved an outstanding 93% in my 10th board examinations, reflecting my commitment to excellence, attention to detail, and ability to excel in a competitive academic environment.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Next-JS Authentication System",
    image: project1,
    description:
      "Designed and implemented a comprehensive authentication system with features such as user login, signup, and secure data storage in a MongoDB database. The system incorporates token-based authentication to ensure secure user sessions, enabling seamless navigation to a dynamic homepage upon successful verification. Prioritized security, scalability, and a user-friendly interface throughout development.",
    technologies: ["Next-JS","MongoDB","TailwindCSS","axios",],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Tailwind","Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "BSNL Campus , IIIT Ranchi Hostel , Jumar river Bridge , Getlatu , Ranchi , Jharkhand - 835217",
  phoneNo: "+91 8271069262",
  email: "nilkamal.2023UG2027@iiitranchi.ac.in",
};
