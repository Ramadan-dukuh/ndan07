const timelineData = [
  {
    id: 1,
    title: "Pertemuan Pertama",
    date: "24 Maret 2023",
    description: "Bermain Game keren happenlance",
    position: "left",
    color: "from-pink-50 to-pink-100"
  },
  {
    id: 2,
    title: "Jatuh Cinta",
    date: "7 April 2023",
    description: "Kita melalui Labirin bersama,susah dan senang kita lalui.",
    position: "right",
    color: "from-orange-50 to-orange-100"
  },
  {
    id: 3,
    title: "Menjadi Teman Baik",
    date: "23 Maret 2024",
    description: "Kita semakin dekat dan mengenal di Bokura.",
    position: "left",
    color: "from-pink-50 to-pink-100"
  },
  {
    id: 4,
    title: "Sahabat Baik",
    date: "20 Maret 2025",
    description: "Kita melewati banyak rintangan di Split Fiction.",
    position: "right",
    color: "from-orange-50 to-orange-100"
  },
  {
    id: 5,
    title: "Pernikahan",
    date: "Sabtu Kalo Ngak Ujan",
    description: "Katanya hari sabtu klo gk ujan ton.",
    position: "left",
    color: "from-pink-50 to-pink-100"
  }
];

const StoryTimeline = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-dancing text-5xl text-gray-800 mb-4">Our Love Story</h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">Perjalanan indah dua hati yang bertemu, jatuh cinta, dan memutuskan untuk bersama selamanya</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 to-orange-300"></div>
            
            <div className="space-y-16">
              {timelineData.map((item) => (
                <div key={item.id} className="timeline-item relative flex items-center">
                  {item.position === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right animate-slide-up">
                        <div className={`bg-gradient-to-r ${item.color} p-6 rounded-2xl shadow-lg`}>
                          <h3 className="font-playfair text-2xl text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.date}</p>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-1/2 pl-8 animate-slide-up">
                        <div className={`bg-gradient-to-r ${item.color} p-6 rounded-2xl shadow-lg`}>
                          <h3 className="font-playfair text-2xl text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.date}</p>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;