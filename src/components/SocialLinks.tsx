
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://www.instagram.com/associacaocasadoadalto"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-casa-green hover:bg-casa-green-light text-white p-2.5 rounded-full transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-casa-green hover:bg-casa-green-light text-white p-2.5 rounded-full transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href="mailto:contato@casadoadalto.org.br"
        className="bg-casa-green hover:bg-casa-green-light text-white p-2.5 rounded-full transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
      <a
        href="tel:+554791529747"
        className="bg-casa-green hover:bg-casa-green-light text-white p-2.5 rounded-full transition-colors"
        aria-label="Telefone"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
