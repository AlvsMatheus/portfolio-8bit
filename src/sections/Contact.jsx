import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import ArrowLeft from "../components/ArrowLeft.jsx";
import ArrowRight from "../components/ArrowRight.jsx";
import BtnContact from "../components/BtnContact.jsx";
import Logo from "../components/Logo"
import NavBar from "../components/NavBar.jsx";
import Title from "../components/Title.jsx";
import {arrows, star} from '../constants/index.jsx';



const Contact = ({ onScrollBack, onScrollNext}) => {

  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageCase, setMessageCase] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ... formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )

       setFormData({ name: '', email: '', message: ''});

    } catch(error) {
      console.log('EMAILJS ERROR,', error);
    } finally {
      setLoading(false);
    }

   
  };

  return (
    <section id="contact" className="section">
      <div className="absolute z-0 inset-0 bg-[url('/backgrounds/contact-me.gif')] bg-cover bg-no-repeat bg-center md:bg-right lg:bg-center ">
      <div 
      className={ messageCase ? `absolute inset-0 bg-black/90 transition-all duration-700 ease` : `absolute inset-0 bg-black/70 transition-all duration-700 ease`} />
      </div>
      { messageCase ?
        <div className=""/>
        : (
          <div className="glow-circle"/>
        )
      }
      <div className="flex flex-col md:flex-row relative z-10 w-full h-screen">
        <div className="child ps-10 flex-col">
          {/* left side md-lg*/}
          <Logo img={star.green}/>
            <div className="hidden md:block ">
              <ArrowLeft onScrollBack={onScrollBack} img={arrows.left}/>
            </div>
        </div>
        <div className="child-middle relative z-10 md:overflow-auto lg:overflow-visible lg:pt-7 flex justify-between">
          {/* middle side md-lg*/}
          <div className="max-md:mt-10 max-md:flex">
            <NavBar bgColor='bg-[var(--color-green)]'/>
            <Title
            text={(
            <p className="text-white">
              <span className="text-[var(--color-green)]">C</span>on<span className="text-[var(--color-green)]">t</span>a<span className="text-[var(--color-green)]">ct</span> <span className="text-[var(--color-green)]" >M</span>e
            </p>)}
            gradient='from-green-300 via-green '
            width='w-50 md:w-50 lg:w-120'/>
          </div>
          <div className="flex justify-center items-center w-full md:mt-10 lg:mt-0 mb-20 px-10 lg:px-0">   
            {messageCase ? (
                <div className="relative flex bg-green-300/30 rounded-4xl lg:h-160 w-full justify-center items-center transition-all duration-400 ease-in-out">
                  <div 
                  onClick={() => setMessageCase(false)}
                  className="absolute z-100 cursor-pointer -right-6 -top-10">
                    <img className="w-20 h-20 lg:w-25 lg:h-25" src="src/assets/8bit-PC-logo.gif" alt="pc logo" />
                  </div>
                  <div className="flex lg:w-[50%] h-full lg:pt-10 px-5">
                    <form 
                    onSubmit={handleSubmit} 
                    ref={formRef}
                    className="flex flex-col gap-10 p-5 lg:gap-0 justify-between">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center">
                          <label htmlFor="iname" className="text-white text-shadow-black-5">Name:</label>
                          <input 
                          id="iname" 
                          name="name"
                          type="text" 
                          placeholder="your name"
                          onChange={handleChange}
                          value={formData.name}
                          required
                          className="input" />
                        </div>
                        <div className="flex items-center mt-7">
                          <label htmlFor="iemail" className="text-white">Email:</label>
                          <input 
                          id="iemail" 
                          name="email"
                          type="email"
                          placeholder="you@example.com" 
                          onChange={handleChange}
                          value={formData.email}
                          required
                          className="input" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="imessage" className="text-white">Message:</label>
                        <textarea 
                        id="imessage"
                        name="message" 
                        cols="30" 
                        rows="10" 
                        placeholder="Write your message here..."
                        onChange={handleChange}
                        value={formData.message}
                        required
                        className="w-[100%] resize-none bg-green hover:bg-green-400 focus:bg-green-400 outline-0 p-2 rounded-2xl placeholder:text-sm transition-all duration-400 ease-in-out"></textarea>
                        </div>
                      <div className="h-[20%]">
                        <button 
                        disabled={loading}
                        type="submit">
                          <div className="cta-button group">
                            <div className="bg-circle"/>
                            <p className="text-white text-shadow text-sm lg:text-1xl text-nowrap text-shadow-gray-950 z-10 relative me-15 group-hover:text-green-950">
                              {loading ? 'Sending...' : 'Send Message'}
                            </p>
                            <img src={arrows.right} width={40} height={15} alt="arrow right" className="z-10 wobble " />
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-[50%] h-[100%] rounded-new bg-[url('src/assets/coffee.png')] md:center lg:bg-left bg-cover">
                  </div>
                </div>
              ) : (
                <BtnContact onClick={() => setMessageCase(true)} />
              )}
          </div>
          <div>
            {/* Progress Bar pc */}
            <div className="hidden lg:block bg-pink w-full h-4 mb-10 rounded-2xl">  
            </div>
          </div>
        </div>
        <div className="child pe-10 items-end h-auto md:h-full w-full">
          {/* right side md-lg*/}
          
          <div className="hidden md:flex md:justify-end ">
              <ArrowRight onScrollNext={onScrollNext}  img={arrows.right}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
