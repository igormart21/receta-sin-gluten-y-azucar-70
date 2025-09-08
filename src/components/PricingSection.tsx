import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-success to-success/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            🔥 Oferta Especial por Tiempo Limitado 🔥
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Accede ahora a +1000 recetas que cambiarán tu vida para siempre
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-2xl rounded-2xl">
            <div className="text-center">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-2">Valor normal:</p>
                <p className="text-3xl text-muted-foreground line-through">$49.90</p>
              </div>
              
              <div className="mb-8">
                <p className="text-2xl font-bold text-foreground mb-2">Precio especial HOY:</p>
                <p className="text-6xl md:text-8xl font-extrabold text-success mb-4">
                  $9<span className="text-4xl">.90</span>
                </p>
                <p className="text-xl text-muted-foreground">Pago único • Acceso de por vida</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span className="text-success font-bold">✓</span>
                  <span>+1000 recetas sin gluten y sin azúcar</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span className="text-success font-bold">✓</span>
                  <span>Información nutricional completa</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span className="text-success font-bold">✓</span>
                  <span>Acceso inmediato tras la compra</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span className="text-success font-bold">✓</span>
                  <span>Recetas fáciles de preparar</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <span className="text-success font-bold">✓</span>
                  <span>Desayunos, almuerzos, cenas y postres</span>
                </div>
              </div>
              
              <a href="https://pay.hotmart.com/W101758529O?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                <Button variant="cta-large" size="xl" className="w-full sm:w-auto text-2xl py-6 px-12">
                  🛒 ¡COMPRAR AHORA POR $9.90!
                </Button>
              </a>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <p>💳 Pago seguro • 🚀 Descarga instantánea • ✨ Garantía de satisfacción</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl inline-block">
            <p className="text-white text-lg font-semibold">
              ⏰ ¡Esta oferta puede terminar en cualquier momento!
            </p>
            <p className="text-white/80">
              No dejes pasar esta oportunidad única
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;