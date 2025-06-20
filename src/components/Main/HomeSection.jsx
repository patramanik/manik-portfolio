import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import Avater from "../../assets/Manik.jpg";
import HeroImage from "../../assets/Manik_patra.jpg";
import cv from "../../assets/Manik's_Resume.pdf";

export default function HomeSection() {
  const info = {
    name: "Manik Patra",
    role: "Software Developer",
    image: HeroImage,
    bio: `Passionate software developer with expertise in full-stack development.
      Specialized in creating scalable and efficient web applications using modern
      technologies.`,
    cv: cv,
    github: "https://github.com/patramanik/",
    linkedin: "https://www.linkedin.com/in/manik-patra-158429199/",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=manikpatra409@gmail.com",
  
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 pt-20"
    >
      <img
        src={info.image}
        alt="Manik Patra - Software Developer"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-purple-500 shadow-lg"
      />
      <h1 className="text-5xl font-extrabold text-white mb-3">{info.name}</h1>
      <p className="text-2xl text-purple-400 mb-6">{info.role}</p>
      <p className="max-w-2xl text-lg text-gray-300 mb-8">{info.bio}</p>
      <div className="flex space-x-4 mb-8">
        <a
          className="text-gray-400 hover:text-white transition-colors duration-300"
          href={info.github}
          target="_blank"
        >
          {/* <i className="fab fa-github fa-2x"></i> */}
          <FaGithub className="fa-2x"/>
        </a>
        <a
          className="text-gray-400 hover:text-white transition-colors duration-300"
          href={info.linkedin}
          target="_blank"
        >
          {/* <i className="fab fa-linkedin fa-2x"></i> */}
          <FaLinkedin className="fa-2x"/>
        </a>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a className="btn-primary" href={info.cv} target="_blank">
          Download CV
        </a>

        <a
          href={info.email}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
