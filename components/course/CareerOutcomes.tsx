interface CareerOutcomesProps {
  salaryRange: string;
  jobRoles: string[];
  careerPaths: string[];
}

export default function CareerOutcomes({ salaryRange, jobRoles, careerPaths }: CareerOutcomesProps) {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Career Outcomes</h2>
        <p className="text-center text-gray-600 mb-12">Average Salary: {salaryRange}</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Job Roles</h3>
            <div className="grid grid-cols-2 gap-3">
              {jobRoles.map((role: string, idx: number) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                  <i className="fas fa-briefcase text-red-500 mr-2"></i>
                  <span className="text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Career Paths</h3>
            <div className="space-y-3">
              {careerPaths.map((path: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <i className="fas fa-arrow-right text-red-500"></i>
                  <span>{path}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}