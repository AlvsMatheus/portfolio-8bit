import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { arrows } from "../../constants";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { is8Bit } = useTheme();
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.log("EMAILJS ERROR,", error);
    } finally {
      setLoading(false);
    }
  };

  const inputBase = is8Bit
    ? "peer w-full bg-black/40 border-2 border-[var(--color-green)]/30 rounded-lg px-4 pt-5 pb-2 text-emerald-100 font-retro text-sm outline-none focus:border-[#FFEB50] transition-colors"
    : "peer w-full bg-white/5 border border-emerald-500/20 rounded-xl px-4 pt-5 pb-2 text-white outline-none focus:border-emerald-400/60 focus:bg-white/[0.07] transition-colors";

  const labelBase = is8Bit
    ? "absolute left-4 top-3.5 text-emerald-300/50 font-retro text-xs transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#FFEB50] peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-[10px]"
    : "absolute left-4 top-3.5 text-emerald-300/50 text-sm transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-emerald-300 peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:text-xs";

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col gap-5 w-full justify-center"
    >
      <h2
        className={
          is8Bit
            ? "font-retro text-[#FFEB50] uppercase text-sm tracking-widest mb-2"
            : "font-fair text-2xl bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent mb-2"
        }
      >
        {t("contactform.title")}
      </h2>

      <div className="relative">
        <input
          id="iname"
          name="name"
          type="text"
          placeholder=" "
          onChange={handleChange}
          value={formData.name}
          required
          className={inputBase}
        />
        <label htmlFor="iname" className={labelBase}>
          {t("contactform.name")}
        </label>
      </div>

      <div className="relative">
        <input
          id="iemail"
          name="email"
          type="email"
          placeholder=" "
          onChange={handleChange}
          value={formData.email}
          required
          className={inputBase}
        />
        <label htmlFor="iemail" className={labelBase}>
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="imessage"
          name="message"
          rows="4"
          placeholder=" "
          onChange={handleChange}
          value={formData.message}
          required
          className={`${inputBase} resize-none pt-5`}
        />
        <label htmlFor="imessage" className={labelBase}>
          {t("contactform.message")}
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={
          is8Bit
            ? "relative mt-2 h-14 font-retro uppercase text-sm text-black bg-[#FFEB50] border-2 border-black shadow-[4px_4px_0px_0px_rgba(52,211,153,0.8)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100 disabled:opacity-60 disabled:active:translate-x-0 disabled:active:translate-y-0 flex items-center justify-center gap-3"
            : "group relative mt-2 h-14 rounded-full text-white font-medium bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-3"
        }
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            {t("contactbutton.sending")}
          </>
        ) : sent ? (
          t("contactbutton.sent")
        ) : (
          <>
            {t("contactbutton.send")}
            <img
              src={arrows.right}
              width={18}
              height={18}
              alt=""
              className={is8Bit ? "" : "transition-transform duration-300 group-hover:translate-x-1"}
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;