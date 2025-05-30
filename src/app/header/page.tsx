import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex justify-center pt-8">
      <div className="flex justify-between items-center w-full max-w-4xl px-8">
        {/* Left side - Name */}
        <div className="text-xl font-semibold">
          Ivan Martinez
        </div>
        
        {/* Right side - Navigation */}
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-gray-600 transition-colors">
            About me
          </a>
          <a href="#services" className="hover:text-gray-600 transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;