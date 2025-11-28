const NavBarProf = ({bgColor}) => {
  return (
    <div className='hidden lg:flex lg:justify-center '>
    <nav className={`flex justify-evenly items-center rounded-2xl font-sans text-[16px] bg-gradient-to-br ${bgColor} backdrop-blur-2xl border-1 w-full max-w-[838px] h-10 anim-navbar`}>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#home">Home</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#projects">Projects</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#skills">Skills</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#about">About</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#contact">Contact</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#footer">Footer</a>
    </nav>
    </div>
  )
}

export default NavBarProf
