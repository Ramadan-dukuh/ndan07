const galleryItems = [
  { img:"/public/ndan.jpg",icon: "fa-camera", color: "from-pink-200 to-pink-300" },
  { img:"/public/ndan2.png",icon: "fa-heart", color: "from-orange-200 to-orange-300" },
  { img:"/public/ndan Repanda.jpg",icon: "fa-kiss", color: "from-pink-300 to-orange-300" },
  { img:"/public/ndan Mollenz.png",icon: "fa-ring", color: "from-orange-200 to-pink-200" },
  { img:"/public/ndan Maru.png",icon: "fa-hands-holding-heart", color: "from-pink-200 to-orange-200", span: "md:col-span-2" },
  { img:"/public/ndan henDra.jpg",icon: "fa-dove", color: "from-orange-300 to-pink-200" },
  { img:"/public/ndan3.jpg",icon: "fa-flower", color: "from-pink-300 to-pink-200" }
];

const Gallery = () => {
  return (
<section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl text-gray-800 mb-4">Galeri Prewedding</h2>
          <p className="font-inter text-gray-600">Momen-momen indah yang telah kami abadikan bersama</p>
        </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`gallery-item bg-gradient-to-br ${item.color} animate-slide-up overflow-hidden rounded-2xl ${item.span || ''}`}
            >
              <img 
                src={item.img} 
                alt={item.alt || "Foto prewedding"} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy" // Optimasi lazy loading
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl">
            Lihat Semua Foto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;