import { useRef, useState } from "react";
import style from "./videoCard.module.css";

const VideoCard = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [isMouseInVideo, setIsMouseInVideo] = useState(false);

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

  const handleMouseMove = (e) => {
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
    setIsMouseInVideo(false);
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
        src="https://greenshift-road.myshopify.com/cdn/shop/videos/c/vp/fbf110def8d14ed3ada9976700879e4e/fbf110def8d14ed3ada9976700879e4e.HD-1080p-7.2Mbps-18222980.mp4?v=0"
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
