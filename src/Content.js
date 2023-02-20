// import images
import Hero_person from "./assets/images/Hero/person2.png";
import CV from "./assets/images/Hero/file/Vandana CV (1).pdf"

import flexor from "./assets/images/Projects/flexor.png";
import todo from "./assets/images/Projects/todo.png";
import shoping from "./assets/images/Projects/shoping.jpg";
import tictaktoe from "./assets/images/Projects/tictoktoe.png";
import netflex from "./assets/images/Projects/Netflix_.webp";
import counter from "./assets/images/Projects/counter-icon-vector-1013231.jpg";

import articles_logo1 from "./assets/images/Articles/React-icon.svg.png";
import articles_logo2 from "./assets/images/Articles/js-logo.webp";
import articles_logo3 from "./assets/images/Articles/React-icon.svg.png";

import skill1 from "./assets/images/Skill/HTML.png";
import skill2 from "./assets/images/Skill/css.webp";
import skill3 from "./assets/images/Skill/sass.svg";
import skill4 from "./assets/images/Skill/Tailwind.png";
import skill5 from "./assets/images/Skill/JavaScript-logo.png";
import skill6 from "./assets/images/Skill/Node.js.png";
import skill7 from "./assets/images/Skill/React.png";
import skill8 from "./assets/images/Skill/Git.png";
import skill9 from "./assets/images/Skill/MongoDB-Logo.jpg";
import skill10 from "./assets/images/Skill/redux.png";
import skill11 from "./assets/images/Skill/express.webp";
import person_skill from "./assets/images/Skill/personfix-removebg-preview.png";

import avatar1 from "./assets/images/Education/Babasaheb_Bhimrao_Ambedkar_Bihar_University_logo.png";
import avatar2 from "./assets/images/Education/altcampus.jpg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { AiFillEdit,AiFillFolder } from "react-icons/ai";
import { TbSmartHome } from "react-icons/tb";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#project",
      icon: AiFillFolder,
    },
    {
      link: "#articles",
      icon: AiFillEdit,
    },
    {
      link: "#skill",
      icon: RiProjectorLine,
    },
    {
      link: "#education",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  hero: {
    title: "Frontend Developer",
    firstName: "Vandana",
    LastName: "Kumari",
    CV: CV,
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Frontend development",
      },
      {
        count: "40+",
        text: "Projects Worked in my career",
      },
    ],
  },
  Project: {
    title: "Projects",
    projects_content: [
      {
        name: "FLEXOR",
        para: "HTML | CSS | NETLIFY ",
        para1: "This is responsive based UI.",
        live:"https://flexor-1.netlify.app/",
        github:"https://github.com/Vandanakri/checkpoint-4",
        logo: flexor,
      },
      {
        name: "NETFLIX",
        para:  "REACT | REACT-ROUTER",
        para4: "It is a Netflix app, where user can Signin, Although my web app looks and feels like Netflix, it functions differently. Since I can't create a database with full movies of everytitle, I decided to play movies from YouTube.",
        github: "https://github.com/Vandanakri/netflix",
        live: "https://netflix-ecru-six.vercel.app/",
        logo: netflex,
      },
      {
        name: "TODO",
        para:  "REACT | REDUX | NETLIFY ",
        para2: "This is a basic Todo app,user can add todo and remove todo",
        github: "https://github.com/Vandanakri/Todo-with-Hooks",
        live: "https://todoapp-with-hooks.netlify.app/",
        logo: todo,
      },
      {
        name: "TIC TAC TOE",
        para:  "REACT | REACT-ROUTER ",
        para5: "Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid. There is no universally-agreed rule as to who plays first, but in this article the convention that X plays first is used.",
        github: "https://github.com/Vandanakri/Tic-Tac-Toe",
        live: "https://cross-tick-game.netlify.app",
        logo: tictaktoe,
      },
      {
        name: "SHOPING",
        para: "REACT | REDUX | VERCEL ",
        para3: "This is a shopping cart app, where user can add and remove items as users wish,users can also select size as users wish.",
        github: "https://github.com/Vandanakri/shopping-app",
        live: "https://shopping-app-jade.vercel.app/",
        logo: shoping,
      },
      {
        name: "MONTHLY TRACKER",
        para:"REACT | REACT-ROUTER",
        para6: "It is an SSR application. here we can log in using various method. In this app user can manage there expenses.",
        github: "https://github.com/Vandanakri/Monthly-Activity-Tracker",
        live: "https://monthly-tracker.netlify.app",
        logo: counter,
      },
    ],
    icon: MdArrowForward,
  },
  articles: {
    title: "Articles",
    article_content: [
      {
        title: "Class and Functional Components",
        para: "A component represents the part of the user interface components are reusable and can be used anywhere in the user interface",
        more:"https://vandanakri.hashnode.dev/class-components-and-functional-component",
        logo: articles_logo1,
      },
      {
        title: "JavaScript Promise",
        para: "Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations .",
        more:"https://vandanakri.hashnode.dev/javascript-promise",
        logo: articles_logo2,
      },
      {
        title: "Lifecycle Components",
        para: "Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.The three phases are: Mounting, Updating, and Unmounting.",
        more:"https://vandanakri.hashnode.dev/lifecycle-of-components",
        logo: articles_logo3,
      },
    ],
  },
  Skill: {
    title: "Skills",
    image: person_skill,
    skill_content: [
      {
        title: "Gym Website",
        image1: skill1,
      },
      {
        title: "Social Media web",
        image1: skill2,
      },
      {
        title: "Creative Website",
        image1: skill3,
      },{
        title: "Creative Website",
        image1: skill4,
      },{
        title: "Creative Website",
        image1: skill5,
      },{
        title: "Creative Website",
        image1: skill6,
      },{
        title: "Creative Website",
        image1: skill7,
      },{
        title: "Creative Website",
        image1: skill8,
      },{
        title: "Creative Website",
        image1: skill9,
      },{
        title: "Creative Website",
        image1: skill10,
      },{
        title: "Creative Website",
        image1: skill11,
      },
    ],
  },
  Education: {
    title: "Education",
    education_content: [
      {
        name: "Babasaheb Bhimrao Ambedkar Muzaffarpur University ",
        img:avatar1,
        review: "Bachelor's Degree in Commerce",
      },
      {
        name: "AltCampus",
        img: avatar2,
        review: "AltCampus is an online programming bootcamp"
        
      },
     
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "vandana123annusah@gmail.com",
        icon: GrMail,
        link: "mailto:vandana123annusah@gmail.com",
      },
      {
        text: "+91 943037179",
        icon: MdCall,
        link: "https://wa.me/9430437179",
      },
      {
        text: "Github",
        icon: AiFillGithub,
        link: "https://github.com/Vandanakri"
      },
      {
        text: "Linkedin",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/vandanakri/"
      },

    ],
  },
};
