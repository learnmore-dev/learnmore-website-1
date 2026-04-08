export default function StatsSection() {
  const stats = [
    { number: "10k+", label: "Students Trained", icon: "fas fa-user-graduate" },
    { number: "1000+", label: "Students Placed", icon: "fas fa-briefcase" },
    { number: "95%", label: "Satisfaction Rate", icon: "fas fa-smile" },
    { number: "50+", label: "Hiring Partners", icon: "fas fa-building" }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}