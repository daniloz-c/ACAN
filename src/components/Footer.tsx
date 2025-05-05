
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Casa do Adalto</h3>
            <p className="text-gray-300 mb-4">
              Uma ONG dedicada ao tratamento e apoio de pacientes com câncer.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/associacaocasadoadalto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-casa-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-casa-orange transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contato@casadoadalto.org.br" 
                className="text-white hover:text-casa-orange transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+554791529747" 
                className="text-white hover:text-casa-orange transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Endereço da Casa do Adalto, Santa Catarina, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(47) 99152-9747</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(47) 99145-8577</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">contato@casadoadalto.org.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Segunda - Sexta: 8:00 - 18:00
              </li>
              <li className="text-gray-300">
                Sábado: 9:00 - 13:00
              </li>
              <li className="text-gray-300">
                Domingo: Fechado
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Casa do Adalto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
