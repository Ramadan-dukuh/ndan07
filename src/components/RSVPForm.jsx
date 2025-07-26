import { useState } from 'react';

const RSVPForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      document.getElementById('rsvpSuccess').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl text-gray-800 mb-4">RSVP</h2>
          <p className="font-inter text-gray-600">Konfirmasikan kehadiran Anda untuk membantu kami mempersiapkan acara</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 animate-slide-up">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">No. WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Konfirmasi Kehadiran *</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="attendance" value="hadir" required className="mr-2 text-pink-500" />
                      <span>Hadir</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="attendance" value="tidak-hadir" required className="mr-2 text-pink-500" />
                      <span>Tidak Hadir</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Jumlah Tamu</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none transition-colors duration-300">
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5+">5+ Orang</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ucapan & Doa</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none transition-colors duration-300" 
                    placeholder="Berikan ucapan dan doa terbaik untuk kami..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white py-4 rounded-xl hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                >
                  Kirim Konfirmasi
                </button>
              </div>
            </form>
          ) : (
            <div id="rsvpSuccess" className="mt-8 text-center animate-slide-up">
              <div className="glass-effect rounded-3xl p-8">
                <div className="inline-block p-4 bg-green-500 rounded-full mb-4">
                  <i className="fas fa-check text-white text-2xl"></i>
                </div>
                <h3 className="font-playfair text-2xl text-gray-800 mb-2">Terima Kasih!</h3>
                <p className="text-gray-600">Konfirmasi Anda telah berhasil dikirim. Kami tidak sabar untuk bertemu dengan Anda!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;