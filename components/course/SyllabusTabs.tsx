'use client';

import { useState } from 'react';

interface SyllabusTabsProps {
  syllabus: {
    [key: string]: string[];
  };
}

export default function SyllabusTabs({ syllabus }: SyllabusTabsProps) {
  const [activeTab, setActiveTab] = useState(Object.keys(syllabus)[0]);

  const tabs = Object.keys(syllabus);

  return (
    <section className="syllabus-section">
      <div className="container">
        <h2 className="section-title">Course <span className="title-accent">Syllabus</span></h2>
        <p className="section-subtitle">Designed by top industry experts to help you discover rewarding career prospects</p>
        
        <div className="syllabus-tabs">
          <div className="tab-header">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          {tabs.map((tab) => (
            <div key={tab} className={`tab-content ${activeTab === tab ? 'active' : ''}`}>
              <div className="syllabus-modules">
                {syllabus[tab].map((module: string, idx: number) => (
                  <div key={idx} className="module">
                    <h3>Module {idx + 1}: {module.split('-')[0]}</h3>
                    <ul>
                      {module.split(',').map((item: string, i: number) => (
                        <li key={i}>{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}