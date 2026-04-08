import Link from 'next/link';

interface Course {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
}

interface CoursesSectionProps {
  courses: Course[];
}

export default function CoursesSection({ courses }: CoursesSectionProps) {
  const featuredCourses = courses.slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        <h2>Our Training Programs</h2>
        <div className="course-grid">
          {featuredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>{course.title}</h3>
              <p>{course.shortDescription}</p>
              <Link href={`/course/${course.slug}`} className="course-btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}