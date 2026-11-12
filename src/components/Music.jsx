import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex items-center justify-center">


      <button
        onClick={toggleMusic}
        className="bg-transparent text-[#806b57] px-4 py-2 rounded-full"
      >
        {playing ? <CiPause1 size={20} /> : <FaPlay size={20} />}
      </button>

      <audio ref={audioRef} loop>
        <source src="/audio.mp3" type="audio/mp3" />
      </audio>

    </div>
  );
}