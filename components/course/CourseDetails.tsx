interface Course {
  id: number;
  title: string;
  fullDescription: string;
  duration: string;
  price: number;
  level: string;
  features: string[];
  certification: string;
}

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* About Section */}
        <div className="about-section bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Course</h2>
          <p className="text-gray-600 mb-6">{course.fullDescription}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-clock text-red-500 text-2xl mb-2"></i>
              <p className="font-semibold">Duration</p>
              <p className="text-gray-600">{course.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-chart-line text-red-500 text-2xl mb-2"></i>
              <p className="font-semibold">Level</p>
              <p className="text-gray-600">{course.level}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-certificate text-red-500 text-2xl mb-2"></i>
              <p className="font-semibold">Certification</p>
              <p className="text-gray-600">{course.certification}</p>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Enrollment */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Enroll Now</h2>
          <p className="text-xl mb-4">Course Fee: ₹{course.price.toLocaleString()}</p>
          <p className="mb-6">Flexible EMI options available • Scholarship for meritorious students</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition enroll-btn">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}