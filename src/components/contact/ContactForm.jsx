import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { arrows } from "../../constants"; 
import { useTheme } from "../../contexts/ThemeContext";


const ContactForm = () => {

    const {is8Bit} = useTheme()

    const formRef = useRef(null);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EMAILJS ERROR,", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col gap-10 p-5 lg:gap-0 justify-between"
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <label htmlFor="iname" className={`${is8Bit ? 'font-retro' : 'font-fair'} text-white text-shadow-black-5 me-2`}>
            Name:
          </label>
          <input
            id="iname"
            name="name"
            type="text"
            placeholder="your name"
            onChange={handleChange}
            value={formData.name}
            required
            className="input"
          />
        </div>
        <div className="flex items-center mt-7 ">
          <label htmlFor="iemail" className={`${is8Bit ? 'font-retro' : 'font-fair'} text-white me-2`}>
            Email:
          </label>
          <input
            id="iemail"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
            value={formData.email}
            required
            className="input"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="imessage" className={`${is8Bit ? 'font-retro' : 'font-fair'} text-white`}>
          Message:
        </label>
        <textarea
          id="imessage"
          name="message"
          cols="30"
          rows="10"
          placeholder="Write your message here..."
          onChange={handleChange}
          value={formData.message}
          required
          className="w-[100%] resize-none bg-green hover:bg-green-400 focus:bg-green-400 outline-0 p-2 rounded-2xl placeholder:text-sm transition-all duration-400 ease-in-out"
        ></textarea>
      </div>
      <div className="h-[20%]">
        <button className="w-full" disabled={loading} type="submit">
          <div className="cta-button group h-15">
            <div className="bg-circle" />
            <p className={`text-white uppercase font-extrabold ${is8Bit ? 'font-retro' : 'font-fair'} z-10 relative me-15 lg:me-2 group-hover:text-emerald-200`}>
              {loading ? "Sending..." : "Send Message"}
            </p>
            <img
              src={arrows.right}
              width={40}
              height={15}
              alt="arrow right"
              className="absolute right-3 z-10 wobble"
            />
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
