"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function FeatureVideo({
  src,
  label,
  entered,
}: {
  src: string;
  label: string;
  entered: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onErr = () => setState("error");
    v.addEventListener("error", onErr);
    return () => v.removeEventListener("error", onErr);
  }, []);

  useEffect(() => {
    if (!entered || state === "error") return;
    const t = setTimeout(
      () => setState((s) => (s === "loading" ? "ready" : s)),
      400
    );
    return () => clearTimeout(t);
  }, [entered]);

  useEffect(() => {
    if (!entered || state === "error") return;
    const v = videoRef.current;
    if (v) {
      const p = v.play();
      if (p) p.catch(() => {});
    }
  }, [entered]);

  return (
    <div className="fp-video">
      <div className="fp-video-card">
        <div className="fp-video-top">
          <span className="fp-browser-url">app.connetra.com</span>
        </div>
        <div className="fp-video-body">
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Connetra ${label} product demo`}
          />
          {state === "loading" && (
            <div className="fp-video-placeholder">
              <span className="vp-play">
                <Play size={22} fill="currentColor" />
              </span>
              <b>Product video</b>
              <small>Loading…</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}