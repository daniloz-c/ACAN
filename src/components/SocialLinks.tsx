
import { Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react";

const SocialLinks = ({ className = "", floating = false }) => {
  if (floating) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/5547991529747?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20do%20Adalto"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    );
  }

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
