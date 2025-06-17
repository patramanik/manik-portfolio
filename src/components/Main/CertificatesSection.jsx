import { FaExternalLinkAlt,FaJava } from "react-icons/fa";
import { IoMdCloudDone } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const certificateData = [
  {
    icon: <FaJava/>,
    color: 'text-yellow-400',
    title: 'Full-Stack Web Development',
    issuer: 'Coursera - Issued Aug 2023',
    description:
      'Completed an intensive program covering MERN stack, Next.js, and cloud deployment.',
    link: '#',
  },
  {
    icon: <IoMdCloudDone/>,
    color: 'text-blue-400',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services - Issued May 2023',
    description:
      'Validated foundational knowledge of AWS Cloud concepts, services, and terminology.',
    link: '#',
  },
  {
    icon: <IoShieldCheckmarkSharp/>,
    color: 'text-green-400',
    title: 'Cybersecurity Fundamentals',
    issuer: 'Udemy - Issued Jan 2024',
    description:
      'Gained insights into basic cybersecurity principles, threat landscape, and mitigation techniques.',
    link: '#',
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
