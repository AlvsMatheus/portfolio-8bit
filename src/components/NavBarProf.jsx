const NavBarProf = () => {
  return (
    <div className='hidden lg:flex lg:justify-center '>
    <nav className={`flex justify-evenly items-center rounded-2xl font-sans text-[12px] text-indigo-600 w-full max-w-[838px] h-10 `}>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#home">Home</a>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#projects">Projects</a>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#skills">Skills</a>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#about">About</a>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#contact">Contact</a>
        <a className=" hover:text-pink-700 linknav relative inline-block" href="#footer">Footer</a>
    </nav>
    </div>
  )
}

export default NavBarProf
