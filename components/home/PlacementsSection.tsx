import Link from 'next/link';

interface Placement {
  id: number;
  name: string;
  course: string;
  company: string;
  role: string;
  package: string;
}

interface PlacementsSectionProps {
  placements: Placement[];
}

export default function PlacementsSection({ placements }: PlacementsSectionProps) {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Recently Placed Students</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're proud to celebrate the success of our learners who achieved their dream careers through focused training and personalized support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placements.slice(0, 8).map((student) => (
            <div key={student.id} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="fas fa-user-graduate text-3xl text-red-500"></i>
              </div>
              <h3 className="font-semibold text-lg">{student.name}</h3>
              <p className="text-red-600 text-sm">{student.role}</p>
              <p className="text-gray-600 text-sm">{student.company}</p>
              <p className="text-gray-500 text-xs mt-2">{student.course}</p>
              <p className="text-green-600 font-semibold mt-2">{student.package}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/placement" className="btn primary-btn">
            View All Placements <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}