const alves = './images/alves-new.png';
const star = {
    purple : './images/star-purplee.png',
    red: './images/star-red.png',
    white:'./images/star-whitee.png',
    green: './images/star-green.png',
    blue: './images/star-blue.png'
};

const arrows = {
    left : './images/arrow-left.png',
    right : './images/arrow-right.png',
}

const words = [
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span> <span className="text-purple-500">M</span>a<span className="text-purple-500">th</span>eu<span className="text-purple-500">s</span>
      </>
    ),
    imgPath: "./images/ideas.svg"
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a <span className="text-purple-500">D</span>eve<span className="text-purple-500">l</span>ope<span className="text-purple-500">r</span>
      </>
    ),
    imgPath: "./images/concepts.svg"
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my <span className="text-purple-500">P</span>ortfo<span className="text-purple-500">l</span>i<span className="text-purple-500">o</span>
      </>
    ),
    imgPath: "/images/designs.svg"
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy <span className="text-purple-500">y</span>our<span className="text-purple-500">s</span>e<span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: "/images/code.svg"
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm</span> <span className="text-purple-500">M</span>a<span className="text-purple-500">th</span>eu<span className="text-purple-500">s</span>
      </>
    ),
    imgPath: "./images/ideas.svg"
  },
  {
    text: (
      <>
        <span className="text-purple-500">I'm </span>a <span className="text-purple-500">D</span>eve<span className="text-purple-500">l</span>ope<span className="text-purple-500">r</span>
      </>
    ),
    imgPath: "/images/concepts.svg"
  },
  {
    text: (
      <>
        <span className="text-purple-500">It</span>'s my <span className="text-purple-500">P</span>ortfo<span className="text-purple-500">l</span>i<span className="text-purple-500">o</span>
      </>
    ),
    imgPath: "./images/designs.svg"
  },
  {
    text: (
      <>
        en<span className="text-purple-500">j</span>oy <span className="text-purple-500">y</span>our<span className="text-purple-500">s</span>e<span className="text-purple-500">l</span>f!
      </>
    ),
    imgPath: "./images/code.svg"
  }
  
];

const skills = [
  {
    imgPath: "./images/pacman.webp" ,
    logo: "pacman"
  },
  {
    imgPath: "./images/logo-tailwind.png",
    logo: "tailwind"
  },
  {
    imgPath: "./images/logo-react.png",
    logo: "react"
  },
  {
    imgPath: "./images/logo-gsap.png",
    logo: "gsap"
  },
  {
    imgPath: "./images/logo-html.png",
    logo: "html"
  },
  {
    imgPath: "./images/logo-js.png",
    logo: "JavaScript"
  },
  {
    imgPath: "./images/logo-bootstrap.png",
    logo: "bootstrap"
  },
];


const projects = [
  {
    name:'Recipe Book',
    img:'./images/project-recipe.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-blue-600">React</span>
      <span className="lenguages bg-blue">Css</span>
      <span className="lenguages bg-pink-600 ">Scss</span> <br />
      <span className="lenguages bg-purple-600">Bootstrap</span>
      <span className="lenguages bg-green-400 ">RestApi</span> <br />
      <span className="lenguages bg-gray-600 whitespace-nowrap">Framer Motion</span> 
    </div>
    </> ),
    link:'https://github.com/AlvsMatheus',
    info:'That website is a blog with a recipe book theme and the first site that I made using React.'

  },
  {
    name:'Search Cep',
    img:'./images/project-cep.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-blue-600">React</span>
      <span className="lenguages bg-blue">Css</span>
      <span className="lenguages bg-amber-200">Axios</span>
      <span className="lenguages bg-green-400">Api</span>
    </div>
    </> ),
    info:'Simple app made with React to fetch address data from an API using Axios.',
    link:'https://github.com/AlvsMatheus',
  },
  {
    name:'Street Style',
    img:'/images/project-street.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-amber-400">Html</span>
      <span className="lenguages bg-blue">Css</span>
      <span className="lenguages bg-cyan-400 whitespace-nowrap">AOS</span> 
    </div>
    </> ),
    info:'My first website: a landing page for a clothing store with a streetwear vibe.',
    link:'https://alvsmatheus.github.io/Template-vendas/'
  },
  {
    name:'Google Search',
    img:'./images/project-google.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-amber-500">Html</span>
      <span className="lenguages bg-blue">Css</span>
    </div>
    </> ),
    info:'That project was a challenge from Harvard’s CS50W course to practice HTML and CSS basics.',
    link:'https://alvsmatheus.github.io/google-search/'
  },
  {
    name:'Spotify',
    img:'./images/project-spotify.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-amber-400">Html</span>
      <span className="lenguages bg-blue">Css</span>
      <span className="lenguages bg-amber-300">JavaScript</span> <br />
      <span className="lenguages bg-cyan-300">json-server</span>
    </div>
    </> ),
    info:'A homepage clone of Spotify with a working search, built using JavaScript and json-server.',
    link:'https://alvsmatheus.github.io/home-spotify/'
  },
  {
    name:'3D portfolio',
    img:'./images/project-3d.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-blue-600">React</span>
      <span className="lenguages bg-blue">TailwindCSS</span> <br />
      <span className="lenguages bg-green-600 ">Three.js</span> 
      <span className="lenguages bg-indigo-500 whitespace-nowrap">Gsap</span> <br />
      <span className="lenguages bg-blue-200 whitespace-nowrap">TypeScript</span> 
    </div>
    </> ),
    info:'A modern portfolio with 3D animations, based on a JavaScript Mastery tutorial. I added TypeScript myself.',
    link:'https://github.com/AlvsMatheus',
  },
  {
    name:'Nike website',
    img:'./images/project-nike.jpg',
    lenguages:(<>
    <div className="p-1">
      <span className="lenguages bg-blue-600">React</span>
      <span className="lenguages bg-blue">TailwindCSS</span> <br />
      <span className="lenguages bg-blue-200 whitespace-nowrap">TypeScript</span> 
      
    </div>
    </> ),
    info:'That is a copy of Nike website was made by following a JavaScript Mastery project and includes my TypeScript implementation.',
    link:'https://alvsmatheus.github.io/nike-project/'
  }
  
]


const crabinvader = './images/space-invader.png';
const crabanimated  = './images/crab-animated.gif';
const crabwhite = './images/crab-white.gif';

const cards = {
  book: './images/card-recipe.png'
}

const ghosts = [
  {
    vine: './images/ghost-vine.gif',
  }
]

const pacman = './images/pacman.webp';

const aboutimgs = {
  me: './images/me-8bit-circle.png',
  id: './images/id.png',
  wizard: './images/mago.png',
  heart: './images/heart.png',
}

const hardSkills = [
  { label: "React.js", percentage: 75 },
  { label: "TypeScript", percentage: 70 },
  { label: "Tailwind CSS", percentage: 70 },
  { label: "JavaScript", percentage: 80 },
  { label: "Responsive design", percentage: 90 },
  { label: "Git / Github", percentage: 70 },
  
];

const softSkills = [
  { label: "English B2/C1", percentage: 75 },
  { label: "Communication", percentage: 100 },
  { label: "Teamwork", percentage: 65 },
  { label: "Adaptability", percentage: 90 },
  { label: "Curiosity", percentage: 100 },
  { label: "Creativity", percentage: 70 },
];


export {
    alves,
    star,
    crabinvader,
    crabanimated,
    crabwhite,
    words,
    arrows,
    cards,
    projects,
    ghosts,
    pacman,
    skills,
    aboutimgs,
    hardSkills,
    softSkills
};