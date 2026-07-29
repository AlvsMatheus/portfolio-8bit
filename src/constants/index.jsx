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

import management from "../assets/project-management.png";
import music from "../assets/project-music-explorer.png"
import recipe from "../assets/project-recipe.jpg";
import mensch from "../assets/project-mensch.jpg";
import patrick from "../assets/project-patrick.jpg";
import laclothes from "../assets/laclothes.jpg";
import project3d from "../assets/project-3d.jpg";
import inventflow from "../assets/project-inventFlow.png"

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

const TECH_COLORS = {
  Next: "blue", "Node.js": "blue", React: "blue", TypeScript: "blue",
  Tailwind: "teal", TailwindCss: "teal", TailwindCSS: "teal", Css: "teal", Scss: "teal", Bootstrap: "teal",
  Html: "coral", Javascript: "coral",
  Gsap: "purple", "Framer Motion": "purple", "Three.js": "purple",
  Firebase: "pink", "Next-intl api": "pink", "Deezer API": "pink", "StoreFront API": "pink", RestApi: "pink",
};

const COLOR_HEX = {
  blue:   { bg: "rgba(55,138,221,0.12)",  border: "#378ADD", text: "#B5D4F4" },
  teal:   { bg: "rgba(29,158,117,0.12)",  border: "#1D9E75", text: "#9FE1CB" },
  coral:  { bg: "rgba(216,90,48,0.12)",   border: "#D85A30", text: "#F5C4B3" },
  purple: { bg: "rgba(127,119,221,0.12)", border: "#7F77DD", text: "#CECBF6" },
  pink:   { bg: "rgba(212,83,126,0.12)",  border: "#D4537E", text: "#F4C0D1" },
};

const TechBadge = ({ name }) => {
  const color = COLOR_HEX[TECH_COLORS[name] || "blue"];
  return (
    <span
      className="lenguages inline-flex items-center gap-1.5 whitespace-nowrap"
      style={{ background: color.bg, border: `0.5px solid ${color.border}`, color: color.text }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color.border }}
      />
      {name}
    </span>
  );
};

const projects = [
  {
    name: "La Clothes",
    img: laclothes,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Next" />
        <TechBadge name="Node.js" />
        <TechBadge name="Tailwind" />
        <TechBadge name="Firebase" />
        <TechBadge name="Gsap" />
      </div>
    ),
    descriptionKey: "projectcard.projects.laclothes",
    link: "https://la-clothes-sage.vercel.app/",
  },
  {
    name: "Client's Portfolio",
    img: patrick,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Next" />
        <TechBadge name="Tailwind" /> 
        <TechBadge name="Gsap" />
        <TechBadge name="Next-intl api" />
      </div>
    ),
    descriptionKey: "projectcard.projects.patrickportfolio",
    link: "https://patrick-s-portfolio.vercel.app/",
  },
  {
    name: "inventFlow",
    img: inventflow,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Next" />
        <TechBadge name="Tailwind" />  
        <TechBadge name="Typescript" /> 
        <TechBadge name="Node.js" />  
      </div>
    ),
    descriptionKey: "projectcard.projects.invent",
    link: "https://github.com/AlvsMatheus/autoflex-system",
  },
  
  {
    name: "Music-Explorer",
    img: music,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Next" /> 
        <TechBadge name="Tailwind" />  
        <TechBadge name="Gsap" />
        <TechBadge name="Deezer API" />
        
      </div>
    ),
    descriptionKey: "projectcard.projects.music",
    link: "https://music-explorer-nine.vercel.app/",
  },
  {
    name: "Mensch",
    img: mensch,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Html" />
        <TechBadge name="Css" />
        <TechBadge name="Javascript" />
        <TechBadge name="StoreFront API" />
      </div>
    ),
    descriptionKey: "projectcard.projects.mensch",
    link: "https://cliente-psi.vercel.app/",
  },
  {
    name: "Panel Management",
    img: management,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="Next" />
        <TechBadge name="Node.js" />       
        <TechBadge name="Tailwind" />   
        <TechBadge name="Typescript" /> 
      </div>
    ),
    descriptionKey: "projectcard.projects.panelmanagement",
    link: "https://smi-group-test.vercel.app/",
  },
  {
    name: "3D portfolio",
    img: project3d,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="React" /> 
        <TechBadge name="Typescript" /> 
        <TechBadge name="Tailwind" /> 
        <TechBadge name="Three.js" /> 
        <TechBadge name="Gsap" /> 
      </div>
    ),
    descriptionKey: "projectcard.projects.portfolio3d",
    link: "https://3d-portfolio-mocha-delta.vercel.app/",
  },
  {
    name: "Recipe Book",
    img: recipe,
    lenguages: (
      <div className="flex flex-wrap gap-2 p-1">
        <TechBadge name="React" />              
        <TechBadge name="Css" /> 
        <TechBadge name="Scss" /> 
        <TechBadge name="Bootstrap" /> 
        <TechBadge name="RestApi" /> 
        <TechBadge name="Framer Motion" /> 
      </div>
    ),
    link: "https://recipe-book-eight-olive.vercel.app/",
    descriptionKey: "projectcard.projects.recipebook",
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
  TechBadge
};
