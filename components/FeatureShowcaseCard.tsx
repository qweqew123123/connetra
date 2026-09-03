"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { features, type FeatureItem } from "../data/features";

interface FeatureShowcaseCardProps {
  feature: FeatureItem;
  onVideoEnded?: () => void;
  onDurationChange?: (duration: number) => void;
}

export default function FeatureShowcaseCard({
  feature,
  onVideoEnded,
  onDurationChange,
}: FeatureShowcaseCardProps) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Seamless, instant playback when switching tabs with zero reload delay
  useEffect(() => {
    setIsPlaying(true);
    features.forEach((f) => {
      const v = videoRefs.current[f.id];
      if (v) {
        if (f.id === feature.id) {
          v.currentTime = 0;
          v.play().catch(() => {});
          if (v.duration && v.duration > 0 && onDurationChange) {
            onDurationChange(v.duration);
          }
        } else {
          v.pause();
        }
      }
    });
  }, [feature.id, onDurationChange]);

  const togglePlay = () => {
    const activeVideo = videoRefs.current[feature.id];
    if (!activeVideo) return;
    if (isPlaying) {
      activeVideo.pause();
      setIsPlaying(false);
    } else {
      activeVideo.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    features.forEach((f) => {
      const v = videoRefs.current[f.id];
      if (v) v.muted = nextMuted;
    });
  };

  return (
    <div className="feature-video-card-container">
      <div className="feature-video-window clean-borderless">
        {/* Video Body (All local videos preloaded for instant 0ms switching) */}
        <div className="video-window-body clean-view" onClick={togglePlay}>
          {features.map((f) => {
            const isActive = f.id === feature.id;
            return (
              <video
                key={f.id}
                ref={(el) => {
                  videoRefs.current[f.id] = el;
                }}
                src={f.video}
                muted={isMuted}
                playsInline
                preload="auto"
                onLoadedMetadata={(e) => {
                  if (f.id === feature.id && onDurationChange) {
                    const d = e.currentTarget.duration;
                    if (d > 0) onDurationChange(d);
                  }
                }}
                onEnded={() => {
                  if (isActive && onVideoEnded) {
                    onVideoEnded();
                  }
                }}
                className={`feature-video-screen ${isActive ? "active" : "inactive"}`}
                style={{ display: isActive ? "block" : "none" }}
                aria-label={`Connetra ${f.tabLabel} product demonstration video`}
              />
            );
          })}

          {/* Floating Audio Control on Top Right */}
          <div className="video-floating-controls">
            <button
              type="button"
              className="ctrl-btn-floating"
              onClick={toggleMute}
              title={isMuted ? "Unmute audio" : "Mute audio"}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>

          {/* Floating Play Indicator overlay when paused */}
          {!isPlaying && (
            <div className="video-paused-overlay">
              <div className="play-circle">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          )}
        </div>

        {/* Quick Highlights Footer */}
        {feature.points && feature.points.length > 0 && (
          <div className="video-window-footer">
            {feature.points.map((pt) => (
              <div className="footer-point" key={pt}>
                <Check size={13} className="point-check" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
