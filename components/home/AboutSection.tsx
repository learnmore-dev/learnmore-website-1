export default function AboutSection() {
  const features = [
    { icon: "fas fa-user-tie", title: "Experienced MNC Professionals" },
    { icon: "fas fa-building", title: "Corporate Style Training" },
    { icon: "fas fa-book", title: "Syllabus Based on Companies" },
    { icon: "fas fa-briefcase", title: "Placement Oriented Courses" },
    { icon: "fas fa-project-diagram", title: "Projects for Every Course" },
    { icon: "fas fa-file-alt", title: "Own Prepared Materials" }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="title-accent">Learnmore Technologies</span></h2>
          <p className="section-subtitle">Bridging the gap between academic learning and real-world industry needs</p>
        </div>
        
        <div className="about-text">
          <p>Learnmore Technologies is a fast-growing hub for IT and professional skill development. In a short time, we've built a reputation for delivering high-quality, job-ready training that bridges the gap between academic learning and real-world industry needs. We believe success comes from planning, coordination, and motivation— values reflected in every classroom session and online program we run. Our dedicated coordinators, experienced trainers, and carefully designed courses ensure that every student receives the guidance needed to excel.</p>
          
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <i className={feature.icon}></i>
                <h4>{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}