import { Card } from "@/components/ui/card";

const BonusSection = () => {
  const bonusCategories = [
    {
      title: "Alimentación 0% inflamación",
      subtitle: "Saná tu cuerpo comiendo real, simple y sin culpa",
      bonuses: [
        {
          title: "Libro Comer sin culpa",
          image: "/lovable-uploads/2ce5c65d-633f-443d-aab1-f0b6adefd4f5.png",
          value: 19
        },
        {
          title: "Libro Recetas Keto",
          image: "/lovable-uploads/4d123954-38b8-44f0-900b-cbb9c5a92f55.png",
          value: 19
        },
        {
          title: "Libro Comidas sin azúcar sin gluten",
          image: "/lovable-uploads/2ff112fb-e7e7-44b7-918a-7641bc735a05.png",
          value: 19
        },
        {
          title: "Libro Jugos Naturales Detox",
          image: "/lovable-uploads/ef6c80c8-6970-4c86-9bfb-0a934324442a.png",
          value: 19
        },
        {
          title: "Libro Recetas Veganas",
          image: "/lovable-uploads/20c23ca8-aa85-4cbc-a3e7-89c2f7f0ead5.png",
          value: 19
        }
      ]
    },
    {
      title: "Alimentación 0% azúcar",
      subtitle: "Sin azúcar, sin culpa, con sabor",
      bonuses: [
        {
          title: "Libro 150 Recetas Fitness",
          image: "/lovable-uploads/38009672-9b49-447e-b107-0845f5cdf6b2.png",
          value: 19
        },
        {
          title: "Libro 30 Recetas de Snack Saludables",
          image: "/lovable-uploads/05ce2cbb-5f24-4a4a-b2f0-59d162046a8d.png",
          value: 19
        },
        {
          title: "Libro 100 Mejores Batidos Saludables",
          image: "/lovable-uploads/de62fe33-51dc-49c2-9e44-4680efc54863.png",
          value: 19
        },
        {
          title: "Libro Recetas barritas saludables",
          image: "/lovable-uploads/b33268f9-8cfe-4b1b-8efb-c003a70562ae.png",
          value: 19
        },
        {
          title: "Libro 70 Recetas Freidora de Aire",
          image: "/lovable-uploads/4683dcea-34e4-4ae5-ad77-185edc64e427.png",
          value: 19
        }
      ]
    },
    {
      title: "Saná tu cuerpo",
      subtitle: "Sana tu cuerpo, volvé a sentirte liviana",
      bonuses: [
        {
          title: "Libro Milagro Metabólico",
          image: "/lovable-uploads/8aac715d-8715-455d-a752-a78b3d920233.png",
          value: 19
        },
        {
          title: "Libro Recetas Antiinflamatorias",
          image: "/lovable-uploads/b570e6c2-2522-43c6-9395-caa326ae0280.png",
          value: 19
        },
        {
          title: "Libro Delicias Para celíacos",
          image: "/lovable-uploads/6bd6b59d-f7df-489a-ac7a-3790e3fd1e69.png",
          value: 19
        },
        {
          title: "Libro Delicias Para Diabéticos",
          image: "/lovable-uploads/7467a548-7e9e-46ad-9d12-047e695762b9.png",
          value: 19
        },
        {
          title: "Libro Sanar desde el plato",
          image: "/lovable-uploads/4047d3e9-bd03-435e-8d96-a17c3f6f7375.png",
          value: 19
        }
      ]
    },
    {
      title: "Tu conocimiento VALE",
      subtitle: "Estas guías te muestran cómo convertir tu experiencia en inspiración... y en ingresos",
      bonuses: [
        {
          title: "Libro Emprende con la biblia",
          image: "/lovable-uploads/acf302a2-3bef-4605-be63-1607344bb9cf.png",
          value: 19
        },
        {
          title: "Libro Como Vender Snack Saludables",
          image: "/lovable-uploads/383258b0-cce1-4409-a6b5-4796fc0a9cca.png",
          value: 19
        },
        {
          title: "Libro Recetas Economicas",
          image: "/public/placeholder.svg",
          value: 19
        },
        {
          title: "Libro Emprende Barritas Saludables",
          image: "/public/placeholder.svg",
          value: 19
        },
        {
          title: "Libro Mantequillas Naturales paso a paso",
          image: "/public/placeholder.svg",
          value: 19
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Esto no es solo un libro, es una
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            EXPERIENCIA COMPLETA
          </h3>
          <p className="text-xl md:text-2xl text-foreground mb-8">
            Y por eso, te incluimos <span className="font-bold text-primary">MÁS DE 20 BONUS</span> para que empieces con todo.
          </p>
        </div>

        {bonusCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-lg text-muted-foreground italic">
                "{category.subtitle}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {category.bonuses.map((bonus, bonusIndex) => (
                <Card key={bonusIndex} className="p-4 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="bg-success text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                        REGALO {categoryIndex * 5 + bonusIndex + 1}
                      </div>
                    </div>
                    
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={bonus.image} 
                        alt={bonus.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="font-bold text-foreground mb-2 text-sm leading-tight">
                      {bonus.title}
                    </h4>
                    
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">Valor: ${bonus.value}</p>
                      <p className="text-success font-bold text-lg">HOY: GRATIS</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¡Y MÁS REGALOS SORPRESAS!
            </h3>
            <div className="mb-4">
              <p className="text-lg mb-2">Valor total 20 bonos:</p>
              <p className="text-4xl md:text-6xl font-extrabold line-through opacity-70">$399</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-xl md:text-2xl font-bold">
                Solo por HOY: <span className="text-accent">BONOS GRATIS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;