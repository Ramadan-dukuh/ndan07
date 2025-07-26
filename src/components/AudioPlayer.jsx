import { useEffect, useRef } from 'react';

const AudioPlayer = ({ musicPlaying, setMusicPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (musicPlaying) {
      audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    } else {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/Perfection Sempurna English Version - BBIBEEB.mp3" type="audio/wav" />
      </audio>

      <div className="music-controls">
        <button 
          onClick={toggleMusic} 
          className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30"
        >
          <i className={`fas ${musicPlaying ? 'fa-pause' : 'fa-music'} text-pink-500 text-lg`}></i>
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;