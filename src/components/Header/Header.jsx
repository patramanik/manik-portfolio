import { useState } from 'react';
import { MdMenu } from 'react-icons/md'; // using react-icons for menu icon

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false); 
  };

  const navItems = {
    home: { label: 'Home', href: '#home' },
    services: { label: 'Services', href: '#services' },
    skills: { label: 'Skills', href: '#skills' },
    projects: { label: 'Projects', href: '#projects' },
    certificates: { label: 'Certificates', href: '#certificates' },
    contact: { label: 'Contact', href: '#contact' }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="text-2xl font-bold text-white" href="#">
          Manik Patra
        </a>
        <div className="hidden md:flex space-x-4">
          {Object.values(navItems).map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
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
          {Object.values(navItems).map((item) => (
            <a
              key={item.href}
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
