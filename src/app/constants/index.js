import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiJava,
  SiMongodb,
  SiAmazonaws,
  SiFirebase,
  SiStorybook,
  SiTypescript,
  SiNodedotjs,
  SiSelenium,
  SiHtml5,
  SiCss3,
  SiPostcss,
  SiSass,
  SiExpress,
  SiRedis,
  SiAngular,
  SiAngularjs,
  SiDocker,
  SiHeroku,
  SiRedux,
  SiFacebook,
  SiSocketdotio,
} from "react-icons/si";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/10VLVa_9uVAUGBsQawP92CwO6hxlzxWmI/view?usp=drivesdk ";
export const repoLink = "https://github.com/";

export const callToAction = "https://www.linkedin.com/in/om-prakash-op/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Achievement",
    title: "Achievements",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: './assets/kiitlogo.png',
    title: "Kalinga Institute of Industrial Technology ",
    degree: "Bhubaneswar, Odisha, India",
    duration: "October 2020 - May 2024",
    content1: "Bachelor of Technology (B.Tech)",
    content2: "Branch: Information Technology",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-3",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-6",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-7",
        icon: SiSolidity,
        name: "Solidity",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "NextJs",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "f-4",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "f-5",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "f-6",
        icon: SiSass,
        name: "SCSS",
      },
      {
        id: "f-7",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-8",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-9",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-9",
        icon: SiFacebook,
        name: "Recoil",
      },
      
      {
        id: "f-10",
        icon: SiAngularjs,
        name: "Angular",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        id: "f-1",
        icon: SiJavascript,
        name: "NodeJs",
      },
      {
        id: "f-2",
        icon: SiExpress,
        name: "ExpressJs",
      },
      {
        id: "f-3",
        icon: SiMongodb,
        name: "Mongo Db",
      },
      {
        id: "f-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "f-5",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-6",
        icon: SiRedis,
        name: "Redis",
      },
      {
        id: "f-7",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-8",
        icon: SiGraphql,
        name: "GraphQl",
      },
      {
        id: "f-8",
        icon: SiSocketdotio,
        name: "Socket.io",
      },
      // {
      //   id: "f-7",
      //   icon: SiGraphql,
      //   name: "GraphQL",
      // },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-4",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-5",
        icon: SiHeroku,
        name: "Heroku",
      },
      
      {
        id: "t-6",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-7",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-8",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-9",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-10",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// All Experiences
export const experiences = [
  {
    organisation: "Corridor Platforms",
    logo: './assets/corridor.jpeg',
    link: "https://iris.kiitlogo.ac.in/about_us",
    positions: [
      {
        title: "Full Stack Intern",
        duration: "May - Present",
        content: [
          {
            text: "Working as Full Stack Developer",
            link: "",
          },
        ],
      },
    ],
  },
  
  {
    organisation: "Draggital",
    logo: './assets/draggital.png',
    link: "https://cdc.kiitlogo.ac.in/",
    positions: [
      {
        title: "Full Stack Developer Intern",
        duration: "Jan 2022 - Jun 2022",
        content: [
          {
            text: "Worked on projects using ReactJS,Tailwind,NextJS, Razorpay Payment Gateway,  NodeJS, ExpressJS and MongoDB",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "TechQuench",
    logo: './assets/techquench.png',
    link: "https://iris.kiitlogo.ac.in/about_us",
    positions: [
      {
        title: "Android Developer",
        duration: "July 2022 - Dec 2022",
        content: [
          {
            text: "Worked on Android App named Zenquip using React Native and also on backend using NodeJS, ExpressJS && SQL",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: './assets/publiclab.png',
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Nextgen-ui",
    github: "",
    link: "https://nextgenui.in/",
    image: './assets/chargeswap.png',
    content:
      "A Website to get the frontend Ui of the next generation of websites. It is a collection of the best UIs of the websites that are trending in the market.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "NextJS",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "icon-3",
        icon: SiSelenium,
        name: "Selenium",
      },
    ],
  },
  {
    id: "project-2",
    title: "EasyHaiOnline App",
    github: "",
    link: "https://play.google.com/store/apps/details?id=com.easyhaionlineind",
    image: './assets/easyhaionline.png',
    content:
      "EasyhaiOnline is an Edu-tech App and a part of Harshly group which was established collectively by the dint of enthusiastic and highly skilled engineers, management professionals and skillfully competent educators.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "icon-2",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "icon-3",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Corridor Platform",
    title: "Hackathon Winner",
    duration: "25 March 2023",
    content: [
      {
        text: "4th position in the Corridor Hackathon 2023",
        link: "",
        text: "Created a website which generate MRM document for the user",
        link: "",
      },
    ],
    logo: './assets/corridor.jpeg',
  },
  {
    organisation: "GFG KIIT Chapter",
    title: "Web Development Lead",
    duration: "Nov 2021 - Apr 2023",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development  Bootcamp",
        link: "https://gfgkiit.netlify.app/",
      },
      {
        // Worked on the website of gfg kiit chapter
        text: "Worked on the website of GFG KIIT Chapter",
        link: "https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website",
      },
    ],
    logo: './assets/gfgkiit.jpeg',
  },
  {
    organisation: "HackMas",
    title: "Hackathon ",
    duration: "March 2021",
    content: [
      {
        text: "Parcticipated in HackMas, a 24-hour hackathon and got selected for the top 10 teams",
        link: "https://www.hackmas.tech/",
      },
      {
        text: "Created a website that helps blind people to teach Morse code ",
        link: "https://roger.vercel.app/",
      },
    ],
    logo: './assets/hackmas.jpeg',
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/om-prakash-op/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/OmPr366",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "ompra.rox@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/OmPraka76161871",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/ompr366",
  },
];



export const aboutMe = {
  name: "Om Prakash",
  tagLine:
    "Web Developer | Android Developer | Backend Developer | Open Source Contributor",
  intro:
    "Web Developer | Android Developer | Backend Developer | Freelancer",
};
