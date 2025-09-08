import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialData {
  id: number;
  image: string;
  text: string;
  name: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    image: "/lovable-uploads/520be588-0041-47ce-93a9-30c21155fd63.png",
    text: "Jamás creí que comer sano podía ser también comer rico y quedarme llena, gracias por tan buen trabajo! Recomiendo sin dudar!",
    name: "María González"
  },
  {
    id: 2,
    image: "/lovable-uploads/5a4408d5-fd11-49a2-aad9-091cc8590cf2.png",
    text: "Hace dos semanas que llevo una alimentación sana y limpia y ya me siento desinflamada y hasta más alegre! Esta compra es de las mejor que he hecho!",
    name: "Carmen López"
  },
  {
    id: 3,
    image: "/lovable-uploads/bb98a718-a31d-4bc9-915f-83cdda91fde4.png",
    text: "Qué buenos materiales! Me llevo cada día la comida al trabajo sin preocuparme de pasar hambre. Recomendado 100%",
    name: "Ana Martín"
  },
  {
    id: 4,
    image: "/lovable-uploads/b960da39-b6fb-4fca-bba7-9e5529bdb5c7.png",
    text: "En casa están encantados con las recetas! Ahora mis hijos me piden que les cocine así cada día, maravilloso! No duden en comprar estos materiales! Es mucha información por un precio increíble",
    name: "Patricia Ruiz"
  },
  {
    id: 5,
    image: "/lovable-uploads/68d86775-4c70-4702-ac79-b73171a309d3.png",
    text: "No soy de comprar cosas digitales pero esta vez me animé y no me arrepiento! La verdad que me dieron ideas de comidas que jamás se me hubieran ocurrido. Buen trabajo!",
    name: "Laura Jiménez"
  },
  {
    id: 6,
    image: "/lovable-uploads/4f491aba-3391-4b92-aa40-42ce9e9e310e.png",
    text: "Amo cocinar pero las ideas ya se me estaban acabando, en estos materiales hay muchísimas y siempre puedo innovar con alguna. Buenísimo lo recomiendo!",
    name: "Sandra Pérez"
  },
  {
    id: 7,
    image: "/lovable-uploads/7cf02064-23ff-4635-983b-ef57a0d50559.png",
    text: "Contento por las recetas! Hay mucha variedad, yo no soy de comer mucha verdura pero como las plantean acá da ganas de probar!",
    name: "Carlos Rivera"
  },
  {
    id: 8,
    image: "/lovable-uploads/3f94448d-e272-477d-a890-1691539ec64e.png",
    text: "Estos materiales tienen un valor enorme adentro, no solo te dan recetas, también te dan información nutricional, consejos de preparados de alimentos, cómo combinarlos y más cosas. Sin duda la mejor compra",
    name: "Isabel Torres"
  },
  {
    id: 9,
    image: "/lovable-uploads/644b70b6-2f99-4b7e-be7a-57311619f568.png",
    text: "Hice las galletas veganas y me quedaron buenísimas! Todas las recetas están de lujo, lo recomiendo!",
    name: "Elena Vargas"
  },
  {
    id: 10,
    image: "/lovable-uploads/ffc57cfa-b9cd-48df-bd89-aa7e0edf0480.png",
    text: "Además de seguir las recetas también me dieron muchas ideas para combinar alimentos que tengo en mi hogar. Muy buenos materiales! Recomiendo 100%!",
    name: "Mónica Castro"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= testimonials.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  
  // Fill remaining slots if we're near the end
  if (visibleTestimonials.length < itemsPerView) {
    const remaining = itemsPerView - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Mira lo que Nuestros Clientes Están Cocinando
          </h2>
          <p className="text-xl text-muted-foreground">
            Testimonios reales de personas que transformaron su alimentación
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={`${testimonial.id}-${currentIndex}`} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="space-y-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img 
                      src={testimonial.image}
                      alt={`Receta preparada por ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-muted-foreground mb-4 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-foreground">- {testimonial.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-success' 
                  : 'bg-muted-foreground/30'
              }`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
            <h3 className="text-3xl font-bold text-success mb-4">
              +10,000 Personas Ya Confían en Nosotros
            </h3>
            <p className="text-lg text-muted-foreground">
              Forma parte de esta comunidad que eligió transformar su salud de manera natural
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;