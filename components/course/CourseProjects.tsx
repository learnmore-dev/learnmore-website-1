interface CourseProjectsProps {
  projects: any[];
}

export default function CourseProjects({ projects }: CourseProjectsProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Projects You'll Build</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: any, idx: number) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-code text-red-500 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool: string, tIdx: number) => (
                      <span key={tIdx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}