import { Card } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Con Este Material Vas a Poder...
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre todos los beneficios que obtendrás desde el primer día
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-success shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Disminuir la hinchazón y sentirte más liviana en una semana
                  </h3>
                  <p className="text-muted-foreground">
                    Experimenta una transformación inmediata en cómo te sientes y te ves.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-success shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    <span className="text-success">Bajar esos kilos</span> que te cuestan sin hacer dietas extremas
                  </h3>
                  <p className="text-muted-foreground">
                    Pierde peso de forma natural y sostenible, sin privarte de sabor.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-success shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Hacer recetas fáciles que te ayudarán a <span className="text-success">controlar tu glucosa</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Mantén niveles estables de azúcar en sangre con deliciosas opciones.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-success shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    <span className="text-success">Aliviar dolores</span> crónicos que te acompañan hace años
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce la inflamación y mejora tu calidad de vida significativamente.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-success shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-success-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Mejorar tu digestión y <span className="text-success">aumentar tu energía diaria</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Siente más vitalidad y bienestar desde el primer día.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/afa91b6d-f8fd-4054-9b0f-65982f2dcbbc.png" 
                alt="Transformación de salud con recetas sin gluten y sin azúcar"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            ESTÁS EN EL LUGAR INDICADO
          </h3>
          <p className="text-xl text-muted-foreground">
            Miles de personas ya están disfrutando de estos beneficios
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;