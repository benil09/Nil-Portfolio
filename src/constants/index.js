import keepnotes from "../assets/projects/keepnotes.png";
import project1 from "../assets/projects/project-1.png";
import design from "../assets/projects/design.png";
import zerodha from "../assets/projects/zerodha.png"
import gardener from "../assets/projects/gardener.png"

export const HERO_CONTENT = `I am a passionate full-stack developer and UI/UX designer dedicated to crafting robust, scalable, and user-centric web applications. With expertise in front-end technologies like React and Tailwind CSS, and proficiency in back-end technologies such as Node.js, MongoDB, and MySQL, I specialize in building seamless, high-performing solutions. My hands-on experience includes creating responsive interfaces, innovative IoT projects, secure authentication systems, and intuitive designs that enhance user experiences. I thrive on leveraging my technical and design expertise to drive impactful business outcomes while delivering exceptional and aesthetically pleasing digital products.`;

export const ABOUT_TEXT = `I am Nilkamal Priyadarshi, a passionate Electronics and Communication Engineering student at IIIT Ranchi with a strong inclination toward technology and innovation. Alongside my academic pursuits, I am a proficient full-stack developer skilled in technologies like MongoDB, React, Node.js, and Express.js. I have a solid foundation in Java and am actively honing my Data Structures and Algorithms (DSA) skills to enhance my problem-solving abilities.

In addition to development, I am a creative and detail-oriented UI/UX designer, dedicated to crafting intuitive and visually appealing user experiences. My expertise spans designing and building efficient, user-friendly applications, ensuring seamless interaction between functionality and aesthetics.


Driven by a zeal to create impactful solutions, I have worked on diverse projects, including smart systems, responsive web applications, and collaborative platforms. I thrive on challenges and continuously seek opportunities to learn and grow in the ever-evolving tech landscape.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "B.Tech.",
    company: "Electronics And Communication Engineering",
    description: `I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) from the Indian Institute of Information Technology (IIIT), Ranchi. My academic journey equips me with a strong foundation in electronic systems, communication technologies, and cutting-edge innovations, preparing me for impactful contributions in the field.`,
    technologies: [],
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
    description: `I pursued my higher secondary education at Sun Shine Residential Public School, Maner, Patna where I focused on developing a strong academic foundation. I successfully achieved 85% in my Intermediate examinations, showcasing my dedication, consistency, and ability to perform well in a structured and challenging academic environment.`,
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

export const projects = {
  featured: [
    {
      id: 1,
      name: "KeepNotes",
      description:
        "KeepNotes is a full-stack notes management web application built using the MERN stack. It allows users to create, edit, and delete notes efficiently. The project uses MongoDB for data storage, Express and Node.js for the backend, and React for a responsive frontend, providing a simple, secure, and user-friendly note-taking experience.",
      bullets: [
        "Generate secure passwords with custom options",
        "Store and manage passwords locally",
        "Modern UI with responsive design",
      ],
      tags: ["MongoDB", "Express", "NodeJs", "React"],
      githubLink: "https://github.com/benil09/keepNotes",
      externalLink: "#",
      imagePosition: "left",
      image: keepnotes,
    },
    {
      id: 2,
      name: "Full Stack Auth System",
      description:
        "Full Stack Authentication System is a secure, production-ready user authentication solution built using the MERN stack. The system provides essential authentication features, including user registration, login, and secure token-based session management, ensuring both data security and smooth user experience.",

      bullets: [
        "Secure user registration and login system",
        "Passwords encrypted with bcryptJS for enhanced security",
        "Token-based authentication using JWT for session management",
        "Responsive and user-friendly UI",
        "Frontend and backend fully integrated with MongoDB for data persistence"
      ],
      tags: ["ExpressJS", "MongoDB", "NodeJS", "React", "bcryptJS", "JWT"],
      githubLink: "#",
      externalLink: "#",
      imagePosition: "right",
      image: project1,
    },
  ],
  others: [
    {
      id: 3,
      name: "EduSync - A figma based design project",
      description:
        "EduSync is a Figma-based design prototype for a student-focused collaboration platform that enhances academic engagement within a college or university environment.",
       bullets: [
      "Resource Sharing: Exchange notes, previous year question papers, and important academic materials.",
      " Academic Hub: Centralized space for assignments, notes, and reminders with deadline notifications.",
      "Real-Time Communication: Group chats, announcements, and discussions to foster collaboration.",
      " Anonymous Confession Space: Safe space for students to share thoughts anonymously with moderation controls.",
      "Modern, Intuitive UI: Clean, accessible, and user-friendly design tailored for students and educators."
    ],
    status:"This project is currently in the design phase with Figma prototypes ready. Future plans involve developing this into a full-stack web application using technologies like React, Node.js, and MongoDB, ensuring both functionality and scalability.",
      image:design,
      tags: ["Figma"],
      githubLink: "#",
      externalLink: "https://www.figma.com/design/H3Gklrrn27SuGiwaFmHKtg/InterlayProject?node-id=1-3&t=X1zs40HU3BGyvpdn-1",
    },
    {
  id: 4,
  name: "Zerodha Frontend Clone",
  description:
    "A pixel-perfect, fully responsive frontend clone of the Zerodha website built using React. The project replicates the structure, design, and core UI/UX of Zerodha, along with functional routing and navigation features, offering a near-real experience of the actual platform.",
  bullets: [
    "Fully responsive design replicating Zerodha's layout.",
    "Implemented client-side routing with React Router.",
    "Interactive homepage with modern UI components.",
    "Pricing, product, and awards sections integrated with reusable components.",
    "Optimized for all screen sizes using Bootstrap and responsive utilities.",
    "Clean, maintainable code structure following modern React best practices."
  ],
  status: "The project is feature-complete from a frontend perspective. Future enhancements may include backend integration to make the clone functional for real-time trading simulations.",
  image: zerodha, // Replace with the actual image import if available
  tags: ["React", "Bootstrap", "Responsive Design"],
  githubLink: "https://github.com/benil09/zerorhaClone", // Replace with actual GitHub repo link
  externalLink: "#" // Replace with deployed project link if hosted
},
{
  id: 5,
  name: "Smart Gardening System",
  description:
    "An IoT-powered Smart Gardening System designed to automate plant care by monitoring soil moisture and environmental conditions. The system uses real-time data to efficiently manage watering schedules, ensuring optimal plant health with minimal manual intervention.",
  bullets: [
    "Automated watering system based on soil moisture levels.",
    "Soil moisture sensor triggers watering when moisture falls below 30%.",
    "Displays real-time temperature and moisture data on a responsive web interface.",
    "Built using IoT technologies integrated with a web dashboard for easy monitoring.",
    "Future enhancement possibilities include mobile notifications and advanced plant health analytics."
  ],
  status: "The core functionality, including moisture detection and automated watering, is fully implemented. The system's web interface displays live data, with further plans to expand into mobile alerts and advanced monitoring.",
  image:gardener, // Replace with the actual image import if available
  tags: ["IoT", "React", "Automation", "Web Dashboard","Firebase"],
  githubLink: "https://github.com/benil09/gardener", // Replace with actual GitHub repo link if available
  externalLink: "#" // Replace with deployed project link if hosted
}
  ],
};

export const CONTACT = {
  address:
    "BSNL Campus , IIIT Ranchi Hostel , Jumar river Bridge , Getlatu , Ranchi , Jharkhand - 835217",
  phoneNo: "+91 8271069262",
  email: "nilkamal.2023UG2027@iiitranchi.ac.in",
};
