export default function Stats() {
    const stats = [
      { number: "14K", label: "Customers" },
      { number: "37K", label: "Products Sold" },
      { number: "10+", label: "Years Experience" },
      { number: "13", label: "Licensed Stores" }
    ]
  
    return (
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  