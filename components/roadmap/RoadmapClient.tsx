"use client";

import { useState, useEffect } from "react";
import { roadmapItems, RoadmapStatus, RoadmapItem } from "@/data/roadmap";
import {
  ChevronUp,
  Plus,
  X,
  Inbox,
  Sparkles,
  Vote,
  Mail,
  FileText,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import RoadmapHero from "./RoadmapHero";

export default function RoadmapClient() {
  const [activeStatus, setActiveStatus] = useState<RoadmapStatus>("All");

  // Add Request Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addTitle, setAddTitle] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addErrors, setAddErrors] = useState<{ title?: string; email?: string }>({});
  const [addNotice, setAddNotice] = useState<string | null>(null);

  // Request Vote Modal state
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [votingItem, setVotingItem] = useState<RoadmapItem | null>(null);
  const [voteEmail, setVoteEmail] = useState("");
  const [voteErrors, setVoteErrors] = useState<{ email?: string }>({});
  const [voteNotice, setVoteNotice] = useState<string | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isAddModalOpen) handleCloseAddModal();
        if (isVoteModalOpen) handleCloseVoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAddModalOpen, isVoteModalOpen]);

  // Lock scroll when any modal is open
  useEffect(() => {
    if (isAddModalOpen || isVoteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAddModalOpen, isVoteModalOpen]);

  const statuses: RoadmapStatus[] = ["All", "To do", "In Progress", "Done"];

  // Filter items
  const filteredItems = roadmapItems.filter((item) => {
    if (activeStatus === "All") return true;
    return item.status === activeStatus;
  });

  const getStatusCount = (status: RoadmapStatus) => {
    if (status === "All") return roadmapItems.length;
    return roadmapItems.filter((item) => item.status === status).length;
  };

  // Add Modal handlers
  const handleOpenAddModal = () => {
    setAddTitle("");
    setAddMessage("");
    setAddEmail("");
    setAddErrors({});
    setAddNotice(null);
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setAddErrors({});
    setAddNotice(null);
  };

  const handleSubmitAddRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { title?: string; email?: string } = {};

    if (!addTitle.trim()) {
      newErrors.title = "Title is required";
    }
    if (!addEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setAddErrors(newErrors);
      return;
    }

    setAddErrors({});
    setAddNotice("Request captured. Backend submission integration is required to record public requests.");
  };

  // Vote Modal handlers
  const handleOpenVoteModal = (item: RoadmapItem) => {
    setVotingItem(item);
    setVoteEmail("");
    setVoteErrors({});
    setVoteNotice(null);
    setIsVoteModalOpen(true);
  };

  const handleCloseVoteModal = () => {
    setIsVoteModalOpen(false);
    setVotingItem(null);
    setVoteErrors({});
    setVoteNotice(null);
  };

  const handleSubmitVote = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string } = {};

    if (!voteEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(voteEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setVoteErrors(newErrors);
      return;
    }

    setVoteErrors({});
    setVoteNotice("Vote captured. Backend voting integration is required to record public votes.");
  };

  return (
    <>
      {/* 1. Hero Section */}
      <RoadmapHero />

      {/* 2. Main Content Container */}
      <div className="roadmap-main-container">
        {/* Controls Bar: Segmented Filters + Add Request Button */}
        <section className="roadmap-controls-section">
          <div className="roadmap-controls-bar">
            <div className="roadmap-segmented-control" role="tablist" aria-label="Roadmap status filter">
              {statuses.map((status) => {
                const count = getStatusCount(status);
                const isActive = activeStatus === status;
                return (
                  <button
                    key={status}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`roadmap-tab ${isActive ? "active" : ""}`}
                    onClick={() => setActiveStatus(status)}
                  >
                    <span>{status}</span>
                    <span className="roadmap-tab-badge">{count}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="roadmap-add-btn"
              onClick={handleOpenAddModal}
              aria-label="Add a product request"
            >
              <Plus size={16} />
              <span>Add a request</span>
            </button>
          </div>
        </section>

        {/* Roadmap Request List */}
        <section className="roadmap-list-section">
          <div className="roadmap-list-header">
            <span className="roadmap-list-label">
              {activeStatus === "All" ? "ROADMAP" : activeStatus.toUpperCase()}
            </span>
            <span className="roadmap-list-count">
              {filteredItems.length} {filteredItems.length === 1 ? "request" : "requests"}
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <div className="roadmap-cards-grid">
              {filteredItems.map((item) => (
                <div key={item.id} className="roadmap-card">
                  {/* Left: Vote Control (Opens Request Vote Popup) */}
                  <button
                    type="button"
                    className="roadmap-vote-control"
                    onClick={() => handleOpenVoteModal(item)}
                    aria-label={`Vote for: ${item.title}`}
                    title="Vote for this request"
                  >
                    <ChevronUp size={18} className="roadmap-vote-arrow" />
                    <span className="roadmap-vote-count">{item.votes}</span>
                  </button>

                  {/* Center: Request Title */}
                  <div className="roadmap-card-content">
                    <h3 className="roadmap-card-title">{item.title}</h3>
                  </div>

                  {/* Right: Status Pill */}
                  <div className="roadmap-card-status">
                    <span className={`roadmap-status-pill ${item.status.toLowerCase().replace(/\s+/g, "-")}`}>
                      <span className="roadmap-status-dot" />
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="roadmap-empty-state">
              <div className="roadmap-empty-icon-box">
                <Inbox size={32} />
              </div>
              <h3 className="roadmap-empty-title">No requests here yet</h3>
              <p className="roadmap-empty-desc">
                There are currently no items in <strong>{activeStatus}</strong>. Switch to another tab or submit a new improvement suggestion above.
              </p>
              <button
                type="button"
                className="roadmap-empty-cta"
                onClick={() => setActiveStatus("All")}
              >
                View all requests
              </button>
            </div>
          )}
        </section>
      </div>

      {/* =========================================================================
          POPUP 1: ADD REQUEST MODAL (Modern Connetra Style)
          ========================================================================= */}
      {isAddModalOpen && (
        <div className="modern-modal-overlay" onClick={handleCloseAddModal} role="dialog" aria-modal="true">
          <div className="modern-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modern-modal-header">
              <div className="modern-modal-title-wrap">
                <div className="modern-modal-icon-badge blue">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h2 className="modern-modal-title">Suggest an improvement</h2>
                  <p className="modern-modal-subtitle">Share your ideas for new connectors, alerts, or catalog features.</p>
                </div>
              </div>
              <button
                type="button"
                className="modern-modal-close-btn"
                onClick={handleCloseAddModal}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmitAddRequest} className="modern-modal-body">
              {/* Title Field */}
              <div className="modern-form-group">
                <label htmlFor="add-title" className="modern-form-label">
                  <FileText size={14} className="modern-form-icon" />
                  <span>Title <span className="required-star">*</span></span>
                </label>
                <input
                  id="add-title"
                  type="text"
                  className={`modern-form-input ${addErrors.title ? "error" : ""}`}
                  placeholder="e.g. Support for ClickHouse connector"
                  value={addTitle}
                  onChange={(e) => {
                    setAddTitle(e.target.value);
                    if (addErrors.title) setAddErrors({ ...addErrors, title: undefined });
                  }}
                  autoFocus
                />
                {addErrors.title && <span className="modern-form-error">{addErrors.title}</span>}
              </div>

              {/* Message Field */}
              <div className="modern-form-group">
                <label htmlFor="add-message" className="modern-form-label">
                  <MessageSquare size={14} className="modern-form-icon" />
                  <span>Message / Details</span>
                </label>
                <textarea
                  id="add-message"
                  rows={3}
                  className="modern-form-textarea"
                  placeholder="Describe your use case or specific requirements..."
                  value={addMessage}
                  onChange={(e) => setAddMessage(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div className="modern-form-group">
                <label htmlFor="add-email" className="modern-form-label">
                  <Mail size={14} className="modern-form-icon" />
                  <span>Email address <span className="required-star">*</span></span>
                </label>
                <input
                  id="add-email"
                  type="email"
                  className={`modern-form-input ${addErrors.email ? "error" : ""}`}
                  placeholder="you@company.com"
                  value={addEmail}
                  onChange={(e) => {
                    setAddEmail(e.target.value);
                    if (addErrors.email) setAddErrors({ ...addErrors, email: undefined });
                  }}
                />
                {addErrors.email && <span className="modern-form-error">{addErrors.email}</span>}
              </div>

              {addNotice && (
                <div className="modern-modal-notice">
                  <AlertCircle size={16} />
                  <span>{addNotice}</span>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="modern-modal-footer">
                <button
                  type="button"
                  className="modern-btn-secondary"
                  onClick={handleCloseAddModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="modern-btn-primary"
                >
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          POPUP 2: REQUEST VOTE MODAL (Modern Connetra Style)
          ========================================================================= */}
      {isVoteModalOpen && (
        <div className="modern-modal-overlay" onClick={handleCloseVoteModal} role="dialog" aria-modal="true">
          <div className="modern-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modern-modal-header">
              <div className="modern-modal-title-wrap">
                <div className="modern-modal-icon-badge navy">
                  <Vote size={18} />
                </div>
                <div>
                  <h2 className="modern-modal-title">Vote for this request</h2>
                  <p className="modern-modal-subtitle">Help our product team prioritize features that matter to you.</p>
                </div>
              </div>
              <button
                type="button"
                className="modern-modal-close-btn"
                onClick={handleCloseVoteModal}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmitVote} className="modern-modal-body">
              {votingItem && (
                <div className="modern-vote-target-card">
                  <span className="modern-vote-target-tag">Request item</span>
                  <p className="modern-vote-target-text">{votingItem.title}</p>
                </div>
              )}

              {/* Email Field */}
              <div className="modern-form-group">
                <label htmlFor="vote-email" className="modern-form-label">
                  <Mail size={14} className="modern-form-icon" />
                  <span>Your email address <span className="required-star">*</span></span>
                </label>
                <input
                  id="vote-email"
                  type="email"
                  className={`modern-form-input ${voteErrors.email ? "error" : ""}`}
                  placeholder="you@company.com"
                  value={voteEmail}
                  onChange={(e) => {
                    setVoteEmail(e.target.value);
                    if (voteErrors.email) setVoteErrors({ ...voteErrors, email: undefined });
                  }}
                  autoFocus
                />
                {voteErrors.email && <span className="modern-form-error">{voteErrors.email}</span>}
              </div>

              {voteNotice && (
                <div className="modern-modal-notice">
                  <AlertCircle size={16} />
                  <span>{voteNotice}</span>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="modern-modal-footer">
                <button
                  type="button"
                  className="modern-btn-secondary"
                  onClick={handleCloseVoteModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="modern-btn-primary"
                >
                  Submit vote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
