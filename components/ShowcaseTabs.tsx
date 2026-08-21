export interface ShowcaseTab {
  id: string;
  label: string;
}

interface ShowcaseTabsProps {
  tabs: ShowcaseTab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function ShowcaseTabs({ tabs, activeTab, onChange }: ShowcaseTabsProps) {
  return (
    <div className="showcase-tabs" role="tablist" aria-label="Product views">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          className={`showcase-tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
