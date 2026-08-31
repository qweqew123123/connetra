"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import type { FeatureItem } from "../data/features";

interface FeatureVideoProps {
  feature: FeatureItem;
  active: boolean;
}

export default function FeatureVideo({ feature, active }: FeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!active) {
      videoRef.current?.pause();
      return;
    }
    const v = videoRef.current;
    if (v) {
      const p = v.play();
      if (p) p.catch(() => {});
    }
  }, [active]);

  return (
    <div className={`feature-video-wrap ${active ? "active" : ""}`}>
      <div className="feature-video-card">
        <div className="feature-video-top">
          <div className="fv-url">app.connetra.com</div>
        </div>
        <div className="feature-video-body">
          <video
            ref={videoRef}
            src={feature.video}
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setState("ready")}
            onError={() => setState("error")}
            aria-label={`Connetra ${feature.tabLabel.toLowerCase()} product demo`}
          />
          {state !== "ready" && (
            <div className="video-placeholder">
              <span className="vp-play">
                <Play size={22} fill="currentColor" />
              </span>
              <b>Product video</b>
              <small>{feature.video}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}