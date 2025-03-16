import { useRef, useState } from "react";
import style from "./videoCard.module.css";
import video from "../../assets/video/Hi-Tech Intro(1080P_HD).mp4"

const VideoCard = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [isMouseInVideo, setIsMouseInVideo] = useState(true); 
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
      setIsMouseInVideo(true);
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: "50%", y: "50%" });
    setIsMouseInVideo(true);  
  };

  return (
    <div
      className={style.videoCard_container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className={style.videoCard_video}
        src={video}
        onEnded={() => setIsPlaying(false)}
      />
      {isMouseInVideo && (
        <button
          className={style.playButton}
          onClick={togglePlay}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      )}
    </div>
  );
};

export default VideoCard;
