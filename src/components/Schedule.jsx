const scheduleData = [
  {
    type: "Akad Nikah",
    icon: "fa-mosque",
    gradient: "from-pink-400 to-orange-400",
    date: "Sabtu, klo gk ujan",
    time: "08.00 - 10.00 WIB",
    location: "Margonda City",
    color: "pink",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.0475567600765!2d106.82807617418489!3d-6.380214162406696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec11e6ecbe35%3A0x45e4fdba5c9fa9c0!2sJl.%20Margonda%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1753541171911!5m2!1sid!2sid",
  },
  {
    type: "Resepsi",
    icon: "fa-utensils",
    gradient: "from-orange-400 to-pink-400",
    date: "Sabtu, klo gk ujan",
    time: "11.00 - 15.00 WIB",
    location: "Gacoan",
    color: "orange",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.937600845975!2d106.81887837418509!3d-6.39695536256461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf9fd598a9d%3A0xe577d3ca1dbc2693!2sMie%20Gacoan%20Depok%20-%20Margonda!5e1!3m2!1sid!2sid!4v1753541294204!5m2!1sid!2sid",
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl text-gray-800 mb-4">
            Jadwal & Lokasi
          </h2>
          <p className="font-inter text-gray-600">
            Bergabunglah dengan kami dalam momen bahagia ini
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-3xl p-8 animate-slide-up"
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-block p-4 bg-gradient-to-r ${item.gradient} rounded-full mb-4`}
                >
                  <i className={`fas ${item.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-playfair text-3xl text-gray-800 mb-2">
                  {item.type}
                </h3>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center">
                  <i
                    className={`fas fa-calendar-alt text-${item.color}-500 mr-3`}
                  ></i>
                  <span className="text-gray-700">{item.date}</span>
                </div>
                <div className="flex items-center justify-center">
                  <i className={`fas fa-clock text-${item.color}-500 mr-3`}></i>
                  <span className="text-gray-700">{item.time}</span>
                </div>
                <div className="flex items-center justify-center">
                  <i
                    className={`fas fa-map-marker-alt text-${item.color}-500 mr-3`}
                  ></i>
                  <span className="text-gray-700">{item.location}</span>
                </div>
                <div className="mt-6">
                  <iframe
                    className="w-full h-48 rounded-2xl"
                    src={item.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
