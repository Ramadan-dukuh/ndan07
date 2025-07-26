const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-orange-100/20"></div>
      <div className="text-center z-10 animate-fade-in">
        <div className="mb-8">
          <div className="inline-block p-6 glass-effect rounded-3xl animate-glow">
            <i className="fas fa-heart text-red-400 text-6xl animate-float"></i>
          </div>
        </div>
        <h1 className="font-dancing text-4xl md:text-6xl lg:text-8xl text-gray-800 mb-4">
          Alfachri Gani & Silvia Valleria
        </h1>
        <p className="font-playfair text-xl md:text-2xl text-gray-600 mb-8">
          Merajut Cinta, Menyatukan Hati
        </p>
        <div className="glass-effect rounded-2xl p-6 inline-block">
          <p className="font-inter text-lg text-gray-700 mb-2">
            Sabtu, Kalo ngak ujan
          </p>
          <p className="font-inter text-gray-600">Pukul 08.00 WIB</p>
          <p className="font-inter text-sm text-gray-600">nyalain lagunya</p>
        </div>
        <div className="mt-12">
          <a
            href="#story"
            className="inline-flex items-center bg-gradient-to-r from-pink-400 to-orange-400 text-white px-8 py-4 rounded-full hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">Story</span>
            <i className="fas fa-arrow-down animate-bounce"></i>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
