
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bed, UtensilsCrossed, Bus, Users, Stethoscope, Heart, Activity, BookOpen } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  const additionalServices = [
    {
      id: 1,
      title: "Atividades Terapêuticas",
      description: "Promovemos atividades terapêuticas como artesanato, música e jogos para ajudar no bem-estar emocional dos pacientes.",
      icon: Activity,
    },
    {
      id: 2,
      title: "Biblioteca",
      description: "Disponibilizamos uma pequena biblioteca com livros e revistas para momentos de lazer e distração.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <div className="bg-casa-green/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Nossos Serviços
          </h1>
        </div>
      </div>

      <ServicesSection />

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Serviços Complementares</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Além dos serviços principais, oferecemos atividades complementares para o bem-estar de nossos acolhidos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
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

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Como Funcionamos</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-casa-green text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Encaminhamento</h3>
                  <p className="text-gray-700">
                    Os pacientes são encaminhados à Casa do Adalto através de hospitais, clínicas
                    ou assistentes sociais. É necessário que o paciente esteja em tratamento
                    oncológico e resida em cidade diferente do local de tratamento.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-casa-green text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Acolhimento</h3>
                  <p className="text-gray-700">
                    Ao chegar à Casa do Adalto, o paciente e seu acompanhante são recebidos 
                    por nossa equipe, que apresenta as instalações e as regras de convivência.
                    São fornecidos todos os itens básicos necessários para a estadia.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-casa-green text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Permanência</h3>
                  <p className="text-gray-700">
                    Durante a estadia, o paciente tem acesso a todos os serviços oferecidos pela
                    casa, incluindo hospedagem, alimentação, transporte para o local de tratamento, 
                    e suporte emocional. O tempo de permanência varia de acordo com a duração do tratamento.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-casa-green text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Acompanhamento</h3>
                  <p className="text-gray-700">
                    Nossa equipe mantém contato regular com os profissionais de saúde responsáveis pelo
                    tratamento, para garantir que todas as necessidades do paciente sejam atendidas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Para mais informações sobre como acessar nossos serviços, entre em contato conosco.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
