import PropTypes from "prop-types";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaCogs,
  FaLaravel,
  FaMobileAlt,
  FaFigma,
  FaPalette,
  FaVectorSquare,
  FaDraftingCompass,
} from "react-icons/fa";
import { SiSpring, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";

// SkillRow Component
const SkillRow = ({ icon, name, level, iconColor, barColor }) => (
  <div className="flex items-center space-x-3 mb-3">
    <div className={`text-2xl w-8 ${iconColor}`}>{icon}</div>
    <div className="flex-1">
      <div className="flex justify-between text-sm text-white mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-600 h-2 rounded-full">
        <div
          className={`h-2 ${barColor} rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </div>
);

SkillRow.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  barColor: PropTypes.string.isRequired,
};

// SectionCard Component
const SectionCard = ({ title, skills }) => (
  <div className="skill-section p-6 rounded-xl shadow-md mb-8">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    {skills.map((skill, index) => (
      <SkillRow key={index} {...skill} />
    ))}
  </div>
);

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      iconColor: PropTypes.string.isRequired,
      barColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Main Skills Section
const SkillsProgressSection = () => {
  const skillSections = [
    {
      title: "UI/UX Design",
      skills: [
        { icon: <FaFigma />, name: "Figma", level: 90, iconColor: "text-pink-500", barColor: "bg-pink-500" },
        { icon: <FaPalette />, name: "UI Design", level: 85, iconColor: "text-purple-500", barColor: "bg-purple-500" },
        { icon: <FaVectorSquare />, name: "UX Design", level: 80, iconColor: "text-yellow-500", barColor: "bg-yellow-500" },
        { icon: <FaMobileAlt />, name: "Responsive Design", level: 90, iconColor: "text-green-500", barColor: "bg-green-500" },
        { icon: <FaDraftingCompass />, name: "Prototyping", level: 75, iconColor: "text-blue-500", barColor: "bg-blue-500" }
      ]
    },
    {
      title: "Front-End",
      skills: [
        { icon: <FaHtml5 />, name: "HTML", level: 95, iconColor: "text-orange-500", barColor: "bg-orange-500" },
        { icon: <FaCss3Alt />, name: "CSS", level: 90, iconColor: "text-blue-500", barColor: "bg-blue-500" },
        { icon: <RiTailwindCssFill />, name: "Tailwind", level: 75, iconColor: "text-blue-300", barColor: "bg-blue-300" },
        { icon: <FaBootstrap />, name: "Bootstrap", level: 80, iconColor: "text-purple-600", barColor: "bg-purple-600" },
        { icon: <FaJsSquare />, name: "JavaScript", level: 85, iconColor: "text-yellow-400", barColor: "bg-yellow-400" },
        { icon: <FaReact />, name: "React", level: 80, iconColor: "text-blue-400", barColor: "bg-blue-400" },
        { icon: <FaAngular />, name: "Angular", level: 60, iconColor: "text-red-500", barColor: "bg-red-500" },
        { icon: <FaFlutter />, name: "Flutter", level: 70, iconColor: "text-blue-400", barColor: "bg-blue-400" }
      ],
    },
    {
      title: "Back-End",
      skills: [
        { icon: <FaJava />, name: "Java", level: 85, iconColor: "text-red-500", barColor: "bg-red-500" },
        { icon: <SiSpring />, name: "Spring Boot", level: 75, iconColor: "text-green-400", barColor: "bg-green-400" },
        { icon: <FaNodeJs />, name: "Node.js", level: 80, iconColor: "text-green-500", barColor: "bg-green-500" },
        { icon: <SiExpress />, name: "Express.js", level: 70, iconColor: "text-yellow-400", barColor: "bg-yellow-400" },
        { icon: <FaLaravel />, name: "Laravel", level: 65, iconColor: "text-red-400", barColor: "bg-red-400" },
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <FaDatabase />, name: "MySQL", level: 85, iconColor: "text-orange-400", barColor: "bg-orange-400" },
        { icon: <SiMongodb />, name: "MongoDB", level: 75, iconColor: "text-green-500", barColor: "bg-green-500" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { icon: <FaGitAlt />, name: "Git", level: 90, iconColor: "text-red-500", barColor: "bg-red-500" },
        { icon: <FaGithub />, name: "GitHub", level: 95, iconColor: "text--200", barColor: "bg-gray-200" },
        { icon: <FaCogs />, name: "REST API", level: 80, iconColor: "text-red-300", barColor: "bg-red-300" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillSections.map((section, index) => (
            <SectionCard key={index} title={section.title} skills={section.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgressSection;
