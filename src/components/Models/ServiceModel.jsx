import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

const ServiceModal = ({ isOpen, onClose, title, description, techStack ,color}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-blur-sm z-50 flex justify-center items-center px-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-lg relative p-6">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
          aria-label="Close modal"
        >
          <MdClose size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tech Stack */}
        {techStack?.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className={`${color} text-sm px-3 py-1 rounded-full`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string.isRequired,
};

export default ServiceModal;
