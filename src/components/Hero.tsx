
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-casa-green">Casa do Adalto</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Cuidando com amor e dedicação de pacientes em tratamento contra o câncer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-primary text-lg py-6 px-8">
              <Link to="/contact">Faça uma Doação</Link>
            </Button>
            <Button asChild variant="outline" className="text-lg py-6 px-8">
              <Link to="/services">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-casa-orange/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-casa-green/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Hero;
