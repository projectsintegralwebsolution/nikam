"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";

export interface VideoShowcaseItem {
  id: string;
  src: string;
}

const VIDEOS: VideoShowcaseItem[] = [
  {
    id: "video-1",
    src: "/videos/precision-flame-glass-forming.mp4",
  },
  {
    id: "video-2",
    src: "/videos/pilot-plant-process-assembly.mp4",
  },
  {
    id: "video-3",
    src: "/videos/quality-verification-annealing.mp4",
  },
  {
    id: "video-4",
    src: "/videos/laboratory-apparatus-calibration.mp4",
  },
  {
    id: "video-5",
    src: "/videos/pilot-installation-testing.mp4",
  },
  {
    id: "video-6",
    src: "/videos/condenser-fabrication-coil-winding.mp4",
  },
];

export default function WorkVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleOpen = (video: VideoShowcaseItem) => {
    setActiveVideo(video);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveVideo(null);
  };

  // Lock background scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeVideo]);

  return (
    <div className="border-t border-gray-100 pt-16 sm:pt-20 mb-16 sm:mb-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff7522]/10 border border-[#ff7522]/30 text-[#ff7522] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
          <span>WORK IN ACTION</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121315] font-heading mb-3 tracking-tight">
          Manufacturing &amp; Installation Videos
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Watch authentic videos of our skilled scientific glassblowers, manufacturing equipment, and turnkey industrial installations in operation. Click any video to view playback.
        </p>
      </div>

      {/* 6 Video Cards Grid - Pure Video Cards with Centered Play Button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {VIDEOS.map((v, idx) => (
          <div
            key={v.id}
            onClick={() => handleOpen(v)}
            className="group relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-black/80 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-black"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(v);
              }
            }}
            aria-label={`Play Video ${idx + 1}`}
          >
            {/* Video Preview Element */}
            <video
              src={v.src}
              preload="metadata"
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none"
            />

            {/* Subtle Gradient Scrim for contrast */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors pointer-events-none" />

            {/* Perfectly Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff7522] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(255,117,34,0.55)] group-hover:scale-115 group-hover:shadow-[0_0_35px_rgba(255,117,34,0.85)] transition-all duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup Modal - Pure Responsive Video */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Video Player"
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button in Top-Right */}
            <button
              onClick={handleClose}
              type="button"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#ff7522] text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff7522]"
              aria-label="Close video popup"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Video Viewport - Auto-sized aspect-video */}
            <div className="relative w-full bg-black flex items-center justify-center overflow-hidden aspect-video max-h-[75vh] sm:max-h-[82vh]">
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
                src={activeVideo.src}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
