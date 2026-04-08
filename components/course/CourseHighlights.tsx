'use client';

interface CourseHighlightsProps {
  features: string[];
}

export default function CourseHighlights({ features }: CourseHighlightsProps) {
  const highlights = [
    { icon: "fas fa-calendar-alt", title: "Weekdays and Weekend Batches", desc: "Flexible timing to fit your schedule" },
    { icon: "fas fa-laptop", title: "Online and Offline Mode", desc: "Learn from anywhere with both modes" },
    { icon: "fas fa-file-download", title: "Assignments & Materials", desc: "Notes, assignments and study materials provided" },
    { icon: "fas fa-chart-line", title: "80% Practical Learning", desc: "Hands-on projects and real-world applications" },
    { icon: "fas fa-video", title: "Class Recording Provided", desc: "Access recorded sessions anytime" },
    { icon: "fas fa-certificate", title: "Course Completion Certificate", desc: "Industry-recognized certification" },
    { icon: "fas fa-users", title: "5 Students Per Batch", desc: "Personalized attention" },
    { icon: "fas fa-briefcase", title: "Placement Assistance", desc: "Real projects and job assistance" }
  ];

  return (
    <section className="highlights-section">
      <div className="container">
        <h2 className="section-title">Key <span className="title-accent">Highlights</span></h2>
        <p className="section-subtitle">Everything you need for a successful learning journey</p>
        
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="value-added">
          <h3>Every weekend is packed with value-added sessions to boost your career readiness!</h3>
          <div className="value-grid">
            <div className="value-list">
              <h4>Career Development</h4>
              <ul>
                <li><i className="fas fa-check-circle"></i> Softskill Session</li>
                <li><i className="fas fa-check-circle"></i> Email Writing</li>
                <li><i className="fas fa-check-circle"></i> Resume Building</li>
                <li><i className="fas fa-check-circle"></i> Mock Interview</li>
                <li><i className="fas fa-check-circle"></i> Mock Test</li>
              </ul>
            </div>
            <div className="value-list">
              <h4>Technical Enhancement</h4>
              <ul>
                <li><i className="fas fa-check-circle"></i> Project Session</li>
                <li><i className="fas fa-check-circle"></i> Interview Preparation</li>
                <li><i className="fas fa-check-circle"></i> Career Guidelines</li>
                <li><i className="fas fa-check-circle"></i> Technical Workshops</li>
                <li><i className="fas fa-check-circle"></i> Fun Learning Games</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}