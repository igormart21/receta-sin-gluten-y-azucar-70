import { Button } from "@/components/ui/button";
const VideoSection = () => {
  return <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe src="https://player.vimeo.com/video/1116325723?badge=0&autopause=0&player_id=0&app_id=58479" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Recetas de Cocina Saludables" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://pay.hotmart.com/W101758529O?checkoutMode=10" target="_blank" rel="noopener noreferrer">
            <Button variant="cta-large" size="xl">
              🔥 ¡Sí, Quiero Acceso Inmediato por Solo $9.90!
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Acceso inmediato • Garantía de satisfacción • Pago 100% seguro
          </p>
        </div>
      </div>
    </section>;
};
export default VideoSection;