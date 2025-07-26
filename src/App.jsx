import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <div className="font-inter bg-gradient-to-br from-pink-50 to-orange-50 scroll-smooth">
      <AudioPlayer musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      <Navbar />
      <Hero />
      <StoryTimeline />
      <Gallery />
      <Schedule />
      <RSVPForm />
      <Footer />
    </div>
  );
}

export default App;