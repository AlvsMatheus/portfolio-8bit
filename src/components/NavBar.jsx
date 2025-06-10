const NavBar = ({bgColor}) => {
  return (
    <div className='hidden lg:flex lg:justify-center '>
    <nav className={`flex justify-evenly items-center rounded-2xl text-[12px] w-full max-w-[838px] h-12 ${bgColor} `}>
        <a className="linknav relative inline-block" href="#home">Home</a>
        <a className="linknav relative inline-block" href="#projects">Projects</a>
        <a className="linknav relative inline-block" href="#skills">Skills</a>
        <a className="linknav relative inline-block" href="#about">About</a>
        <a className="linknav relative inline-block" href="#contact">Contact</a>
        <a className="linknav relative inline-block" href="#footer">Footer</a>
    </nav>
    </div>
  )
}

export default NavBar
