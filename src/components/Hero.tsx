import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import fotos from "../img/FotoCasaDoAdalto.jpg";

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32"
            style={{ backgroundImage: `url(${fotos})` }}
        >
            {/* Overlay escurecido */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span className="text-casa-green">Casa do Adalto</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                        Cuidando com amor e dedicação de pacientes em tratamento
                        contra o câncer
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            asChild
                            className="btn-primary text-lg py-6 px-8"
                        >
                            <Link to="/contact">Faça uma Doação</Link>
                        </Button>
                        <Button
                            asChild
                            className="btn-primary text-lg py-6 px-8"
                        >
                            <Link to="/services">Nossos Serviços</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
