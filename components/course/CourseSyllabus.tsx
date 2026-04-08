interface CourseSyllabusProps {
  syllabus: any[];
}

export default function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Course Syllabus</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabus.map((module: any, idx: number) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="bg-red-500 text-white px-6 py-3">
                <h3 className="font-bold text-lg">Module {module.module}</h3>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-3">{module.title}</h4>
                <ul className="space-y-2">
                  {module.topics.map((topic: string, tIdx: number) => (
                    <li key={tIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-500 text-xs mt-1"></i>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}