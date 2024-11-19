import Image from 'next/image';

export default function Ingredients() {
    const ingredients = [
      {
        name: "Vitamin C",
        description: "Vitamin C as ascorbic acid",
        image: "/api/placeholder/200/200"
      },
      {
        name: "Vitamin B3",
        description: "Niacin for healthy gut and skin",
        image: "/api/placeholder/200/200"
      },
      {
        name: "Magnesium",
        description: "Boost energy and support muscle function",
        image: "/api/placeholder/200/200"
      },
      {
        name: "Hyaluronic Acid",
        description: "For smooth, supple and soft skin!",
        image: "/api/placeholder/200/200"
      },
      {
        name: "Lactobacillus",
        description: "Invigorate your gut microbiome",
        image: "/api/placeholder/200/200"
      }
    ]
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Better Ingredients</h2>
            <p className="text-lg text-gray-600">
              Only the best when you choose products offered on our platform - high-quality
              ingredients for high quality products!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="group relative bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-40 mb-4">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{ingredient.name}</h3>
                <p className="text-sm text-gray-600">{ingredient.description}</p>
                <button className="mt-4 text-primary hover:underline">see more</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }