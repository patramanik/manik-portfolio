/* -------------------------------------------------------------------------- */
/*  ProjectModal.jsx (updated)                                                 */
/* -------------------------------------------------------------------------- */
import PropTypes from "prop-types";
import ImageSlider from "./ImageSlider";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  /* fall‑back if images array missing/empty */
  const gallery =
    project.images?.length > 0 ? project.images : [project.image].filter(Boolean);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl leading-none"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        {/* Slider */}
        {gallery.length > 0 && (
          <ImageSlider images={gallery} height="h-72 sm:h-80 md:h-96" />
        )}

        {/* Description */}
        {project.description && (
          <p className="text-gray-300 my-6 leading-relaxed">
            {project.description}
          </p>
        )}

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-purple-600 px-3 py-1 text-sm rounded-full"
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
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded font-medium transition"
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
    images: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string, // single‑image fallback
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    live: PropTypes.string,
    github: PropTypes.string,
  }),
};

export default ProjectModal;
