
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DonationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Como Doar</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Sua doação é fundamental para mantermos nossas portas abertas e continuarmos 
          oferecendo suporte aos pacientes em tratamento contra o câncer.
        </p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="pix" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="pix">PIX</TabsTrigger>
              <TabsTrigger value="other">Outras Formas</TabsTrigger>
            </TabsList>
            <TabsContent value="pix">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-casa-green/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">QR Code PIX</h3>
                      <div className="bg-white p-6 rounded-lg shadow-md mb-4 w-48 h-48 mx-auto flex items-center justify-center border border-gray-200">
                        <p className="text-gray-500 text-sm">QR Code PIX</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Escaneie o QR Code com o aplicativo do seu banco
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-casa-green/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">Chave PIX</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-gray-700">CNPJ</p>
                          <p className="bg-gray-100 p-3 rounded-md font-mono text-casa-green">
                            00.000.000/0000-00
                          </p>
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-700">Celular</p>
                          <p className="bg-gray-100 p-3 rounded-md font-mono text-casa-green">
                            (47) 99152-9747
                          </p>
                        </div>

                        <Button className="btn-primary mt-4">
                          <a href="https://wa.me/5547991529747?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20fazer%20uma%20doação" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            Fale conosco no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="other">
              <Card className="border-casa-green/20">
                <CardContent className="pt-6">
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">Outras Formas de Doação</h3>
                    <p className="text-gray-600 mb-6">
                      Além das doações financeiras, aceitamos doações de:
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <li className="bg-casa-green-light/20 p-4 rounded-lg flex items-start">
                        <span className="bg-casa-green text-white p-1 rounded-full mr-2">✓</span>
                        <span>Alimentos não perecíveis</span>
                      </li>
                      <li className="bg-casa-green-light/20 p-4 rounded-lg flex items-start">
                        <span className="bg-casa-green text-white p-1 rounded-full mr-2">✓</span>
                        <span>Produtos de higiene pessoal</span>
                      </li>
                      <li className="bg-casa-green-light/20 p-4 rounded-lg flex items-start">
                        <span className="bg-casa-green text-white p-1 rounded-full mr-2">✓</span>
                        <span>Roupas e cobertores</span>
                      </li>
                      <li className="bg-casa-green-light/20 p-4 rounded-lg flex items-start">
                        <span className="bg-casa-green text-white p-1 rounded-full mr-2">✓</span>
                        <span>Materiais de limpeza</span>
                      </li>
                    </ul>
                    
                    <p className="mt-6 text-gray-600">
                      Para mais informações sobre como doar ou para programar a entrega de doações físicas,
                      entre em contato conosco:
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                      <Button asChild className="btn-primary">
                        <a href="tel:+554791529747">
                          (47) 99152-9747
                        </a>
                      </Button>
                      <Button asChild className="btn-primary">
                        <a href="tel:+554799145857">
                          (47) 99145-8577
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
