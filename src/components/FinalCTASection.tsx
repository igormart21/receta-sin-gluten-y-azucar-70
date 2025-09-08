import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Estás Lista para Cambiar Tu Vida?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Imagínate en 30 días sintiéndote más liviana, con más energía, disfrutando de comidas deliciosas 
            y viendo cómo tu cuerpo se transforma naturalmente. Todo esto por menos de lo que gastas en un café cada día.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Por Solo $9.90 Obtienes:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left text-white">
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>135 Desayunos y meriendas energéticas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>226 Almuerzos saciantes y nutritivos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>60 Cenas ligeras y deliciosas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>70 Postres sin culpa</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Información nutricional completa</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Acceso de por vida</span>
              </div>
            </div>
          </div>
          
          <a href="https://pay.hotmart.com/W101758529O?checkoutMode=10" target="_blank" rel="noopener noreferrer">
            <Button variant="cta-large" size="xl" className="text-2xl py-6 px-12 mb-6">
              🎯 ¡SÍ, QUIERO TRANSFORMAR MI VIDA POR $9.90!
            </Button>
          </a>
          
          <p className="text-white/70 text-sm">
            Oferta por tiempo limitado • Pago único • Sin suscripciones
          </p>
          
          <div className="mt-8 text-center">
            <p className="text-accent font-bold text-lg">
              ⚡ Descarga inmediata tras la compra
            </p>
            <p className="text-white/80">
              Comienza tu transformación hoy mismo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;