import { FaExternalLinkAlt,FaJava,FaReact,FaNodeJs } from "react-icons/fa";

const certificateData = [
  {
    icon: <FaJava/>,
    color: 'text-yellow-400',
    title: 'Full-Stack Web Development',
    issuer: 'MindScripts Tech - Issued Jul 2025',
    description:
      'Completed an intensive program covering Java Full Stack, Spring Boot and Angular deployment.',
    link: '#',
  },
  {
    icon: <FaReact/>,
    color: 'text-blue-400',
    title: 'Mastering React: React Crash Course with Mini Projects',
    issuer: 'Udemy - Issued June 2025',
    description:
      'Completed an intensive program covering of react concepts likes react components,hooks and context api.',
    link: 'https://www.udemy.com/certificate/UC-6b5115a4-a5a8-41f3-bfe1-a04a65c0385e/',
  },
  {
    icon: <FaNodeJs/>,
    color: 'text-green-400',
    title: 'NodeJs',
    issuer: 'Udemy - Issued April 2024',
    description:
      'Completed an intensive program covering of Node js concepts, express js,ORM and restApi.',
    link: 'https://www.udemy.com/certificate/UC-b7f932bd-1e92-47ac-8899-e73e8eed91c5/',
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-20 bg-gray-900" id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.map((cert, index) => (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg" key={index}>
              <div className="flex items-center mb-4">
                <span className={`material-icons text-4xl ${cert.color} mr-4`}>
                  {cert.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">{cert.description}</p>
              <a
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
                <FaExternalLinkAlt className="text-sm ml-1"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
