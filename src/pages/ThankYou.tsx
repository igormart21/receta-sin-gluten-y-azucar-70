import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const ThankYou = () => {
  return <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Success Animation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--green-light))_0%,_transparent_70%)] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            ¡FELICITACIONES! 🎉
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-accent mb-8">
            Tu Compra Ha Sido Confirmada
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            ¡Excelente decisión! Acabas de dar un paso gigante hacia dominar completamente la repostería sin gluten. 
            Tus nuevos materiales te están esperando.
          </p>

          {/* What's Next Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">¿Qué Sigue Ahora?</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📧</div>
                <h4 className="font-bold text-white mb-2">Revisa Tu Email</h4>
                <p className="text-white/80 text-sm">Recibirás el acceso a tus materiales en los próximos minutos</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-bold text-white mb-2">Descarga Inmediata</h4>
                <p className="text-white/80 text-sm">Acceso instantáneo a todos los PDFs y materiales bonus</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">👩‍🍳</div>
                <h4 className="font-bold text-white mb-2">¡A Cocinar!</h4>
                <p className="text-white/80 text-sm">Comienza hoy mismo con tus nuevas recetas profesionales</p>
              </div>
            </div>
          </Card>

          {/* What You Get Reminder */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Lo Que Acabas de Obtener:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-bold text-accent mb-3">🍰 Postres Sin Gluten Irresistibles</h4>
                <ul className="text-white/90 space-y-1">
                  <li>✓ 50+ recetas profesionales</li>
                  <li>✓ Técnicas secretas para texturas perfectas</li>
                  <li>✓ Ingredientes fáciles de conseguir</li>
                  <li>✓ Paso a paso con fotos detalladas</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-bold text-accent mb-3">🎨 25 Coberturas y Rellenos Profesionales</h4>
                <ul className="text-white/90 space-y-1">
                  <li>✓ 25 recetas únicas de coberturas</li>
                  <li>✓ Técnicas de decoración profesional</li>
                  <li>✓ Consistencia perfecta garantizada</li>
                  <li>✓ Trucos de conservación y almacenamiento</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bonus Reminder */}
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-6 mb-12">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎁 BONUS INCLUIDO</h3>
            <p className="text-white text-lg">
              <strong>Manual de Troubleshooting GRATIS</strong> - Para resolver cualquier problema en la cocina (Valor: $19.90)
            </p>
          </div>

          {/* Support Section */}
          <div className="bg-white/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">¿Necesitas Ayuda?</h3>
            <p className="text-white/80 mb-4">
              Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta.
            </p>
            
          </div>

          {/* Social Sharing */}
          <div className="text-center">
            <p className="text-white/80 mb-4">¡Comparte tu emoción!</p>
            <div className="flex justify-center gap-4">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ThankYou;