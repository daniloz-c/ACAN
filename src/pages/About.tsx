
import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import SponsorsSection from "@/components/SponsorsSection";
import { Users } from "lucide-react";

const About = () => {
  const teamMembers = [
    { id: 1, name: "João Silva", role: "Presidente" },
    { id: 2, name: "Maria Oliveira", role: "Vice-Presidente" },
    { id: 3, name: "Carlos Santos", role: "Tesoureiro" },
    { id: 4, name: "Ana Pereira", role: "Secretária" },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <div className="bg-casa-green/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Sobre Nós
          </h1>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossa História</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 mb-4">
                A Casa do Adalto foi fundada em [ano] com o objetivo de oferecer acolhimento e suporte a
                pacientes em tratamento contra o câncer que precisam se deslocar de suas cidades
                para realizar o tratamento.
              </p>
              
              <p className="text-gray-700 mb-4">
                Inspirada na história de Adalto [sobrenome], que enfrentou dificuldades
                durante seu tratamento oncológico devido à distância entre sua residência e o 
                centro de tratamento, a ONG surgiu para preencher essa lacuna e proporcionar um
                ambiente acolhedor para os pacientes e seus acompanhantes.
              </p>
              
              <p className="text-gray-700 mb-4">
                Desde sua fundação, a Casa do Adalto já acolheu mais de [número] pessoas, 
                oferecendo não apenas hospedagem, mas também alimentação, transporte para os 
                locais de tratamento, apoio psicológico e atividades de lazer.
              </p>
              
              <p className="text-gray-700">
                Nossa missão é proporcionar um ambiente que se assemelhe ao lar, onde os 
                pacientes possam se sentir acolhidos e encontrar força e esperança para 
                enfrentar o tratamento.
              </p>
            </div>
            
            <div className="mt-12 bg-casa-green/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-casa-green">Nossa Missão</h3>
              <p className="text-gray-700">
                Acolher e dar suporte a pacientes em tratamento contra o câncer e seus acompanhantes,
                proporcionando hospedagem, alimentação, transporte e apoio emocional, contribuindo para
                o bem-estar e dignidade durante o processo de tratamento.
              </p>
            </div>
            
            <div className="mt-8 bg-casa-orange/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-casa-orange">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como uma instituição de referência no acolhimento humanizado a
                pacientes oncológicos, expandindo nossa capacidade de atendimento e aprimorando
                continuamente nossos serviços.
              </p>
            </div>
            
            <div className="mt-8 bg-casa-red/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-casa-red">Nossos Valores</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Compaixão e empatia no acolhimento</li>
                <li>Respeito à dignidade humana</li>
                <li>Compromisso com a qualidade dos serviços</li>
                <li>Transparência nas ações e na gestão de recursos</li>
                <li>Solidariedade e trabalho em equipe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Conheça os profissionais dedicados que fazem a Casa do Adalto funcionar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-casa-green/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Users size={36} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-casa-green">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SponsorsSection />

      {/* Connect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Conecte-se Conosco</h2>
            <p className="text-lg text-gray-600 mb-8">
              Siga-nos nas redes sociais e fique por dentro de nossas atividades
            </p>
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
