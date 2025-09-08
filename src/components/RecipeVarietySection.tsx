const RecipeVarietySection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Decenas de Recetas para Nunca Cansarte de Comer lo Mismo
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-success mb-4">
            ¡Vida Sana y Sin Restricciones!
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre una variedad infinita de sabores que transformarán tu relación con la comida saludable
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/79aded3f-aae2-4a80-afa3-cfb43842d0f8.png" 
              alt="Variedad de recetas saludables sin gluten y sin azúcar"
              className="rounded-2xl shadow-2xl max-w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🥗</div>
            <h4 className="text-xl font-bold text-foreground mb-2">Platos Principales</h4>
            <p className="text-muted-foreground">
              Recetas completas y nutritivas que te mantendrán satisfecha y con energía
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🥤</div>
            <h4 className="text-xl font-bold text-foreground mb-2">Bebidas Saludables</h4>
            <p className="text-muted-foreground">
              Smoothies y jugos naturales llenos de vitaminas y sabor
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🧁</div>
            <h4 className="text-xl font-bold text-foreground mb-2">Postres Deliciosos</h4>
            <p className="text-muted-foreground">
              Dulces sin culpa que cuidan tu salud sin sacrificar el sabor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeVarietySection;