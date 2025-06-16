import Avater from "../assets/Manik.jpg";
import GlowingButton from "./GlowingButton/GlowingButton";
import GlowingImage from "./GlowingImage/GlowingImage";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black px-10 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <GlowingImage 
            src={Avater}
            alt="Profile"
          />
          <h1 className="text-3xl font-bold text-white mb-2 mt-10">
            Manik Patra
          </h1>
          <h2 className="text-xl text-gray-400 mb-4">
            Software Developer
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Passionate software developer with expertise in full-stack development. Specialized in creating scalable and efficient web applications using modern technologies.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <GlowingButton label="Download CV" />
            <GlowingButton label="Email Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
