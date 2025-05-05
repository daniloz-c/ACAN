
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import DonationSection from "@/components/DonationSection";
import TestimonialSection from "@/components/TestimonialSection";
import SponsorsSection from "@/components/SponsorsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";
import { MapPin, Calendar } from "lucide-react";

const Index = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Campanha de Arrecadação",
      date: "15 de junho, 2025",
      location: "Shopping Center",
    },
    {
      id: 2,
      title: "Palestra sobre Oncologia",
      date: "22 de junho, 2025",
      location: "Auditório Municipal",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Casa do Adalto</h2>
            <p className="text-lg text-gray-600 mb-8">
              A Casa do Adalto é uma organização não governamental dedicada ao acolhimento
              e suporte de pacientes em tratamento contra o câncer e seus acompanhantes.
              Nosso objetivo é proporcionar um ambiente acolhedor e confortável para
              aqueles que precisam estar longe de casa durante o tratamento.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/about">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      <ServicesSection />

      <DonationSection />

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Fique por dentro de nossas atividades e participe de nossos eventos
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-casa-orange shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <Calendar size={18} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/events">Ver Todos os Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <SponsorsSection />

      {/* Connect Section */}
      <section className="py-16 bg-casa-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Conecte-se Conosco</h2>
            <p className="text-lg text-gray-600 mb-8">
              Siga-nos nas redes sociais para acompanhar nosso trabalho e saber como você pode ajudar.
            </p>
            <SocialLinks className="justify-center mb-8" />
            <p className="text-gray-600">
              Para mais informações, entre em contato pelo WhatsApp:
            </p>
            <div className="mt-4">
              <Button asChild className="btn-primary">
                <a 
                  href="https://wa.me/5547991529747" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  (47) 99152-9747
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
