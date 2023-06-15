import React, { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="text-bold">
      <h1 className="text-lg text-center item-center"> Admin Page</h1>
    </div>
  );
}
