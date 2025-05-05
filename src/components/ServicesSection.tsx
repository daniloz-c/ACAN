
import { Card, CardContent } from "@/components/ui/card";
import { Bed, UtensilsCrossed, Bus, Users, Stethoscope, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Hospedagem",
    description: "Oferecemos hospedagem gratuita para pacientes em tratamento oncológico e seus acompanhantes.",
    icon: Bed,
  },
  {
    id: 2,
    title: "Alimentação",
    description: "Fornecemos todas as refeições diárias preparadas com muito carinho e atenção às necessidades nutricionais.",
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: "Transporte",
    description: "Disponibilizamos transporte para hospitais e clínicas onde os pacientes realizam seus tratamentos.",
    icon: Bus,
  },
  {
    id: 4,
    title: "Apoio Psicológico",
    description: "Contamos com profissionais que oferecem suporte emocional aos pacientes e seus familiares.",
    icon: Users,
  },
  {
    id: 5,
    title: "Acompanhamento Médico",
    description: "Realizamos o acompanhamento da saúde dos pacientes durante toda sua estadia.",
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Suporte Emocional",
    description: "Promovemos atividades e encontros que fortalecem o bem-estar emocional de todos os acolhidos.",
    icon: Heart,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Conheça os serviços oferecidos pela Casa do Adalto aos pacientes em tratamento contra o câncer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-casa-green/20 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-casa-green/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-casa-green" size={30} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
