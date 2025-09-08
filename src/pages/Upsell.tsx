import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const Upsell = () => {
  useEffect(() => {
    // Load Hotmart checkout elements script
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      // Initialize the sales funnel widget after script loads
      if ((window as any).checkoutElements) {
        (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--green-light))_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--green-medium))_0%,_transparent_50%)] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-500 text-white text-lg font-bold py-2 px-6 rounded-full inline-block mb-6 animate-pulse">
              🔥 ¡OFERTA ESPECIAL POR TIEMPO LIMITADO! 🔥
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">¡ESPERA!</span>
              <span className="text-accent block text-5xl md:text-7xl">Completa Tu Transformación</span>
              <span className="block text-3xl md:text-5xl">con Estos Secretos Exclusivos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Antes de continuar... ¿Te gustaría dominar también los <strong>POSTRES MÁS DELICIOSOS</strong> sin gluten y las <strong>COBERTURAS PROFESIONALES</strong> que harán que tus creaciones sean irresistibles?
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-4">
        <p className="font-bold text-lg">
          ⏰ Esta oferta desaparece en los próximos minutos - No la verás nuevamente a este precio
        </p>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aprovecha Esta Oportunidad Única
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Solo por ser parte de nuestra comunidad, tienes acceso EXCLUSIVO a estos dos materiales que normalmente vendemos por $29.90 cada uno...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Product 1 - Postres Sin Gluten */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/9ce96627-f700-4926-a90e-2f83642f5da5.png" 
                  alt="Postres Sin Gluten" 
                  className="w-full max-w-sm mx-auto object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  ¡NUEVO!
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                🍰 Postres Sin Gluten Irresistibles
              </h3>
              
              <ul className="text-white/90 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  50+ recetas de postres sin gluten profesionales
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Técnicas secretas para texturas perfectas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Postres que nadie creerá que son sin gluten
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Ingredientes fáciles de conseguir
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Paso a paso con fotos detalladas
                </li>
              </ul>
              
              <div className="text-center">
                <div className="text-white/60 line-through text-lg">Valor: $29.90</div>
                <div className="text-2xl font-bold text-accent mb-4">Hoy: INCLUIDO</div>
              </div>
            </Card>

            {/* Product 2 - Coberturas y Rellenos */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/1b55e542-3762-4678-85ba-560cddc66396.png" 
                  alt="Coberturas y Rellenos" 
                  className="w-full max-w-sm mx-auto object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  EXCLUSIVO
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                🎨 25 Coberturas y Rellenos Profesionales
              </h3>
              
              <ul className="text-white/90 space-y-2 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  25 recetas de coberturas y rellenos únicos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Técnicas de decoración profesional
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Consistencia perfecta garantizada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Sabores innovadores y clásicos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Trucos para conservación y almacenamiento
                </li>
              </ul>
              
              <div className="text-center">
                <div className="text-white/60 line-through text-lg">Valor: $29.90</div>
                <div className="text-2xl font-bold text-accent mb-4">Hoy: INCLUIDO</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              ¿Por Qué Necesitas Estos Materiales AHORA?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-xl font-bold text-white mb-2">Postres Completos</h3>
                <p className="text-white/80">Domina todos los aspectos: desde la base hasta la decoración final</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">Ahorro Brutal</h3>
                <p className="text-white/80">$59.80 en valor por solo $12.90 adicionales - ¡78% de descuento!</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Resultados Inmediatos</h3>
                <p className="text-white/80">Implementa estas recetas hoy mismo y sorprende a todos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Lo Que Dicen Quienes Ya Los Tienen:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 italic mb-3">"Los postres sin gluten quedaron increíbles! Nadie notó la diferencia. Las coberturas son de otro nivel."</p>
              <p className="text-accent font-semibold">- María C.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 italic mb-3">"Ahora puedo hacer postres profesionales desde casa. Mis hijos están fascinados."</p>
              <p className="text-accent font-semibold">- Carmen L.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-yellow-400 text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white/90 italic mb-3">"Las técnicas de decoración me han ahorrado horas de prueba y error. Vale cada centavo."</p>
              <p className="text-accent font-semibold">- Ana R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Última Oportunidad!
            </h2>
            
            <div className="bg-white/20 rounded-lg p-8 mb-8">
              <div className="text-6xl font-bold text-white mb-4">$12.90</div>
              <div className="text-white/80 text-lg line-through mb-2">En lugar de $59.80</div>
              <div className="text-2xl font-bold text-yellow-300">¡AHORRA $46.90 HOY!</div>
            </div>
            
            <p className="text-xl text-white mb-8">
              Esta oferta especial termina cuando cierres esta página. 
              <strong> No volverás a ver estos materiales a este precio.</strong>
            </p>
            
            <div className="space-y-4">
              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel" className="w-full"></div>
              
              <p className="text-white/80 text-sm">
                ✅ Acceso inmediato | ✅ Garantía de satisfacción | ✅ Soporte incluido
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-white/90">
                <strong>BONUS ESPECIAL:</strong> Si decides hoy, también recibirás nuestro exclusivo 
                "Manual de Troubleshooting" para resolver cualquier problema en la cocina (Valor: $19.90) 
                <span className="text-yellow-300 font-bold">¡GRATIS!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsell;