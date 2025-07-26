const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="inline-block p-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mb-4">
            <i className="fas fa-heart text-white text-2xl"></i>
          </div>
          <h3 className="font-dancing text-3xl mb-2">Alfachri Gani & Silvia Valleria</h3>
          <p className="text-gray-400">Sabtu, kalo ngak ujan</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/rmdhn.exe/" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://discord.gg/napcafe" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <i className="fab fa-discord text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/@naplive7" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm">© 2025 - gaungkan ❤️ </p>
      </div>
    </footer>
  );
};

export default Footer;