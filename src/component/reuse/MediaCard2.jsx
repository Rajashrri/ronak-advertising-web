
import React, { useState } from "react";

const MediaCard2 = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <button
        type="button"
        className="blogcard blogcard2"
        onClick={() => setIsOpen(true)}
        style={{
          border: "none",
          padding: 0,
          background: "none",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <div className="blogwrap">
          <figure className="mediaimg1">
            <img src={data.image} alt={data.title || "Media"} />
          </figure>
        </div>
      </button>

      {/* Image Popup */}
      {isOpen && (
        <div
          className="image-modal"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={data.image}
              alt={data.title || "Media"}
              className="popup-image"
            />
            <p>Located on busy Main Street near the Central Library and Innovation Park, our advertising agency's hoarding spot offers excellent traffic visibility. This strategic location attracts tech enthusiasts, entrepreneurs, and creatives, ensuring your message reaches a diverse and engaged audience. Surrounded by vibrant landmarks and easy to access, </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaCard2;
