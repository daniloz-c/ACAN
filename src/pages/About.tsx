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
                                A Associação Casa do Adalto para Apoio às
                                Crianças e Adolescentes com Neoplasia (ACAN) é
                                uma organização sem fins lucrativos,
                                beneficente, fundada em 8 de dezembro de 2002,
                                em Joinville/SC, pela Sra. Noeli Teresinha
                                Chagas, mãe do Adalto, uma criança que enfrentou
                                um câncer agressivo (neuroblastoma) e cuja
                                história inspirou a criação da casa.
                            </p>

                            <p className="text-gray-700 mb-4">
                                A associação acolhe e apoia crianças e
                                adolescentes em tratamento de saúde e seus
                                familiares vindos de outros municípios via TFD
                                (Tratamento Fora de Domicílio).
                            </p>
                        </div>

                        <div className="mt-12 bg-casa-green/5 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-casa-green">
                                Nossa Missão
                            </h3>
                            <p className="text-gray-700">
                                Acolher, apoiar, orientar e assistir os
                                assistidos e seus acompanhantes/familiares,
                                oferecendo alimentação, hospedagem, transporte,
                                roupas, apoio emocional e social. Essa missão é
                                realizada gratuitamente e com plantão 24h,
                                oferecendo estrutura física, emocional e social
                                durante o tratamento fora do domicílio.
                            </p>
                        </div>

                        <div className="mt-8 bg-casa-orange/5 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-casa-orange">
                                Nossa Visão
                            </h3>
                            <p className="text-gray-700">
                                Ser uma referência em acolhimento e apoio
                                humanizado para crianças e adolescentes em
                                tratamento de saúde e seus familiares,
                                promovendo dignidade, bem-estar e acesso a
                                direitos.
                            </p>
                        </div>

                        <div className="mt-8 bg-casa-red/5 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-casa-red">
                                Nossos Valores
                            </h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>
                                    Solidariedade: compromisso com o bem-estar
                                    das famílias assistidas.
                                </li>
                                <li>
                                    Acolhimento humanizado: tratamento digno e
                                    empático aos usuários.
                                </li>
                                <li>
                                    Gratuidade e acessibilidade: serviços
                                    oferecidos sem custo, de forma universal e
                                    equitativa.
                                </li>
                                <li>
                                    Compromisso com a vida: suporte emocional e
                                    prático para promover saúde e esperança.
                                </li>
                                <li>
                                    Responsabilidade social: atuação
                                    colaborativa com o poder público,
                                    voluntários e parceiros.
                                </li>
                                <li>
                                    Transparência e ética: gestão ética e
                                    baseada em prestação de contas.
                                </li>
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
                        Conheça os profissionais dedicados que fazem a Casa do
                        Adalto funcionar
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="border-casa-green/20"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                            <Users
                                                size={36}
                                                className="text-gray-400"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            {member.name}
                                        </h3>
                                        <p className="text-casa-green">
                                            {member.role}
                                        </p>
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
                        <h2 className="text-3xl font-bold mb-6">
                            Conecte-se Conosco
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Siga-nos nas redes sociais e fique por dentro de
                            nossas atividades
                        </p>
                        <SocialLinks className="justify-center" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
