"use client";

import { useState } from "react";
import { Image as ImageIcon, Copy, Check, ExternalLink } from "lucide-react";

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
  const [copied, setCopied] = useState(false);

  const displayCaption = caption || src.split("/").pop() || "Screenshot placeholder";

  // Normalize src for Next.js public directory
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  const handleCopyPath = () => {
    navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <figure className={`docs-image-box-wrapper ${className}`}>
      <div className="docs-image-box-frame">
        {/* Mock Browser/Dashboard Header */}
        <div className="docs-image-box-header">
          <div className="docs-image-box-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="docs-image-box-title" title={src}>
            {displayCaption}
          </div>
          <button
            type="button"
            className="docs-image-box-copy-btn"
            onClick={handleCopyPath}
            title="Copy image source path"
            aria-label="Copy image path"
          >
            {copied ? (
              <>
                <Check size={12} className="text-success" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy path</span>
              </>
            )}
          </button>
        </div>

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
