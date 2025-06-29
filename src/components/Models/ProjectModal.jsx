import PropTypes from "prop-types";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project ${project.title} ${index + 1}`}
              className="rounded-lg object-cover w-full h-48"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium transition"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded text-white font-medium transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    live: PropTypes.string,
    github: PropTypes.string,
  }),
};

export default ProjectModal;
