import project1 from "../assets/projects/project-1.jpg";
import vibe from "../assets/projects/VibeAndDine.jpg"
import Heart from "../assets/projects/HeartDisease.jpg"
import Portfolio from "../assets/projects/Portfolio.png"


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  
  {
    year: "2023 - 2024",
    role: "Machine Learning Mentor",
    company: "GDSC",
    description: `Have an experience in Building And Deploying Machine Leaning Models and Data Scientist Job as well as management of Teams and providing better working environment `,
    technologies: ["python", "Machine Learning", "DataScience", "Streamlit", "Flask","API"],
  },

];

export const PROJECTS = [
  {
    title: "Vibe And Dine ",
    image: vibe,
    description:
      "A Dinning and Hotels booking site where anyone can order meals and book hotels.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Boostrap", "PHP"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Frammer Motion"],
  },
  {
    title: "Heart Disease Prediction",
    image: Heart,
    description:
      "A Machine Learning based model which predicts whether a person will have heart disease in future based on thier different Medical Inputs like Blood Pressure, Heart Rate, Fasting blood Sugar etc.",
    technologies: ["Python","Pandas","Numpy","MatplotLib","Seaborn","ScikitLearn", "Streamlit"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  
];

export const CONTACT = {
  address: "BBDITM Ayodhya Rd, Lucknow, Uattardhona, Uttar Pradesh 226028 ",
  phoneNo: "+91 9898989898 ",
  email: "amritanshuchauhan1@gmail.com",
};
