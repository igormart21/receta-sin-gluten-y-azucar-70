import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary min-h-[70vh] flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_hsl(var(--green-light))_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_hsl(var(--green-medium))_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="block">¡Transforma Tu Vida con</span>
            <span className="text-accent block text-5xl md:text-7xl lg:text-8xl">+1000 Recetas</span>
            <span className="block">Sin Gluten y Sin Azúcar!</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://player.vimeo.com/video/1116524431?badge=0&autopause=0&player_id=0&app_id=58479" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                title="Recetas Sin Gluten y Sin Azúcar" 
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Descubre el secreto para disfrutar de comidas deliciosas mientras cuidas tu salud y transformas tu cuerpo naturalmente
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://pay.hotmart.com/W101758529O?checkoutMode=10" target="_blank" rel="noopener noreferrer">
              <Button variant="cta-large" size="xl" className="w-full sm:w-auto">
                🍽️ ¡Obtén Acceso Inmediato por Solo $9.90!
              </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">1000+ Recetas</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">Acceso Instantáneo</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💝</span>
              <span className="font-semibold">Precio Especial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;