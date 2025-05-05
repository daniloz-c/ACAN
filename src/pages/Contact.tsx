
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SocialLinks from "@/components/SocialLinks";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    toast({
      title: "Mensagem enviada",
      description: "Agradecemos seu contato! Retornaremos em breve.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <div className="bg-casa-green/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Contato
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Seu email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu telefone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Como podemos ajudar?" 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="text-casa-green mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Endereço da Casa do Adalto, Santa Catarina, Brasil
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="text-casa-green mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">Telefone</h3>
                        <p className="text-gray-600 mb-1">(47) 99152-9747</p>
                        <p className="text-gray-600">(47) 99145-8577</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="text-casa-green mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-gray-600">
                          contato@casadoadalto.org.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="text-casa-green mr-4 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                        <p className="text-gray-600 mb-1">Segunda - Sexta: 8:00 - 18:00</p>
                        <p className="text-gray-600 mb-1">Sábado: 9:00 - 13:00</p>
                        <p className="text-gray-600">Domingo: Fechado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Redes Sociais</h3>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Localização</h2>
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-md p-4 h-96 flex items-center justify-center">
              <p className="text-gray-500">Mapa será carregado aqui</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
