import { Button } from "@/components/ui/button";

const EbookContentSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué Encontrarás en Nuestras Recetas?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contenido detallado y organizado para que nunca te falten ideas deliciosas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/67644808-2b86-437d-8297-ed8f0e40329f.png" 
                alt="135 Desayunos y Meriendas para llenarte de energía durante todo el día"
                className="w-full rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-success">135</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">DESAYUNOS Y MERIENDAS</h3>
                    <p className="text-lg text-muted-foreground">
                      Para llenarte de energía durante todo el día
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <span className="text-6xl font-bold text-success">226</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">ALMUERZOS</h3>
                    <p className="text-lg text-muted-foreground">
                      Saciantes y nutritivos de pocos minutos de preparación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/4eea25b7-83da-4ec4-b4bd-0f11cffe2982.png" 
                alt="60 Cenas variadas y sencillas, 70 Postres y Dulces deliciosos"
                className="w-full rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-success">60</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">CENAS</h3>
                    <p className="text-lg text-muted-foreground">
                      Variadas y sencillas pero también ricas y livianas para antes de irte a dormir
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <span className="text-6xl font-bold text-success">70</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">POSTRES Y DULCES</h3>
                    <p className="text-lg text-muted-foreground">
                      ¡Deliciosos! Porque comer saludables no significa privarnos de comer goloso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-success/10 p-8 rounded-2xl text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Incluyen Información Nutricional Completa
          </h3>
          <p className="text-lg text-muted-foreground">
            <strong>Cantidad de proteínas, carbohidratos, grasas, calorías y fibra en cada porción</strong>
          </p>
        </div>
        
        <div className="text-center">
          <a href="https://pay.hotmart.com/W101758529O?checkoutMode=10" target="_blank" rel="noopener noreferrer">
            <Button variant="cta-large" size="xl">
              🍽️ ¡Quiero Todas Estas Recetas por Solo $9.90!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EbookContentSection;