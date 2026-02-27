import React from "react";

const FashionSection = () => {
  const fashionProducts = [
    {
      id: 1,
      title: "Premium Fashion Jacket",
      description:
        "A modern stylish jacket made from high-quality materials. Comfortable, elegant, and perfect for any occasion.",
      image:
        "https://i.pinimg.com/736x/ea/f8/eb/eaf8ebd997a6997740502d20ab9783a0.jpg"
    },
    {
      id: 2,
      title: "Elegant Summer Dress",
      description:
        "Lightweight and breathable summer dress designed for comfort and style. Perfect for casual and special events.",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Fashion
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {fashionProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                {product.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FashionSection;