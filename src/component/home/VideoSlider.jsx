import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import videocard from "../../assets/imgs/testimonial.mp4";
import Heading from "../reuse/Heading";

// ==========================================
// PLAY ICON
// ==========================================
const PlayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <path
        d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
        fill="#DD2B1C"
      />

      <path
        d="M58.1683 41.3672L38.894 29.9692C38.4958 29.7287 38.0406 29.5988 37.5754 29.593C37.1102 29.5872 36.6519 29.7056 36.2478 29.9361C35.8437 30.1666 35.5084 30.5008 35.2766 30.9042C35.0449 31.3076 34.925 31.7655 34.9293 32.2307V55.0149C34.9294 55.4784 35.0522 55.9335 35.2851 56.3341C35.5181 56.7347 35.8529 57.0666 36.2555 57.296C36.6582 57.5253 37.1144 57.6441 37.5778 57.6401C38.0412 57.6361 38.4953 57.5096 38.894 57.2733L58.1683 45.884C58.5616 45.6518 58.8876 45.3212 59.1141 44.9246C59.3405 44.528 59.4597 44.0791 59.4597 43.6224C59.4597 43.1657 59.3405 42.7169 59.1141 42.3203C58.8876 41.9237 58.5616 41.593 58.1683 41.3609V41.3672Z"
        fill="white"
      />
    </svg>
  );
};

// ==========================================
// PAUSE ICON
// ==========================================
const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <path
        d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
        fill="#DD2B1C"
      />

      <path
        d="M34 29H40V59H34V29ZM48 29H54V59H48V29Z"
        fill="white"
      />
    </svg>
  );
};

// ==========================================
// VIDEO SLIDE
// ==========================================
const VideoSlide = ({
  index,
  videoRefs,
  playingIndex,
  handlePlayPause,
  handleVideoPlay,
  handleVideoPause,
  handleVideoEnded,
}) => {
  const isPlaying = playingIndex === index;

  return (
    <div className={`vode0-card ${isPlaying ? "video-playing" : ""}`}>
      <video
        ref={(el) => {
          videoRefs.current[index] = el;
        }}
        src={videocard}
        playsInline
        preload="metadata"
        onPlay={() => handleVideoPlay(index)}
        onPause={() => handleVideoPause(index)}
        onEnded={() => handleVideoEnded(index)}
      />

      <button
        type="button"
        className="playbtn"
        onClick={() => handlePlayPause(index)}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function VideoSlider() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const [playingIndex, setPlayingIndex] = useState(null);

  // ==========================================
  // PLAY / PAUSE
  // ==========================================
  const handlePlayPause = async (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.log("Video play error:", error);
    }
  };

  // ==========================================
  // VIDEO PLAY
  // ==========================================
  const handleVideoPlay = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, videoIndex) => {
      if (video && videoIndex !== index) {
        video.pause();
      }
    });

    setPlayingIndex(index);

    // Stop Swiper autoplay
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  // ==========================================
  // VIDEO PAUSE
  // ==========================================
  const handleVideoPause = () => {
    setPlayingIndex(null);

    // Resume Swiper autoplay
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // ==========================================
  // VIDEO END
  // ==========================================
  const handleVideoEnded = () => {
    setPlayingIndex(null);

    // Resume Swiper autoplay
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // ==========================================
  // SLIDE CHANGE
  // ==========================================
  const handleSlideChange = () => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });

    setPlayingIndex(null);

    // IMPORTANT:
    // Don't call swiper.autoplay.start() here.
    // Swiper handles autoplay itself.
  };

  return (
    <section className="testimonial-section1 p-70">
      <div className="custom-container" data-gsap>

        <Heading
          title="WHAT OUR CLIENTS HAVE TO SAY <br/> ABOUT THE IMPACT WE CREATE"
          subtitle="Video Testimonial"
          titleclass="text-black text-center"
          className="text-center"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          className="videoslidermain"

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}

          onSlideChange={handleSlideChange}
        >

          {/* ================= SLIDE 1 ================= */}

          <SwiperSlide>
            <VideoSlide
              index={0}
              videoRefs={videoRefs}
              playingIndex={playingIndex}
              handlePlayPause={handlePlayPause}
              handleVideoPlay={handleVideoPlay}
              handleVideoPause={handleVideoPause}
              handleVideoEnded={handleVideoEnded}
            />
          </SwiperSlide>

          {/* ================= SLIDE 2 ================= */}

          <SwiperSlide>
            <VideoSlide
              index={1}
              videoRefs={videoRefs}
              playingIndex={playingIndex}
              handlePlayPause={handlePlayPause}
              handleVideoPlay={handleVideoPlay}
              handleVideoPause={handleVideoPause}
              handleVideoEnded={handleVideoEnded}
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}