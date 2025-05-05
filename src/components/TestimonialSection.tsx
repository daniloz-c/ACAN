
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Paciente",
    content: "A Casa do Adalto foi meu segundo lar durante meu tratamento. Não sei o que seria de mim sem o apoio e carinho que recebi aqui.",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Familiar de paciente",
    content: "O acolhimento que minha mãe recebeu na Casa do Adalto foi essencial para que ela enfrentasse o tratamento com mais força e esperança.",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Paciente",
    content: "Mais que um lugar para ficar, encontrei uma família. O trabalho realizado aqui é verdadeiramente inspirador e transformador.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Depoimentos</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Conheça algumas histórias de pessoas que passaram pela Casa do Adalto
        </p>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-casa-orange/20 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-casa-orange text-white rounded-full flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <blockquote className="text-lg text-gray-700 italic mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-casa-orange">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-casa-green hover:text-white transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-casa-green" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-casa-green hover:text-white transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
