interface CourseFeaturesProps {
  features: any[];
}

export default function CourseFeatures({ features }: CourseFeaturesProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature: any, idx: number) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-red-500 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}