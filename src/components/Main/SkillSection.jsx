import PropTypes from "prop-types";
import {
  FaFigma,
  FaPalette,
  FaVectorSquare,
  FaMobileAlt,
  FaDraftingCompass,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCogs,
  FaAngular,
  FaLaravel,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { SiExpress,SiMongodb  } from "react-icons/si";


// SkillCard Component
const SkillCard = ({ icon, name }) => (
  <div className="skill-card text-center">
    <div className="text-5xl mb-2">{icon}</div>
    <h4 className="skill-name text-white">{name}</h4>
  </div>
);

SkillCard.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

// SkillsSection Component
const SkillsSection = () => {
  const skills = {
    "UI/UX Design": [
      { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaPalette className="text-purple-500" />, name: "UI Design" },
      { icon: <FaVectorSquare className="text-yellow-500" />, name: "UX Design" },
      { icon: <FaMobileAlt className="text-green-500" />, name: "Responsive Design" },
      { icon: <FaDraftingCompass className="text-blue-500" />, name: "Prototyping" },
    ],
    "Front-End Development": [
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
      { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
      { icon: <RiTailwindCssFill className="text-blue-400"/>, name: "Tailwind CSS" },
      { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
      { icon: <FaReact className="text-blue-400" />, name: "React" },
      { icon: <FaAngular className="text-red-500" />, name: "Angular" },
      { icon: <FaFlutter  className="text-blue-400" />, name: "Flutter" },
    ],
    "Back-End Development & Other": [
      { icon: <FaJava className="text-red-500" />, name: "Java" },
      { icon: <SiSpring className="text-green-400" />, name: "Spring Boot" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
      { icon: <FaLaravel  className="text-red-400" />, name: "Laravel" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <FaDatabase className="text-orange-400" />, name: "MySQL" },
      { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
      { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
      { icon: <FaCogs className="text-gray-400" />, name: "REST APIs" },
    ],
  };

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My Skills
        </h2>

        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl text-white font-semibold mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillList.map((skill, idx) => (
                <SkillCard key={idx} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
