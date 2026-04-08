'use client';

interface CourseHeroProps {
  course: any;
  location: any;
  onEnrollClick: () => void;
}

export default function CourseHero({ course, location, onEnrollClick }: CourseHeroProps) {
  return (
    <section className="course-hero">
      <div className="container">
        <div className="hero-content-grid">
          <div className="hero-text">
            <h1 className="hero-title">
              {course.displayName} in <span className="highlight">{location.displayName}</span>
            </h1>
            <p className="hero-subtitle">{course.tagline}</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">7 Million+</span>
                <span className="stat-label">Learners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1:1</span>
                <span className="stat-label">Personalized Mentorship</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">55%</span>
                <span className="stat-label">Average Salary Hike</span>
              </div>
            </div>
            
            <div className="hero-tags">
              {course.tools.slice(0, 6).map((tool: string, idx: number) => (
                <span key={idx} className="tag">{tool}</span>
              ))}
            </div>
            
            <div className="hero-cta">
              <button onClick={onEnrollClick} className="btn primary-btn">
                Enroll Now
              </button>
              <button className="btn secondary-btn">Download Syllabus</button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="tech-icons">
                <i className={course.icon}></i>
                <i className="fas fa-map-marker-alt"></i>
                <i className="fas fa-chalkboard-user"></i>
              </div>
              <p className="motto">{location.name} • {course.displayName}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}