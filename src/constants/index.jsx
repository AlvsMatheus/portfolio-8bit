import alves from "../assets/alves-new.png";

import starPurple from "../assets/star-purplee.png";
import starRed from "../assets/star-red.png";
import starWhite from "../assets/star-whitee.png";
import starGreen from "../assets/star-green.png";
import starBlue from "../assets/star-blue.png";

import arrowLeft from "../assets/arrow-left.png";
import arrowLeft2 from "../assets/arrow-left-2.png"
import arrowRight from "../assets/arrow-right.png";
import arrowRight2 from "../assets/arrow-right-2.png";

import pacmanImg from "../assets/pacman.webp";
import tailwind from "../assets/logo-tailwind.png";
import react from "../assets/logo-react.png";
import gsap from "../assets/logo-gsap.png";
import html from "../assets/logo-html.png";
import js from "../assets/logo-js.png";
import bootstrap from "../assets/logo-bootstrap.png";

import smi from "../assets/project-smi.png";
import recipe from "../assets/project-recipe.jpg";
import mensch from "../assets/project-mensch.jpg";
import patrick from "../assets/project-patrick.jpg";
import laclothes from "../assets/laclothes.jpg";
import project3d from "../assets/project-3d.jpg";
import nike from "../assets/project-nike.jpg";

import crabinvader from "../assets/space-invader.png";
import crabanimated from "../assets/crab-animated.gif";
import crabwhite from "../assets/crab-white.gif";

import ghostVine from "../assets/ghost-vine.gif";

import me8bit from "../assets/me-8bit-circle.png";
import me from '../assets/linkedin_profile.png'
import pcImg from "../assets/pc.gif";

import FileIcon from "../assets/file-archive.png";
import UserIcon from "../assets/user.png";
import Glasses from "../assets/glasses.png";
import LaughIcon from "../assets/laugh.png";

import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin-logo.png";

const star = {
  purple: starPurple,
  red: starRed,
  white: starWhite,
  green: starGreen,
  blue: starBlue,
};

const arrows = {
  left: arrowLeft,
  right: arrowRight,
  left2: arrowLeft2,
  right2: arrowRight2
};

const words = [
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span>{" "}
        <span className="text-purple-500">M</span>a
        <span className="text-purple-500">th</span>eu
        <span className="text-purple-500">s</span>
      </>
    ),
    imgPath: UserIcon,
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a{" "}
        <span className="text-purple-500">D</span>eve
        <span className="text-purple-500">l</span>ope
        <span className="text-purple-500">r</span>
      </>
    ),
    imgPath: Glasses,
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my{" "}
        <span className="text-purple-500">P</span>ortfo
        <span className="text-purple-500">l</span>i
        <span className="text-purple-500">o</span>
      </>
    ),
    imgPath: FileIcon,
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy{" "}
        <span className="text-purple-500">y</span>our
        <span className="text-purple-500">s</span>e
        <span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: LaughIcon,
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span>{" "}
        <span className="text-purple-500">M</span>a
        <span className="text-purple-500">th</span>eu
        <span className="text-purple-500">s</span>
      </>
    ),
    imgPath: UserIcon,
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a{" "}
        <span className="text-purple-500">D</span>eve
        <span className="text-purple-500">l</span>ope
        <span className="text-purple-500">r</span>
      </>
    ),
    imgPath: Glasses,
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my{" "}
        <span className="text-purple-500">P</span>ortfo
        <span className="text-purple-500">l</span>i
        <span className="text-purple-500">o</span>
      </>
    ),
    imgPath: FileIcon,
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy{" "}
        <span className="text-purple-500">y</span>our
        <span className="text-purple-500">s</span>e
        <span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: LaughIcon,
  },
];

const skills = [
  { imgPath: pacmanImg, logo: "Pacman", descriptionKey: "Pacman" },
  { imgPath: tailwind, logo: "Tailwind", descriptionKey: "skills.tailwind.description" },
  { imgPath: react, logo: "React", descriptionKey: "skills.react.description" },
  { imgPath: gsap, logo: "Gsap", descriptionKey: "skills.gsap.description" },
  { imgPath: html, logo: "Html", descriptionKey: "skills.html.description" },
  { imgPath: js, logo: "JavaScript", descriptionKey: "skills.javascript.description" },
  { imgPath: bootstrap, logo: "Bootstrap", descriptionKey: "skills.bootstrap.description" },
];

const projects = [
  {
    name: "La Clothes",
    img: laclothes,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-gray-500">Next</span> 
        <span className="lenguages bg-green-800">Node.js</span> 
        <span className="lenguages bg-blue">Tailwind</span> <br />
        <span className="lenguages bg-red-400">Firebase</span>
        <span className="lenguages bg-indigo-500 whitespace-nowrap">Gsap</span>
      </div>
    ),
    descriptionKey: "projectcard.projects.laclothes",
    link: "https://la-clothes-sage.vercel.app/",
  },
  {
    name: "Panel Management",
    img: smi,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-gray-500">Next</span> 
        <span className="lenguages bg-green-800">Node.js</span> 
        <span className="lenguages bg-blue">Tailwind</span>
        <span className="lenguages bg-blue-200 whitespace-nowrap">
          TypeScript
        </span>
      </div>
    ),
    descriptionKey: "projectcard.projects.panelmanagement",
    link: "https://smi-group-test.vercel.app/",
  },
  {
    name: "Mensch",
    img: mensch,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-amber-400">Html</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-yellow-300">Javascript</span> <br />
        <span className="lenguages bg-green-400">StoreFront API</span>
      </div>
    ),
    descriptionKey: "projectcard.projects.mensch",
    link: "https://cliente-git-main-alvsmatheus-projects.vercel.app/",
  },
  {
    name: "Client's Portfolio",
    img: patrick,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-gray-500">Next</span> <br />
        <span className="lenguages bg-blue">TailwindCss</span> <br />
        <span className="lenguages bg-indigo-500 whitespace-nowrap">Gsap</span>
        <span className="lenguages bg-green-400">Next-intl api</span>
      </div>
    ),
    descriptionKey: "projectcard.projects.patrickportfolio",
    link: "https://patrick-s-portfolio.vercel.app/",
  },
  {
    name: "3D portfolio",
    img: project3d,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">TailwindCSS</span> <br />
        <span className="lenguages bg-green-600 ">Three.js</span>
        <span className="lenguages bg-indigo-500 whitespace-nowrap">
          Gsap
        </span>
        <br />
        <span className="lenguages bg-blue-200 whitespace-nowrap">
          TypeScript
        </span>
      </div>
    ),
    descriptionKey: "projectcard.projects.portfolio3d",
    link: "https://3d-portfolio-mocha-delta.vercel.app/",
  },
  {
    name: "Recipe Book",
    img: recipe,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-pink-600 ">Scss</span> <br />
        <span className="lenguages bg-purple-600">Bootstrap</span>
        <span className="lenguages bg-green-400 ">RestApi</span> <br />
        <span className="lenguages bg-gray-600 whitespace-nowrap">
          Framer Motion
        </span>
      </div>
    ),
    link: "https://recipe-book-eight-olive.vercel.app/",
    descriptionKey: "projectcard.projects.recipebook",
  },
  {
    name: "Nike website",
    img: nike,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">TailwindCSS</span> <br />
        <span className="lenguages bg-blue-200 whitespace-nowrap">
          TypeScript
        </span>
      </div>
    ),
    descriptionKey: "projectcard.projects.nike",
    link: "https://alvsmatheus.github.io/nike-project/",
  },
  
  
];

const ghosts = [
  {
    vine: ghostVine,
  },
];

const pacman = pacmanImg;

const aboutImgs = {
  me,
  me8bit,
};

const hardSkills = [
  { labelKey: "hardskills.skills.react", percentage: 100 },
  { labelKey: "hardskills.skills.tailwind", percentage: 100 },
  { labelKey: "hardskills.skills.typescript", percentage: 70 },
  { labelKey: "hardskills.skills.node", percentage: 60 },
  { labelKey: "hardskills.skills.mysql", percentage: 60 },
];

const softSkills = [
  { labelKey: "softskills.skills.teamwork", percentage: 100 },
  { labelKey: "softskills.skills.curiosity", percentage: 100 },
  { labelKey: "softskills.skills.adaptability", percentage: 100 },
  { labelKey: "softskills.skills.communication", percentage: 90 },
  { labelKey: "softskills.skills.english", percentage: 80 },
];

export {
  alves,
  star,
  crabinvader,
  crabanimated,
  crabwhite,
  words,
  arrows,
  projects,
  ghosts,
  pacman,
  skills,
  aboutImgs,
  hardSkills,
  softSkills,
  pcImg,
  github,
  linkedin,
};
