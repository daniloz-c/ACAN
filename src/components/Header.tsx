
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-casa-green">Casa do Adalto</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-casa-green font-medium transition-colors">
              Início
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-casa-green font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-casa-green font-medium transition-colors">
              Serviços
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-casa-green font-medium transition-colors">
              Contato
            </Link>
            <Button className="btn-primary">Doe Agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-casa-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-casa-green font-medium transition-colors"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-casa-green font-medium transition-colors"
                onClick={toggleMenu}
              >
                Sobre Nós
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-casa-green font-medium transition-colors"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-casa-green font-medium transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </Link>
              <Button className="btn-primary w-full mt-2">Doe Agora</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
