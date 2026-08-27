"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface DocsImageBoxProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export default function DocsImageBox({
  src,
  alt = "Documentation illustration",
  caption,
  className = "",
}: DocsImageBoxProps) {
  const [imageError, setImageError] = useState(false);

  const displayCaption = caption || src.split("/").pop() || "Screenshot placeholder";

  // Normalize src for Next.js public directory
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <figure className={`docs-image-box-wrapper ${className}`}>
      <div className="docs-image-box-frame">
        {/* Content / Image Area */}
        <div className="docs-image-box-body">
          {!imageError ? (
            <img
              src={normalizedSrc}
              alt={alt}
              className="docs-image-element"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="docs-image-placeholder">
              <div className="docs-placeholder-icon-circle">
                <ImageIcon size={32} />
              </div>
              <h4 className="docs-placeholder-title">{displayCaption}</h4>
              <p className="docs-placeholder-desc">
                UI Screenshot Placeholder. Add your image at:
              </p>
              <code className="docs-placeholder-path">{src}</code>
              <div className="docs-placeholder-badge">
                <span>Replaceable image container</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {caption && <figcaption className="docs-image-caption">{caption}</figcaption>}
    </figure>
  );
}
