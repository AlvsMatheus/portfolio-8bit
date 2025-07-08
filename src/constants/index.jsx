

import alves from '../assets/alves-new.png';

import starPurple from '../assets/star-purplee.png';
import starRed from '../assets/star-red.png';
import starWhite from '../assets/star-whitee.png';
import starGreen from '../assets/star-green.png';
import starBlue from '../assets/star-blue.png';

import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';



import pacmanImg from '../assets/pacman.webp';
import tailwind from '../assets/logo-tailwind.png';
import react from '../assets/logo-react.png';
import gsap from '../assets/logo-gsap.png';
import html from '../assets/logo-html.png';
import js from '../assets/logo-js.png';
import bootstrap from '../assets/logo-bootstrap.png';

import recipe from '../assets/project-recipe.jpg';
import lune from '../assets/project-lune-login.jpg';
import cep from '../assets/project-cep.jpg';
import street from '../assets/project-street.jpg';
import google from '../assets/project-google.jpg';
import spotify from '../assets/project-spotify.jpg';
import project3d from '../assets/project-3d.jpg';
import nike from '../assets/project-nike.jpg';

import crabinvader from '../assets/space-invader.png';
import crabanimated from '../assets/crab-animated.gif';
import crabwhite from '../assets/crab-white.gif';


import ghostVine from '../assets/ghost-vine.gif';

import me from '../assets/me-8bit-circle.png';
import id from '../assets/id.png';
import wizard from '../assets/mago.png';
import heart from '../assets/heart.png';
import pcImg from '../assets/pc.gif'

import FileIcon from '../assets/file-archive.png'
import UserIcon from '../assets/user.png'
import Glasses from '../assets/glasses.png'
import LaughIcon from '../assets/laugh.png'

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
};

const words = [
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span> <span className="text-purple-500">M</span>a<span className="text-purple-500">th</span>eu<span className="text-purple-500">s</span>
      </>
    ),
    imgPath: UserIcon,
    
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a <span className="text-purple-500">D</span>eve<span className="text-purple-500">l</span>ope<span className="text-purple-500">r</span>
      </>
    ),
    imgPath: Glasses,
    
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my <span className="text-purple-500">P</span>ortfo<span className="text-purple-500">l</span>i<span className="text-purple-500">o</span>
      </>
    ),
    imgPath: FileIcon,
    
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy <span className="text-purple-500">y</span>our<span className="text-purple-500">s</span>e<span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: LaughIcon,
    
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span> <span className="text-purple-500">M</span>a<span className="text-purple-500">th</span>eu<span className="text-purple-500">s</span>
      </>
    ),
    imgPath: UserIcon,
    
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a <span className="text-purple-500">D</span>eve<span className="text-purple-500">l</span>ope<span className="text-purple-500">r</span>
      </>
    ),
    imgPath: Glasses,
    
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my <span className="text-purple-500">P</span>ortfo<span className="text-purple-500">l</span>i<span className="text-purple-500">o</span>
      </>
    ),
    imgPath: FileIcon,
    
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy <span className="text-purple-500">y</span>our<span className="text-purple-500">s</span>e<span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: LaughIcon,
    
  },
];

const skills = [
  { imgPath: pacmanImg, logo: 'pacman' },
  { imgPath: tailwind, logo: 'tailwind' },
  { imgPath: react, logo: 'react' },
  { imgPath: gsap, logo: 'gsap' },
  { imgPath: html, logo: 'html' },
  { imgPath: js, logo: 'JavaScript' },
  { imgPath: bootstrap, logo: 'bootstrap' },
];

const projects = [
  {
    name: 'Recipe Book',
    img: recipe,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-pink-600 ">Scss</span> <br />
        <span className="lenguages bg-purple-600">Bootstrap</span>
        <span className="lenguages bg-green-400 ">RestApi</span> <br />
        <span className="lenguages bg-gray-600 whitespace-nowrap">Framer Motion</span>
      </div>
    ),
    link: 'https://recipe-book-eight-olive.vercel.app/',
    info: 'That website is a blog with a recipe book theme and the first site that I made using React.',
  },
  {
    name: 'Lune Login',
    img: lune,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-gray-500">Next</span> <br />
        <span className="lenguages bg-blue">TailwindCss</span> <br />
        <span className="lenguages bg-indigo-500 whitespace-nowrap">Gsap</span>
        
      </div>
    ),
    link: 'https://lune-login-389z.vercel.app/',
    info: 'An simple login page with lunar theme made with Next.js and Tailwind CSS',
  },
  {
    name: 'Search Cep',
    img: cep,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-amber-200">Axios</span>
        <span className="lenguages bg-green-400">Api</span>
      </div>
    ),
    info: 'Simple app made with React to fetch address data from an API using Axios.',
    link: 'https://github.com/AlvsMatheus',
  },
  {
    name: 'Street Style',
    img: street,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-amber-400">Html</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-cyan-400 whitespace-nowrap">AOS</span>
      </div>
    ),
    info: 'My first website: a landing page for a clothing store with a streetwear vibe.',
    link: 'https://alvsmatheus.github.io/Template-vendas/',
  },
  {
    name: 'Google Search',
    img: google,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-amber-500">Html</span>
        <span className="lenguages bg-blue">Css</span>
      </div>
    ),
    info: 'That project was a challenge from Harvard’s CS50W course to practice HTML and CSS basics.',
    link: 'https://alvsmatheus.github.io/google-search/',
  },
  {
    name: 'Spotify',
    img: spotify,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-amber-400">Html</span>
        <span className="lenguages bg-blue">Css</span>
        <span className="lenguages bg-amber-300">JavaScript</span> <br />
        <span className="lenguages bg-cyan-300">json-server</span>
      </div>
    ),
    info: 'A homepage clone of Spotify with a working search, built using JavaScript and json-server.',
    link: 'https://alvsmatheus.github.io/home-spotify/',
  },
  {
    name: '3D portfolio',
    img: project3d,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">TailwindCSS</span> <br />
        <span className="lenguages bg-green-600 ">Three.js</span>
        <span className="lenguages bg-indigo-500 whitespace-nowrap">Gsap</span> <br />
        <span className="lenguages bg-blue-200 whitespace-nowrap">TypeScript</span>
      </div>
    ),
    info: 'A modern portfolio with 3D animations, based on a JavaScript Mastery tutorial.',
    link: 'https://github.com/AlvsMatheus',
  },
  {
    name: 'Nike website',
    img: nike,
    lenguages: (
      <div className="p-1">
        <span className="lenguages bg-blue-600">React</span>
        <span className="lenguages bg-blue">TailwindCSS</span> <br />
        <span className="lenguages bg-blue-200 whitespace-nowrap">TypeScript</span>
      </div>
    ),
    info: 'That is a copy of Nike website was made by following a JavaScript Mastery project and includes my TypeScript implementation.',
    link: 'https://alvsmatheus.github.io/nike-project/',
  },
];


const ghosts = [
  {
    vine: ghostVine,
  },
];

const pacman = pacmanImg;

const aboutimgs = {
  me,
  id,
  wizard,
  heart,
};


const hardSkills = [
  { label: 'React.js', percentage: 75 },
  { label: 'TypeScript', percentage: 70 },
  { label: 'Tailwind CSS', percentage: 70 },
  { label: 'JavaScript', percentage: 80 },
  { label: 'Responsive', percentage: 90 },
  { label: 'Git / Github', percentage: 70 },
];

const softSkills = [
  { label: 'English B2/C1', percentage: 75 },
  { label: 'Communication', percentage: 100 },
  { label: 'Teamwork', percentage: 65 },
  { label: 'Adaptability', percentage: 90 },
  { label: 'Curiosity', percentage: 100 },
  { label: 'Creativity', percentage: 70 },
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
  aboutimgs,
  hardSkills,
  softSkills,
  pcImg,
};
