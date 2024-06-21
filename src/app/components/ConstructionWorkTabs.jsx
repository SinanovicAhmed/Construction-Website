import { useState } from "react";

const ConstructionWorkTabs = ({ setActiveType }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "All Work", tag: "allwork" },
    { id: 1, label: "Construction", tag: "construction" },
    { id: 2, label: "Renovation", tag: "renovation" },
    { id: 3, label: "Landscaping", tag: "landscaping" },
  ];

  const handleTabChange = (event) => {
    const tabId = parseInt(event.target.value, 10);
    setActiveTab(tabId);
    const activeType = tabs.find((tab) => tab.id === tabId)?.tag || "allwork";
    setActiveType(activeType);
  };

  return (
    <div className="space-x-2 md:space-x-6 py-2 md:py-0 select-none">
      {tabs.map((tab) => (
        <label
          key={tab.id}
          className={`text-xs sm:text-sm lg:text-base${
            activeTab === tab.id ? "text-primary_gray border-b-2 border-primary_gray" : "text-white"
          }`}
        >
          <input
            type="radio"
            name="tabs"
            value={tab.id}
            checked={activeTab === tab.id}
            onChange={handleTabChange}
            className="hidden"
          />
          {tab.label}
        </label>
      ))}
    </div>
  );
};

export default ConstructionWorkTabs;
