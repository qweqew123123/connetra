"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Compass,
  Heart,
  Home,
  MapPin,
  MessageSquare,
  Play,
  QrCode,
  Search,
  SlidersHorizontal,
  Sparkles,
  User,
  Video,
  Volume2,
  VolumeX,
} from "lucide-react";
import type { FeatureItem } from "../data/features";

interface PhoneDeviceMockupProps {
  feature: FeatureItem;
  videoSrc?: string;
}

export default function PhoneDeviceMockup({ feature, videoSrc }: PhoneDeviceMockupProps) {
  const [reserved, setReserved] = useState(false);
  const [activeBottomNav, setActiveBottomNav] = useState("schedule");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const data = feature.scheduleData || {
    title: "Supercharge Your Business with an OutSystems Center of Excellence",
    time: "11:00 AM-11:45 AM · UTC-4 / Hall A",
    location: "Main Stage & Stream Room",
    description:
      "There is no denying the power of modern low-code apps. When you combine them with a robust center of excellence, businesses can accelerate digital delivery by 10x without compromising governance.",
    speaker: {
      name: "Nikita Ramos",
      role: "Head of Systems Architecture, Novar",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    },
  };

  return (
    <div className="phone-device-container">
      {/* Outer Phone Mockup Frame */}
      <div className="phone-mockup">
        {/* Phone Outer Chassis & Highlights */}
        <div className="phone-bezel">
          {/* Dynamic Island / Notch */}
          <div className="phone-dynamic-island">
            <div className="island-camera" />
            <div className="island-sensor" />
          </div>

          {/* Screen Content */}
          <div className="phone-screen">
            {/* Status Bar */}
            <div className="phone-status-bar">
              <span className="status-time">9:41</span>
              <div className="status-icons">
                <span className="signal-bars">
                  <span className="bar b1" />
                  <span className="bar b2" />
                  <span className="bar b3" />
                  <span className="bar b4" />
                </span>
                <span className="wifi-icon">●))</span>
                <span className="battery-icon">
                  <span className="battery-fill" />
                </span>
              </div>
            </div>

            {isPlayingVideo && videoSrc ? (
              <div className="phone-video-player">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="phone-video-element"
                />
                <div className="video-player-controls">
                  <button
                    type="button"
                    className="video-ctrl-btn"
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                  <button
                    type="button"
                    className="video-close-btn"
                    onClick={() => setIsPlayingVideo(false)}
                  >
                    Back to App
                  </button>
                </div>
              </div>
            ) : (
              <div className="phone-app-body">
                {/* App Top Header Bar */}
                <div className="phone-app-header">
                  <div className="app-brand-badge">
                    <Sparkles size={14} className="sparkle-icon" />
                    <span>Connetra</span>
                  </div>
                  <h4 className="app-header-title">Schedule</h4>
                  <div className="app-header-actions">
                    <button type="button" className="app-icon-btn" aria-label="Filter">
                      <SlidersHorizontal size={14} />
                    </button>
                    <button type="button" className="app-icon-btn" aria-label="Search">
                      <Search size={14} />
                    </button>
                  </div>
                </div>

                {/* Event Schedule Content Scrollable Area */}
                <div className="phone-app-scroll">
                  {/* Session Card */}
                  <div className="phone-session-card">
                    <div className="session-tag-row">
                      <span className="session-live-badge">
                        <span className="live-pulse" /> LIVE NOW
                      </span>
                      {videoSrc && (
                        <button
                          type="button"
                          className="preview-stream-btn"
                          onClick={() => setIsPlayingVideo(true)}
                        >
                          <Play size={10} fill="currentColor" /> Preview Stream
                        </button>
                      )}
                    </div>

                    <h5 className="session-headline">{data.title}</h5>

                    <div className="session-meta-row">
                      <Clock size={12} className="meta-icon" />
                      <span>{data.time}</span>
                    </div>

                    <div className="session-about-block">
                      <h6 className="about-label">About</h6>
                      <p className="session-desc-text">{data.description}</p>
                    </div>

                    <button type="button" className="view-map-pill">
                      <MapPin size={12} />
                      <span>View location on map</span>
                    </button>

                    {/* Speaker Info */}
                    <div className="session-speaker-block">
                      <span className="speaker-header-label">Speakers</span>
                      <div className="speaker-item">
                        <img
                          src={data.speaker.avatar}
                          alt={data.speaker.name}
                          className="speaker-avatar"
                        />
                        <div className="speaker-meta">
                          <strong className="speaker-name">{data.speaker.name}</strong>
                          <span className="speaker-role">{data.speaker.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Reserve CTA */}
                    <button
                      type="button"
                      className={`reserve-seat-btn ${reserved ? "reserved" : ""}`}
                      onClick={() => setReserved(!reserved)}
                    >
                      {reserved ? "Seat Reserved ✓" : "Reserve a seat"}
                    </button>
                  </div>
                </div>

                {/* Bottom App Navigation */}
                <nav className="phone-bottom-nav">
                  <button
                    type="button"
                    className={`nav-tab ${activeBottomNav === "home" ? "active" : ""}`}
                    onClick={() => setActiveBottomNav("home")}
                  >
                    <Home size={15} />
                    <span>Home</span>
                  </button>
                  <button
                    type="button"
                    className={`nav-tab ${activeBottomNav === "schedule" ? "active" : ""}`}
                    onClick={() => setActiveBottomNav("schedule")}
                  >
                    <Calendar size={15} />
                    <span>Schedule</span>
                  </button>
                  <button
                    type="button"
                    className={`nav-tab ${activeBottomNav === "live" ? "active" : ""}`}
                    onClick={() => setActiveBottomNav("live")}
                  >
                    <Video size={15} />
                    <span>Live</span>
                  </button>
                  <button
                    type="button"
                    className={`nav-tab ${activeBottomNav === "profile" ? "active" : ""}`}
                    onClick={() => setActiveBottomNav("profile")}
                  >
                    <User size={15} />
                    <span>Profile</span>
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Gloss / Reflection Overlays */}
        <div className="phone-glare" />
      </div>
    </div>
  );
}
