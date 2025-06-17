import { useState } from 'react';
import { MdMenu } from 'react-icons/md'; // using react-icons for menu icon

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="text-2xl font-bold text-white" href="#">
          Manik Patra
        </a>
        <div className="hidden md:flex space-x-4">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#certificates">Certificates</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <MdMenu size={28} />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" href="#home">Home</a>
          <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" href="#services">Services</a>
          <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" href="#skills">Skills</a>
          <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" href="#projects">Projects</a>
          <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
