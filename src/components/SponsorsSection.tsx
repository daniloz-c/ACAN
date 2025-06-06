import { Card, CardContent } from "@/components/ui/card";

const sponsors = [
    { id: 1, name: "Empresa 1" },
    { id: 2, name: "Empresa 2" },
    { id: 3, name: "Empresa 3" },
    { id: 4, name: "Empresa 4" },
    { id: 5, name: "Empresa 5" },
    { id: 6, name: "Empresa 6" },
];

const SponsorsSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Nossos Patrocinadores</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Empresas e organizações que nos ajudam a manter a Casa do
                    Adalto funcionando
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {sponsors.map((sponsor) => (
                        <Card
                            key={sponsor.id}
                            className="border-gray-200 hover:border-casa-green transition-colors"
                        >
                            <CardContent className="p-6 flex items-center justify-center h-32">
                                <p className="text-lg font-medium text-gray-500">
                                    {sponsor.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Interessado em se tornar um patrocinador e ajudar a
                        fazer a diferença na vida de pacientes com câncer? Entre
                        em contato conosco.
                    </p>
                    <a
                        href="mailto:fabiola@casadoadalto.com.br"
                        className="inline-block mt-4 text-casa-green hover:text-casa-green-light font-medium"
                    >
                        fabiola@casadoadalto.com.br
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
