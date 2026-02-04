import { useTranslation } from "react-i18next"

const NavBarProf = ({bgColor}) => {
  const { t } = useTranslation()

  return (
    <div className='hidden lg:flex lg:justify-center '>
    <nav className={`flex justify-evenly items-center rounded-2xl font-sans text-[16px] bg-gradient-to-br ${bgColor} backdrop-blur-2xl  w-full max-w-[838px] h-10 anim-navbar`}>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#home">{t("navbar.home")}</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#projects">{t("navbar.projects")}</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#skills">{t("navbar.skills")}</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#about">{t("navbar.about")}</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#contact">{t("navbar.contact")}</a>
        <a className="font-fair hover:text-pink-700 linknav relative inline-block" href="#footer">{t("navbar.footer")}</a>
    </nav>
    </div>
  )
}

export default NavBarProf
