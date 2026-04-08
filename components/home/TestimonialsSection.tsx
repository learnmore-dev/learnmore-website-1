interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our <span className="title-accent">Students Say</span></h2>
        <p className="section-subtitle">Hear from our successful students</p>
        
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.content}"</p>
              <div className="author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}